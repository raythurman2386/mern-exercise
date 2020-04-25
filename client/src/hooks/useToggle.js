import { useState } from 'react';

export const useToggle = () => {
	const [value, setValue] = useState(false);

	handleChange = () => {
		setValue(!value);
	};

	return [value, handleChange];
};
