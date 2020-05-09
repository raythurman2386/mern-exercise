import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = props => {
	const loggedIn = localStorage.getItem('token');
	const [navbarOpen, setNavbarOpen] = React.useState(false);

	const handleLogout = e => {
		e.preventDefault();
		localStorage.clear();
		props.history.push('/');
	};

	return (
		<nav
			className={
				(props.transparent
					? 'top-0 absolute z-50 w-full'
					: 'relative shadow-lg bg-gray-900 shadow-lg text-white') +
				' flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg'
			}
		>
			<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
				<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
					<Link to='/'>
						<span
							className={
								'text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase'
							}
						>
							Lift Tracker
						</span>
					</Link>
					<button
						className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
						type='button'
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
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
					</button>
				</div>
				<div
					className={
						'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
						(navbarOpen ? ' block rounded shadow-lg' : ' hidden')
					}
					id='example-navbar-warning'
				>
					<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
						{!loggedIn && (
							<li className='flex items-center'>
								<Link
									className={
										(props.transparent
											? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
											: 'text-gray-800 hover:text-gray-600') +
										' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
									}
									to='/login'
								>
									<span className='inline-block ml-2'>Login</span>
								</Link>
							</li>
						)}
						{!loggedIn && (
							<li className='flex items-center'>
								<Link
									className={
										(props.transparent
											? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
											: 'text-gray-800 hover:text-gray-600') +
										' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
									}
									to='/signup'
								>
									<span className=' inline-block ml-2'>Signup</span>
								</Link>
							</li>
						)}
						{loggedIn && (
							<li className='flex items-center'>
								<Link
									className={
										(props.transparent
											? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
											: 'text-gray-100 hover:text-gray-600') +
										' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
									}
									to='/exercises'
								>
									<span className='inline-block ml-2'>Exercises</span>
								</Link>
							</li>
						)}
						{loggedIn && (
							<li className='flex items-center'>
								<Link
									onClick={e => handleLogout(e)}
									className={
										(props.transparent
											? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
											: 'text-gray-100 hover:text-gray-600') +
										' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
									}
									to='/exercises'
								>
									<span className='inline-block ml-2'>Logout</span>
								</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default withRouter(Navbar);
