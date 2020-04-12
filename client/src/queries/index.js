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
