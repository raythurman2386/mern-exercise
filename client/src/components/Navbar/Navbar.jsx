import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const loggedIn = localStorage.getItem('token');

	return (
		<nav className='bg-gray-800 text-gray-300 flex py-4 px-2 justify-between'>
			<Link to='/' className='cursor-pointer'>
				Lift Tracker
			</Link>
			<div className='invisible md:visible'>
				<ul className='flex'>
					<li className='cursor-pointer'>
						<Link to='/exercises' className='nav-link'>
							Exercises
						</Link>
					</li>
					{!loggedIn && (
						<li className='ml-2 cursor-pointer'>
							<Link to='/signup' className='nav-link'>
								Sign Up
							</Link>
						</li>
					)}
					{!loggedIn && (
						<li className='ml-2 cursor-pointer'>
							<Link to='/login' className='nav-link'>
								Login
							</Link>
						</li>
					)}
					{loggedIn && (
						<li className='ml-2 cursor-pointer'>
							<Link to='/' className='nav-link'>
								Logout
							</Link>
						</li>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
