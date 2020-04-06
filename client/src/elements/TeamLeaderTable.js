import React, { useState } from 'react'
import { useModal } from '../hooks/useModal'
import { Avatar } from 'antd'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { RightOutlined } from "@ant-design/icons";
import TeamLeaderModal from './TeamLeaderModal';

const initialState = {
  name: '',
  phone: '',
  email: ''
}

const ADD_TEAMLEADER = gql`
mutation addTeamLeader($name: String!, $phone: String!, $email: String!){
  addTeamLeader(name:$name, phone:$phone, email:$email){
    name
    phone
    email
  }
}
`

const TeamLeaderTable = ({teamleader, ALL_TEAMLEADER}) => {
  const [isModalOpen, toggleModal] = useModal(false)
  const [teamLeader, setTeamLeader] = useState(initialState)

  const { id, name, phone, email } = teamLeader

  const [addTeamLeader] = useMutation(
    ADD_TEAMLEADER,
    {
      // Immediately updates the table
      update(cache, { data: { addTeamLeader }}) {
        const { getAllTeamLeaders } = cache.readQuery({ query: ALL_TEAMLEADER })
        cache.writeQuery({
          query: ALL_TEAMLEADER,
          data: { getAllTeamLeaders: [...getAllTeamLeaders, addTeamLeader]}
        })
      }
    }
  )

  const handleOk = () => {
    const VALIDATE_INPUT = name.trim().length > 1 && phone.trim().length > 1 && email.trim().length > 1
    if(VALIDATE_INPUT){
      addTeamLeader({
          variables: { name, phone, email },
          //  simulate the results of a mutation 
          //  and update the UI even before receiving a response from the server
          optimisticResponse: {  
              __typename: "Mutation",
              addTeamLeader: {
                  id: "dsad13213",
                  name,
                  phone,
                  email,
                  __typename: "TeamLeader"
                }
              }
      })
    }
    setTeamLeader(initialState)
    toggleModal()
  }

  const handleCancel = () => {
    setTeamLeader(initialState)
    toggleModal()
  }

  return (
    <div className="flex justify-center mb-4">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-11/12">
        <div className="flex justify-between mb-4">
          <h1 className="text-gray-900 font-bold text-xl mb-2 self-start">Team Leader</h1>
          <span className="inline-flex rounded-md shadow-sm">
            <button 
              type="button" 
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              onClick={toggleModal}  
            >
              Add Teamleader
            </button>
          </span>
        </div>
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                  <table className="min-w-full">
                      <thead>
                      <tr>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Name
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Phone number
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Email
                          </th>
                          <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                      </tr>
                      </thead>
                      <tbody className="bg-white">
                      {teamleader.map(({id, name, phone, email}) => (
                        <tr key={id}>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="flex items-center ">
                              <div className="flex-shrink-0 h-10 w-10">
                              <Avatar>{name[0]}</Avatar>
                             </div>
                              <div className="ml-4">
                              <div className="text-sm leading-5 font-medium text-gray-900">{name}</div>
                              </div>
                          </div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">{phone}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 text-gray-900">{email}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"><RightOutlined /></a>
                          </td>
                      </tr>
                      ))}
                      {/* Show Modal */
                        isModalOpen ? (
                          <TeamLeaderModal
                            modal={isModalOpen}
                            teamLeader={teamLeader}
                            setTeamLeader={setTeamLeader}
                            handleOk={handleOk}
                            handleCancel={handleCancel}
                          />
                        ) : null
                      }
                      </tbody>
                  </table>
                    </div>
                </div>
            </div>  
  )
}

export default TeamLeaderTable
