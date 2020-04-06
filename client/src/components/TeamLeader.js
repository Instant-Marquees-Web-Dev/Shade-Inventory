import React from 'react'
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import TeamLeaderTable from '../elements/TeamLeaderTable'
import LoadingActiveJob from '../elements/LoadingActiveJob'

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

const TeamLeader = () => {
  const {loading, error, data} = useQuery(ALL_TEAMLEADER);
  if (loading) {
    return <LoadingActiveJob loading={loading} />;
  }

  if (error) {
    return <h1>Error loading active dashboad</h1>
  }
  return (
    <>
    <TeamLeaderTable teamleader={data.getAllTeamLeaders} ALL_TEAMLEADER={ALL_TEAMLEADER}/>
    </>
  )
}

export default TeamLeader
