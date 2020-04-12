import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<br />
			{children}
		</>
	);
};

export default Layout;
