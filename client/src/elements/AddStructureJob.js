import React, { useState } from 'react'
import AddStructureForm from './AddStructureForm'

const AddStructureJob = () => {
    const [job, setJob] = useState({
        teamLeader: '',
        suburb: '',
        address: '',
        setupDate: '',
        pulldownDate: '',
        size: '',
        length: '',
        structureType: '',
        notes: '',
        phone: ''
    })

    const updateField = e => {
        setJob({
            ...job,
            [e.target.name]: e.target.value
        })
    }

  return (
    <>
        <AddStructureForm job={job} setJob={setJob} updateField={updateField}/>
    </>
  )
}

export default AddStructureJob;