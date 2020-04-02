import { gql } from "apollo-server-express";

export default gql`
  type TeamLeader {
    name: String!
    phone: String!
  }

  extend type Query {
    getPhoneNumber(name: String!): String!
  }

  extend type Query {
    getAllTeamLeaders: [TeamLeader!]!
  }
  extend type Mutation {
    addTeamLeader(name: String!, phone: String!): TeamLeader
  }
`;
