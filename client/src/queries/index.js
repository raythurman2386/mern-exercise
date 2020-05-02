import { gql } from 'apollo-boost';

export const SIGNUP = gql`
	mutation signup($email: String!, $username: String!, $password: String!) {
		signup(email: $email, username: $username, password: $password) {
			token
			user {
				id
				username
			}
		}
	}
`;

export const LOGIN = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				id
				username
			}
		}
	}
`;

export const GET_EXERCISES = gql`
	{
		exercises {
			id
			username
			description
			reps
			sets
			date
		}
	}
`;

export const GET_MY_EXERCISES = gql`
	query myExercises($username: String!) {
		myExercises(username: $username) {
			id
			username
			description
			reps
			sets
			date
		}
	}
`;

export const GET_EXERCISE = gql`
	query exercise($id: ID!) {
		exercise(id: $id) {
			id
			username
			description
			reps
			sets
			date
		}
	}
`;

export const GET_UPDATE = gql`
	query getUpdate($id: ID!) {
		users {
			id
			username
		}

		exercise(id: $id) {
			id
			username
			description
			reps
			sets
			date
		}
	}
`;

export const GET_USERS = gql`
	{
		users {
			id
			username
		}
	}
`;

export const GET_USER = gql`
	query getUser($id: ID!) {
		user(id: $id) {
			id
			username
			exercises {
				id
				description
				reps
				sets
				date
			}
		}
	}
`;

export const ADD_EXERCISE = gql`
	mutation addExercise(
		$username: String!
		$description: String!
		$reps: Int!
		$sets: Int!
		$date: String!
	) {
		addExercise(
			username: $username
			description: $description
			reps: $reps
			sets: $sets
			date: $date
		) {
			id
			username
			description
			reps
			sets
			date
		}
	}
`;

export const DELETE_EXERCISE = gql`
	mutation deleteExercise($id: ID!) {
		deleteExercise(id: $id)
	}
`;
