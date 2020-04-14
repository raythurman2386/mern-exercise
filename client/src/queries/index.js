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
