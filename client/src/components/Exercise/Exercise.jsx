import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { GET_EXERCISES, DELETE_EXERCISE } from '../../queries';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Exercise = props => {
	const { handleLocalStorage } = useLocalStorage('exercise');

	const [deleteExercise] = useMutation(DELETE_EXERCISE, {
		update(cache, { data: { deleteExercise } }) {
			const { exercises } = cache.readQuery({ query: GET_EXERCISES });
			cache.writeQuery({
				query: GET_EXERCISES,
				data: {
					exercises: exercises.filter(
						exercise => exercise.id !== props.exercise.id
					),
				},
			});
		},
	});

	return (
		<div className='table-row'>
			<div className='table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm'>
				{props.exercise.username}
			</div>
			<div className='table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm'>
				{props.exercise.description}
			</div>
			<div className='table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm'>
				{props.exercise.reps}
			</div>
			<div className='table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm'>
				{props.exercise.sets}
			</div>
			<div className='table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm'>
				{props.exercise.date.substring(0, 8)}
			</div>
			<div className='table-cell bg-gray-200 text-gray-700 px-4 py-2 text-sm'>
				<Link
					onClick={() => handleLocalStorage(props.exercise)}
					to={`/exercise/${props.exercise.id}`}
				>
					edit
				</Link>{' '}
				|{' '}
				<button
					onClick={() => {
						deleteExercise({ variables: { id: props.exercise.id } });
					}}
				>
					delete
				</button>
			</div>
		</div>
	);
};

export default Exercise;
