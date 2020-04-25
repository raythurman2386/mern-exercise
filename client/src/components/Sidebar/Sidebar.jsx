import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className='pt-4 w-64 h-screen bg-gray-900 overflow-hidden hidden md:flex flex-shrink-0 justify-center'>
			{localStorage.getItem('token') ? (
				<>
					<h1 className='mt-6 pb-2 text-center text-gray-200 '>
						Welcome Back User
					</h1>

					<ul className='text-center text-gray-400 justify-center'>
						<li>
							<Link to='/exercise/create'>Add Exercise</Link>
						</li>
						<li>View Profile</li>
					</ul>
				</>
			) : null}

			<br />
			<ul className='w-full text-center text-gray-400'>
				<li className='mb-2 py-2 w-full hover:bg-gray-800 cursor-pointer'>
					Workouts
				</li>
				<li className='mb-2 py-2 w-full hover:bg-gray-800 cursor-pointer'>
					Programs
				</li>
				<li className='mb-2 py-2 w-full hover:bg-gray-800 cursor-pointer'>
					Supplements
				</li>
				<li className='mb-2 py-2 w-full hover:bg-gray-800 cursor-pointer'>
					Gym Wear
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
