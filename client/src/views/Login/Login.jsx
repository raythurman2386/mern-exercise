import React from 'react';

const Login = () => {
	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='email' placeholder='Email' />
			<input type='password' placeholder='Password' />
			<button type='submit'>Login</button>
		</form>
	);
};

export default Login;
