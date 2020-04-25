import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Copyright from '../Copyright/Copyright';

const Layout = ({ children }) => {
	return (
		<div className='flex-col'>
			<Navbar />
			<div className='flex w-full'>
				<Sidebar />
				<div className='m-6 w-full bg-white-100 flex flex-1 justify-center'>
					{children}
				</div>
			</div>
			<Copyright />
		</div>
	);
};

export default Layout;
