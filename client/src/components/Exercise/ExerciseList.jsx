import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_EXERCISES } from '../../queries';

const ExerciseList = () => {
	const { loading, error, data } = useQuery(GET_EXERCISES);

	if (loading) {
		return <h3>Loading . . .</h3>;
	}

	if (error) {
		console.log(error);
		return <h3>Something has went wrong</h3>;
	}

	return (
		<div>
			{data.exercises &&
				data.exercises.map(exercise => (
					<p key={exercise.id}>{exercise.description}</p>
				))}
		</div>
	);
};

export default ExerciseList;
