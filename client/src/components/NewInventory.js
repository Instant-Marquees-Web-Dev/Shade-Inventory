import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { useModal } from '../hooks'
import LoadingActiveJob from '../elements/LoadingActiveJob'
import InventoryTable from '../elements/InventoryTable'
import ModalInventory from '../elements/ModalInventory'

const GET_STRUCTURE_PARTS = gql`
  query getAllStructureParts{
    getAllStructureParts {
      id
      name
      specification
      count
    }
}
`
const EDIT_STRUCTURE_COUNT = gql`
  mutation editPartCount($id:ID!, $count:Int!) {
  editPartCount(id:$id, count:$count){
    id
    count
  }
}
`

const NewInventory = () => {
  const [currentItem, setCurrentItem] = useState()
  const [isModal, toggleModal] = useModal()
  const  {loading, error, data} = useQuery(GET_STRUCTURE_PARTS)
  const { getAllStructureParts } = data || []

  const [editPartCount] = useMutation(
    EDIT_STRUCTURE_COUNT
  )

  const handleOk = (id, oldCount) => {
    const count = parseInt(oldCount)
    editPartCount({
      variables: { id, count },
      optimisticResponse: {
        __typename: "Mutation",
        editPartCount: {
          id,
          count,
          __typename: "StructurePart"
        }
      }
    })

    toggleModal()
  }

  const handleEdit = index => {
    setCurrentItem(getAllStructureParts[index])
    toggleModal()
  }

  

  if (loading) {
    return <LoadingActiveJob loading={loading}/>
  }

  if (error) {
    return <h1>Error loading page</h1>
  }

  return (
    <>
      <InventoryTable inventories={getAllStructureParts} handleEdit={handleEdit}/>
    {
      isModal && 
      <ModalInventory 
        isModal 
        toggleModal={toggleModal} 
        handleOk={handleOk}
        currentItem={currentItem}
        />
    }
    </>
  )
}

export default NewInventory
