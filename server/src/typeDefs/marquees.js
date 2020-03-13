import { gql } from "apollo-server-express";

export default gql`
  type Marquees {
    id: ID!
    size: Int!
    marqueeType: String!
    color: String!
    quality: String!
    count: Int!
  }

  ##extend type Query {
  ##marquees(size: Int!): Marquees!
  ##marquees: [Marquees!]!
  ##}
`;
