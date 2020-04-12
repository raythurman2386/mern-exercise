import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Layout from './components/Layout/Layout';
import ExerciseList from './components/Exercise/ExerciseList';
import EditExercise from './components/Exercise/EditExercise';
import CreateExercise from './components/Exercise/CreateExercise';

function App() {
	return (
		<Layout>
			<Route exact path='/' component={ExerciseList} />
			<Route path='/edit/:id' component={EditExercise} />
			<Route path='/create' component={CreateExercise} />
		</Layout>
	);
}

export default App;
