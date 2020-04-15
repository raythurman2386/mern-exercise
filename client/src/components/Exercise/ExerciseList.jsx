import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_EXERCISES } from '../../queries';
import Exercise from './Exercise';

const ExerciseList = () => {
	const { loading, error, data } = useQuery(GET_EXERCISES);

	if (loading) {
		return <h3>Loading . . .</h3>;
	}

	if (error) {
		console.log(error);
		return <h3>Something has went wrong</h3>;
	}

	const list = () => {
		return data.exercises.map(exercise => (
			<Exercise key={exercise.id} exercise={exercise} />
		));
	};

	return (
		<div>
			<h3>Logged Exercises</h3>
			<table className='table'>
				<thead className='thead-light'>
					<tr>
						<th>Username</th>
						<th>Description</th>
						<th>Reps</th>
						<th>Sets</th>
						<th>Date</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>{list()}</tbody>
			</table>
		</div>
	);
};

export default ExerciseList;
