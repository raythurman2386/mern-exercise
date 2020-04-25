import React from 'react';
import { Link } from 'react-router-dom';

const Exercise = props => {
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
				<Link to={`/exercise/${props.exercise.id}`}>edit</Link> |{' '}
				<button
					onClick={() => {
						props.deleteExercise(props.exercise.id);
					}}
				>
					delete
				</button>
			</div>
		</div>
	);
};

export default Exercise;
