import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { GET_USERS } from '../../queries';

const CreateExercise = props => {
	const [username, setUsername] = useState('');
	const [description, setDescription] = useState('');
	const [reps, setReps] = useState(0);
	const [sets, setSets] = useState(0);
	const [date, setDate] = useState(new Date());
	const { loading, error, data } = useQuery(GET_USERS);

	if (loading) {
		return <h3>Loading . . .</h3>;
	}

	if (error) {
		console.log(error);
		return <h3>Something has went wrong</h3>;
	}

	const onSubmit = e => {
		e.preventDefault();

		const exercise = {
			username,
			description,
			reps,
			sets,
			date,
		};
	};

	return (
		<div>
			<h3>Create New Exercise Log</h3>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label>Username: </label>
					<select
						required
						className='form-control'
						value={username}
						onChange={e => setUsername(e.target.value)}
					>
						{data.users.map(user => {
							return (
								<option key={user.id} value={user.username}>
									{user.username}
								</option>
							);
						})}
					</select>
				</div>
				<div className='form-group'>
					<label>Description: </label>
					<input
						type='text'
						required
						className='form-control'
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
				</div>
				<div className='form-group'>
					<label>Reps: </label>
					<input
						type='text'
						className='form-control'
						value={reps}
						onChange={e => setReps(e.target.value)}
					/>
				</div>
				<div className='form-group'>
					<label>Sets: </label>
					<input
						type='text'
						className='form-control'
						value={sets}
						onChange={e => setSets(e.target.value)}
					/>
				</div>
				<div className='form-group'>
					<label>Date: </label>
					<div>
						<DatePicker selected={date} onChange={date => setDate(date)} />
					</div>
				</div>

				<div className='form-group'>
					<input
						type='submit'
						value='Create Exercise Log'
						className='btn btn-primary'
					/>
				</div>
			</form>
		</div>
	);
};

export default CreateExercise;
