import React from 'react'
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"

const ALL_TEAMLEADER = gql`
  query getAllTeamLeaders{
    getAllTeamLeaders{
      id
      name
      phone
      email
    }
  }
`

const TeamLeaderList = ({ teamLeader, updateField }) => {
  const {loading, error, data} = useQuery(ALL_TEAMLEADER);
  
  if (loading) {return null}

  if (error) {
    return <option>Error loading...</option>
  }

  const { getAllTeamLeaders } = data || ""
  return (
    <div className="sm:col-span-3">
      <label htmlFor="teamLeader" className="block text-sm font-medium leading-5 text-gray-700">
              Team Leader
      </label>
      <div className="mt-1 rounded-md shadow-sm">
          <select 
          id="teamLeader" 
          name="teamLeader"
          onChange={updateField}
          value={teamLeader}
          className="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          >
          <option value="">Select Team Leader</option>
          {
            getAllTeamLeaders.map(({id, name}) => (
            <option key={id} value={name}>{name}</option>
            ))
          }
          </select>
      </div>
      </div>
  )
}

export default TeamLeaderList
