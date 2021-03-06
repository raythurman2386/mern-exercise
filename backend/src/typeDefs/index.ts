import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    welcome: String
    users: [User]!
    user(id: ID!): User
    exercises: [Exercise]!
    exercise(id: ID!): Exercise
    myExercises(username: String!): [Exercise]!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    providerId: String
    provider: String
    exercises: [Exercise]!
  }

  type Exercise {
    id: ID!
    username: String!
    description: String!
    reps: Int!
    sets: Int!
    date: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Mutation {
    signup(username: String!, email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    addExercise(
      username: String!
      description: String!
      reps: Int!
      sets: Int!
      date: String!
    ): Exercise
    updateExercise(
      id: ID!
      username: String!
      description: String!
      reps: Int!
      sets: Int!
      date: String!
    ): Exercise
    deleteExercise(id: ID!): String
  }
`;

export default typeDefs;
