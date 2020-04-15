import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children }) => {
	return (
		<div className='flex-col'>
			<Navbar />
			<div className='flex w-full mt-12'>
				<Sidebar />
				<div className='m-6 w-full bg-gray-900 flex-1'>{children}</div>
			</div>
		</div>
	);
};

export default Layout;
