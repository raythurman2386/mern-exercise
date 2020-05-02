import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_UPDATE } from '../../queries';
import { useLocalStorage } from '../../hooks/useLocalStorage';

// TODO:UPDATE EXERCISE COMPONENT
// HOOK COMPONENT UP TO CLIENT
// TROUBLESHOOT BACKEND ERROR WITH ID CREATION

const EditExercise = props => {
	const { exercise } = useLocalStorage('exercise');
	const { loading, error, data } = useQuery(GET_UPDATE, {
		variables: { id: props.match.params.id },
	});

	const [username, setUsername] = useState(
		data ? data.exercise.username : exercise.username
	);
	const [description, setDescription] = useState(
		data ? data.exercise.description : exercise.description
	);
	const [reps, setReps] = useState(data ? data.exercise.reps : exercise.reps);
	const [sets, setSets] = useState(data ? data.exercise.sets : exercise.sets);
	const [date, setDate] = useState(data ? data.exercise.date : exercise.date);

	if (loading) {
		return <h3>Loading . . .</h3>;
	}

	if (error) {
		console.log(error);
		return <h3>Something has went wrong</h3>;
	}

	const handleSubmit = async e => {
		e.preventDefault();

		// updateExercise({
		// 	variables: {
		// 		username,
		// 		description,
		// 		reps: parseInt(reps),
		// 		sets: parseInt(sets),
		// 		date,
		// 	},
		// })
		// 	.then(res => {
		// 		props.history.push('/exercises');
		// 	})
		// 	.catch(err => alert(err.message));
	};

	return (
		<form className='w-full max-w-sm' onSubmit={handleSubmit}>
			<div className='md:flex md:items-center mb-6'>
				<div className='md:w-1/3'>
					<label
						className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
						htmlFor='inline-description'
					>
						Description
					</label>
				</div>
				<div className='md:w-2/3'>
					<input
						className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
						id='inline-description'
						type='text'
						placeholder='Eg: Benchpress'
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
				</div>
			</div>
			<div className='md:flex md:items-center mb-6'>
				<div className='md:w-1/3'>
					<label
						className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
						htmlFor='inline-reps'
					>
						Reps
					</label>
				</div>
				<div className='md:w-2/3'>
					<input
						className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
						id='inline-reps'
						type='number'
						placeholder='Reps'
						value={reps}
						onChange={e => setReps(e.target.value)}
					/>
				</div>
			</div>
			<div className='md:flex md:items-center mb-6'>
				<div className='md:w-1/3'>
					<label
						className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
						htmlFor='inline-sets'
					>
						Sets
					</label>
				</div>
				<div className='md:w-2/3'>
					<input
						className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
						id='inline-sets'
						type='number'
						placeholder='Sets'
						value={sets}
						onChange={e => setSets(e.target.value)}
					/>
				</div>
			</div>
			<div className='md:flex md:items-center mb-6'>
				<div className='md:w-1/3'>
					<label
						className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
						htmlFor='inline-date'
					>
						Date
					</label>
				</div>
				<div className='md:w-2/3'>
					<input
						className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
						id='inline-date'
						type='date'
						value={date}
						onChange={e => setDate(e.target.value)}
					/>
				</div>
			</div>
			<div className='md:flex md:items-center mb-6'>
				<div className='md:w-1/3'>
					<label
						className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
						htmlFor='inline-username'
					>
						Username
					</label>
				</div>
				<div className='md:w-2/3'>
					<div className='relative'>
						<select
							className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
							id='inline-username'
							onChange={e => setUsername(e.target.value)}
							value={username}
						>
							<option value='' defaultValue>
								Pick a User
							</option>
							{data &&
								data.users.map(user => {
									return (
										<option key={user.id} value={user.username}>
											{user.username}
										</option>
									);
								})}
						</select>
						<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
							<svg
								className='fill-current h-4 w-4'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
							>
								<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
							</svg>
						</div>
					</div>
				</div>
			</div>

			<div className='md:flex md:items-center'>
				<div className='md:w-1/3'></div>
				<div className='md:w-2/3'>
					<button
						className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
						type='submit'
					>
						Update Exercise
					</button>
				</div>
			</div>
		</form>
	);
};

export default EditExercise;
