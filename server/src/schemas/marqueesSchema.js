import { gql } from "apollo-server";

export default gql`
  type Marquees {
    id: ID!
    size: Number!
    type: String!
    color: String!
    quality: String!
    count: Number!
  }

  extend type Query {
    marquees(size: String!): Marquees!
    marquees: [Marquees!]!
  }
`;
