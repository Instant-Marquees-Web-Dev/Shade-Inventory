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
      setupDate: String!
      pulldownDate: String!
      teamLeader: String!
      structures: [StructureInput!]!
    ): ActiveJob
  }

  extend type Mutation {
    editSuburb(suburb: String!): ActiveJob
  }
`;
