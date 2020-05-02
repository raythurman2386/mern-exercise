import { useState } from 'react';

export const useLocalStorage = itemName => {
	const [exercise, setExercise] = useState(() => {
		const item = window.localStorage.getItem(itemName);
		return item ? JSON.parse(item) : null;
	});

	const handleLocalStorage = updatedValue => {
		setExercise(updatedValue);

		window.localStorage.setItem(itemName, JSON.stringify(updatedValue));
	};

	return { exercise, handleLocalStorage };
};
