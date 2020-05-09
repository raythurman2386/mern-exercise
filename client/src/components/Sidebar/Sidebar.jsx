import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	const username = localStorage.getItem('username');

	return (
		<div className='pt-6 w-64 bg-gray-900 overflow-hidden hidden transition ease-in duration-700 md:flex md:flex-col flex-shrink-0'>
			{localStorage.getItem('token') ? (
				<>
					<h1 className='pb-2 text-center text-gray-200 text-xl'>
						Welcome Back{' '}
						<span className='capitalize font-semibold'>
							{username ? `${username}!` : 'User!'}
						</span>
					</h1>

					<ul className='w-full text-center text-gray-400 justify-center'>
						<li className='mb-2 py-2 w-full hover:bg-gray-800 transition ease-in duration-300 cursor-pointer'>
							<Link to='/exercises/create'>Add Exercise</Link>
						</li>
						<li className='mb-2 py-2 w-full hover:bg-gray-800 transition ease-in duration-300 cursor-pointer'>
							View Profile
						</li>
					</ul>
				</>
			) : null}

			<br />
			<>
				<h3 className='mb-2 py-2 text-center text-gray-200 font-semibold text-lg'>
					Find a Workout
				</h3>
				<ul className='w-full text-center text-gray-400'>
					<li className='mb-2 py-2 w-full hover:bg-gray-800 transition ease-in duration-300 cursor-pointer'>
						Programs
					</li>
					<li className='mb-2 py-2 w-full hover:bg-gray-800 transition ease-in duration-300 cursor-pointer'>
						Workouts
					</li>
				</ul>
				<h3 className='mb-2 py-2 text-center text-gray-200 font-semibold text-lg'>
					Check out our affiliate links
				</h3>
				<ul className='w-full text-center text-gray-400'>
					<li className='mb-2 py-2 w-full hover:bg-gray-800 transition ease-in duration-300 cursor-pointer'>
						Bucked Up Supps
					</li>
					<li className='mb-2 py-2 w-full hover:bg-gray-800 transition ease-in duration-300 cursor-pointer'>
						Krusaders Gym Wear
					</li>
				</ul>
			</>
		</div>
	);
};

export default Sidebar;
