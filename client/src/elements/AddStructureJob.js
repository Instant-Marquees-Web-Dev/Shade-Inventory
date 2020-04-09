import React, { useState } from 'react'
import { message } from 'antd'
import { useMutation } from '@apollo/react-hooks'
import { useForm } from '../hooks'
import { GET_JOB_DATA, ADD_JOB } from '../queries'
import AddStructureForm from './AddStructureForm'


const AddStructureJob = () => {
    const {inputs,setInputs, handleChange, resetForm} = useForm({
        teamLeader: '',
        suburb: '',
        address: '',
        setupDate: '',
        pulldownDate: '',
        size: '',
        length: '',
        structureType: '',
        Notes: '',
        phone: ''
    }) 

    const 
    {
        teamLeader,
        suburb,
        address,
        setupDate,
        pulldownDate,
        size: strSize,
        length: strLength,
        structureType,
        Notes,
        phone
    }  = inputs 

    const [addJob] = useMutation(
        ADD_JOB,
        {
            update(cache, {data: {addJob}}) {
                const { getActiveJobs } = cache.readQuery({ query: GET_JOB_DATA })
                cache.writeQuery({
                    query: GET_JOB_DATA,
                    data: { getActiveJobs: [...getActiveJobs, addJob]}
                })
            }
        }
    )

    const handleSubmit = () => {
        // Convert String to int for db
        const size = parseInt(strSize)
        const length = parseInt(strLength)

        //checks if form contains empty fills
        const VALIDATE_FORM = Object.values(inputs).filter(x => x.length).length > 8
        
        if(VALIDATE_FORM){
        // Add query 
        addJob({
            variables:
            {
                suburb,
                address,
                setupDate,
                pulldownDate,
                teamLeader,
                structures: [{
                    size,
                    length,
                    structureType,
                    Notes,
            }]
            },
            optimisticResponse: {
                __typename: "Mutation",
                addJob: {
                    id: "13123129124",
                    suburb,
                    address,
                    setupDate,
                    pulldownDate,
                    teamLeader,
                    structures: [{
                      size,
                      length,
                      structureType,
                      Notes,
                      __typename: "StructureInput"
                    }],
                    __typename: "ActiveJob"
                  }
            }
        })
        resetForm()
        message.success('Successfully added job')
        } else {
            message.error('Fill all the forms ')
        }
    }

  return (
    <>
        <AddStructureForm 
            job={inputs} 
            setJob={setInputs} 
            updateField={handleChange} 
            resetForm={resetForm}
            handleSubmit={handleSubmit}
        />
    </>
  )
}

export default AddStructureJob;