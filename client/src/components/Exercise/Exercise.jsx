import React from 'react';
import { Link } from 'react-router-dom';

const Exercise = props => {
	return (
		<tr>
			<td>{props.exercise.username}</td>
			<td>{props.exercise.description}</td>
			<td>{props.exercise.reps}</td>
			<td>{props.exercise.sets}</td>
			<td>{props.exercise.date.substring(0, 10)}</td>
			<td>
				<Link to={`/exercise/${props.exercise.id}`}>edit</Link> |{' '}
				<button
					onClick={() => {
						props.deleteExercise(props.exercise.id);
					}}
				>
					delete
				</button>
			</td>
		</tr>
	);
};

export default Exercise;
