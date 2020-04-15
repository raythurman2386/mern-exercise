import React from 'react';

function Copyright() {
	return (
		<div>
			{'Copyright © '}
			<a
				color='inherit'
				href='https://raythurman.com'
				target='__blank'
				rel='noreferrer'
			>
				Ray Thurman
			</a>{' '}
			{new Date().getFullYear()}
			{'.'}
		</div>
	);
}

export default Copyright;
