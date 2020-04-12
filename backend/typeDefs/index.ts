import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hello: String
    users: [User]!
  }

  type User {
    username: String!
    email: String!
    password: String!
  }
`;

export default typeDefs;
