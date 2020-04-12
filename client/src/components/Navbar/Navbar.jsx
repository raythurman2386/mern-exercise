import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const loggedIn = localStorage.getItem('token');

	return (
		<nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
			<Link to='/' className='navbar-brand'>
				Lift Tracker
			</Link>
			<div className='collpase navbar-collapse'>
				<ul className='navbar-nav ml-auto'>
					<li className='navbar-item'>
						<Link to='/exercises' className='nav-link'>
							Exercises
						</Link>
					</li>
					{!loggedIn && (
						<li className='navbar-item'>
							<Link to='/signup' className='nav-link'>
								Sign Up
							</Link>
						</li>
					)}
					{!loggedIn && (
						<li className='navbar-item'>
							<Link to='/login' className='nav-link'>
								Login
							</Link>
						</li>
					)}
					{loggedIn && (
						<li className='navbar-item'>
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
