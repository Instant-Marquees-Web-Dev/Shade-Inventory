import { gql } from "apollo-boost";

export const GET_JOB_DATA = gql`
  query getActiveJobs {
    getActiveJobs {
      id
      suburb
      address
      setupDate
      pulldownDate
      teamLeader
      structures {
        size
        length
        structureType
        Notes
      }
    }

    getAllTeamLeaders {
      id
      name
      phone
      email
    }
  }
`;


export const ADD_JOB = gql`
  mutation addJob(
    $suburb: String!
    $address: String!
    $setupDate: String!
    $pulldownDate: String!
    $teamLeader: String!
    $structures: [StructureInput!]!
  ) {
    addJob(
      suburb: $suburb
      address: $address
      setupDate: $setupDate
      pulldownDate: $pulldownDate
      teamLeader: $teamLeader
      structures: $structures
    ) {
      id
      suburb
      address
      setupDate
      pulldownDate
      teamLeader
      structures {
        size
        length
        structureType
        Notes
      }
    }
  }
`