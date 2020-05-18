import React, { useEffect } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const useQuery = () => {
		return new URLSearchParams(useLocation().search);
	};

	let queries = useQuery();

	useEffect(() => {
		const token = queries.get('query');
		const user = queries.get('user');

		if (token != null) {
			console.log('here');
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
			render={props =>
				localStorage.getItem('token') ? (
					<Component {...props} />
				) : (
					<Redirect to='/' />
				)
			}
		/>
	);
};

export default ProtectedRoute;
