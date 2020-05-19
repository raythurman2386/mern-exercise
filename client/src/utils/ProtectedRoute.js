import React, { useEffect } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const useQuery = () => {
		return new URLSearchParams(useLocation().search);
	};

	let token = localStorage.getItem('token');

	let queries = useQuery();

	useEffect(() => {
		// eslint-disable-next-line react-hooks/exhaustive-deps
		token = queries.get('query');
		const user = queries.get('user');

		if (token != null) {
			localStorage.setItem('token', token);
			localStorage.setItem('username', user);
			return;
		}
		return;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Route
			{...rest}
			render={props => (token ? <Component {...props} /> : <Redirect to='/' />)}
		/>
	);
};

export default ProtectedRoute;
