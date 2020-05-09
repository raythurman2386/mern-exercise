import React from 'react';

function Copyright() {
	return (
		<div className='py-6 bg-gray-800 text-white flex justify-center text-center'>
			{'Copyright © '}
			<a
				color='inherit'
				href='https://raythurman.com'
				target='__blank'
				rel='nofollow noopener noreferrer'
			>
				Ray Thurman
			</a>{' '}
			{new Date().getFullYear()}
			{'.'}
		</div>
	);
}

export default Copyright;
