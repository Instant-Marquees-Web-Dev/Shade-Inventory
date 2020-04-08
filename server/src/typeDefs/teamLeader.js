import { gql } from "apollo-server-express";

export default gql`
  type TeamLeader {
    id: ID!
    name: String!
    phone: String!
    email: String!
  }

  extend type Query {
    getPhoneNumber(name: String!): String!
  }

  extend type Query {
    getName(name: String!): String!
  }

  extend type Query {
    getEmail(name: String!): String!
  }

  extend type Query {
    getAllTeamLeaders: [TeamLeader!]!
  }
  extend type Mutation {
    addTeamLeader(name: String!, phone: String!, email: String!): TeamLeader
  }

  extend type Mutation {
    editName(id: ID!, name: String!): TeamLeader
  }

  extend type Mutation {
    editPhone(id: ID!, phone: String!): TeamLeader
  }

  extend type Mutation {
    editEmail(id: ID!, email: String!): TeamLeader
  }
`;
