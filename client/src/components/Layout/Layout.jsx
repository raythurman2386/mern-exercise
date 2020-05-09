import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Copyright from '../Copyright/Copyright';

const Layout = ({ children }) => {
	return (
		<div className='flex-col'>
			<Navbar />
			<div className='flex w-full' style={{ minHeight: '100vh' }}>
				<Sidebar />
				<div className='p-6 w-full bg-black text-gray-100 flex flex-1 justify-center'>
					{children}
				</div>
			</div>
			<Copyright />
		</div>
	);
};

export default Layout;
