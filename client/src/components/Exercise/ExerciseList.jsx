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
		console.error(error);
		return <h3>Something has went wrong</h3>;
	}

	const deleteExercise = id => {
		console.log(id);
	};

	const list = () => {
		return data.exercises.map(exercise => (
			<Exercise
				key={exercise.id}
				exercise={exercise}
				deleteExercise={deleteExercise}
			/>
		));
	};

	return (
		<div className='table w-full'>
			<div className='table-header-group'>
				<div className='table-row'>
					<div className='table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm'>
						Username
					</div>
					<div className='table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm'>
						Description
					</div>
					<div className='table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm'>
						Reps
					</div>
					<div className='table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm'>
						Sets
					</div>
					<div className='table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm'>
						Date
					</div>
					<div className='table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm'>
						Actions
					</div>
				</div>
			</div>
			<div className='table-row-group'>{list()}</div>
		</div>
	);
};

export default ExerciseList;
