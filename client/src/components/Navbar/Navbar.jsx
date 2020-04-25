import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = props => {
	const loggedIn = localStorage.getItem('token');

	const handleLogout = e => {
		e.preventDefault();
		localStorage.clear();
		props.history.push('/');
	};

	return (
		<nav className='flex items-center justify-between flex-wrap bg-gray-800 p-6 shadow-md'>
			<div className='flex justify-between items-center text-white mr-6'>
				<Link to='/'>
					<span className='font-semibold text-xl uppercase tracking-tight'>
						Lift Tracker
					</span>
				</Link>
			</div>
			<div className='block md:hidden'>
				<button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
					<svg
						className='fill-current h-3 w-3'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<title>Menu</title>
						<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
					</svg>
				</button>
			</div>
			<div className='w-full block md:flex md:items-center md:w-auto'>
				<div className='text-sm md:flex-grow'>
					{loggedIn && (
						<Link
							to='/exercises'
							className='block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4'
						>
							Exercises
						</Link>
					)}
					{!loggedIn && (
						<Link
							to='/login'
							className='block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white mr-4'
						>
							Login
						</Link>
					)}
					{!loggedIn && (
						<Link
							to='/signup'
							className='block mt-4 md:inline-block md:mt-0 text-teal-200 hover:text-white'
						>
							Sign Up
						</Link>
					)}
				</div>
				{loggedIn && (
					<div>
						<Link
							to='/'
							onClick={e => handleLogout(e)}
							className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 md:mt-0'
						>
							Logout
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
};

export default withRouter(Navbar);
