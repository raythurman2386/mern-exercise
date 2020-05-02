import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_USERS, ADD_EXERCISE, GET_EXERCISES } from '../../queries';
import { useInput } from '../../hooks/useInput';

// TODO:CREATE EXERCISE COMPONENT
// HOOK COMPONENT UP TO CLIENT
// TROUBLESHOOT BACKEND ERROR WITH ID CREATION

const CreateExercise = props => {
	const [username, handleUsername] = useInput();
	const [description, handleDescription] = useInput();
	const [reps, handleReps] = useInput();
	const [sets, handleSets] = useInput();
	const [date, handleDate] = useInput();
	const { loading, error, data } = useQuery(GET_USERS);
	const [addExercise] = useMutation(ADD_EXERCISE, {
		update(cache, { data: { username, description, reps, sets, date } }) {
			const { exercises } = cache.readQuery({ query: GET_EXERCISES });
			cache.writeQuery({
				query: GET_EXERCISES,
				data: {
					exercises: exercises.concat({
						username,
						description,
						reps,
						sets,
						date,
					}),
				},
			});
		},
	});

	if (loading) {
		return <h3>Loading . . .</h3>;
	}

	if (error) {
		console.log(error);
		return <h3>Something has went wrong</h3>;
	}

	const handleSubmit = async e => {
		e.preventDefault();

		addExercise({
			variables: {
				username,
				description,
				reps: parseInt(reps),
				sets: parseInt(sets),
				date,
			},
		})
			.then(res => {
				props.history.push('/exercises');
			})
			.catch(err => alert(err.message));
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
						onChange={e => handleDescription(e.target.value)}
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
						onChange={e => handleReps(e.target.value)}
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
						onChange={e => handleSets(e.target.value)}
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
						onChange={e => handleDate(e.target.value)}
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
							onChange={e => handleUsername(e.target.value)}
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
						Add Exercise
					</button>
				</div>
			</div>
		</form>
	);
};

export default CreateExercise;
