import React from 'react';

const Signup = () => {
	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' placeholder='Username' />
			<input type='email' placeholder='Email' />
			<input type='password' placeholder='Password' />
			<button type='submit'>Sign Up</button>
		</form>
	);
};

export default Signup;
