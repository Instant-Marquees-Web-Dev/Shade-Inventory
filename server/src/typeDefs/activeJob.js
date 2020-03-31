import { gql } from "apollo-server-express";

export default gql`
  type Structure {
    size: Int!
    length: Int!
    structureType: String!
    Notes: String!
  }

  input StructureInput {
    size: Int!
    length: Int!
    structureType: String!
    Notes: String!
  }

  type ActiveJob {
    id: ID!
    suburb: String!
    address: String!
    setupDate: String!
    pulldownDate: String!
    teamLeader: String!
    structures: [Structure]
  }

  extend type Query {
    getJob(id: ID!): ActiveJob
    getActiveJobs: [ActiveJob!]!
  }

  extend type Mutation {
    addJob(
      suburb: String!
      address: String!
      setupDate: String!
      pulldownDate: String!
      teamLeader: String!
      structures: [StructureInput!]!
    ): ActiveJob
  }

  extend type Mutation {
    editSuburb(id: ID!, suburb: String!): ActiveJob
  }

  extend type Mutation {
    editSetupDate(id: ID!, setupDate: String!): ActiveJob
  }

  extend type Mutation {
    editPulldownDate(id: ID!, pulldownDate: String!): ActiveJob
  }

  extend type Mutation {
    editTeamLeader(id: ID!, teamLeader: String!): ActiveJob
  }
`;
