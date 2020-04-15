import { gql } from 'apollo-boost';

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
	query getUsers($id: ID!) {
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
