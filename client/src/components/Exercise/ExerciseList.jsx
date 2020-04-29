import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_EXERCISES, DELETE_EXERCISE } from '../../queries';
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

	const list = () => {
		return data.exercises.map(exercise => (
			<Exercise key={exercise.id} exercise={exercise} />
		));
	};

	return (
		<div className='table w-full'>
			<div className='table-header-group'>
				<div className='table-row'>
					<div className='rounded-tl-lg table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm font-semibold'>
						Username
					</div>
					<div className='table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm font-semibold'>
						Description
					</div>
					<div className='table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm font-semibold'>
						Reps
					</div>
					<div className='table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm font-semibold'>
						Sets
					</div>
					<div className='table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm font-semibold'>
						Date
					</div>
					<div className='rounded-tr-lg table-cell bg-gray-400 text-gray-700 px-4 py-2 text-sm font-semibold'>
						Actions
					</div>
				</div>
			</div>
			<div className='table-row-group'>{list()}</div>
		</div>
	);
};

export default ExerciseList;
