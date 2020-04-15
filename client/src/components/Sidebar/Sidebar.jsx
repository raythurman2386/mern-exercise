import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className='w-64 h-screen bg-gray-900 overflow-hidden'>
			{localStorage.getItem('token') ? (
				<>
					<h1 className='mt-6 pb-2 text-center text-gray-200 '>
						Welcome Back User
					</h1>

					<ul className='text-center text-gray-400'>
						<li>
							<Link to='/exercise/create'>Add Exercise</Link>
						</li>
						<li>View Profile</li>
					</ul>
				</>
			) : null}

			<br />
			<ul className='text-center text-gray-400'>
				<li>Workouts</li>
				<li>Programs</li>
				<li>Supplements</li>
				<li>Gym Wear</li>
			</ul>
		</div>
	);
};

export default Sidebar;
