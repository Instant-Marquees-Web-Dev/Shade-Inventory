import { gql } from "apollo-server-express";

export default gql`
  type StructurePart {
    id: ID!
    name: String!
    specification: String!
    count: Int!
  }

  extend type Query {
    getPartCount(name: String!): Int!
  }
  extend type Query {
    getPartSpecification(name: String!): String!
  }
  extend type Query {
    getAllStructureParts: [StructurePart!]!
  }
  extend type Mutation {
    addStructurePart(
      name: String!
      specification: String!
      count: Int!
    ): StructurePart
  }

  extend type Mutation {
    editPartName(id: ID!, name: String!): StructurePart
  }

  extend type Mutation {
    editPartSpecification(id: ID!, specification: String!): StructurePart
  }

  extend type Mutation {
    editPartCount(id: ID!, count: Int!): StructurePart
  }
`;
