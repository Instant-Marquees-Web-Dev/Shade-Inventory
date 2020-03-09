import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getJob(id: ID!): ActiveJob
    getActiveJobs: [ActiveJob!]!
  }

  type Structure {
    size: Int!
    length: Int!
    type: Int!
    Notes: String!
  }

  type ActiveJob {
    id: ID!
    suburb: String!
    setupDate: String!
    pulldownDate: String!
    teamLeader: String!
    structure: [Structure]
  }
`;
