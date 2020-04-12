import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    hello: String
    users: [User]!
    user(id: ID!): User
    exercises: [Exercise]!
    exercise(id: ID!): Exercise
  }

  type User {
    username: String!
    email: String!
    password: String!
  }

  type Exercise {
    username: String!
    description: String!
    reps: Int!
    sets: Int!
    date: String!
  }
`;

export default typeDefs;
