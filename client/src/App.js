import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Layout from './components/Layout/Layout';
import Home from './views/Home/Home';
import ExerciseList from './components/Exercise/ExerciseList';
import EditExercise from './components/Exercise/EditExercise';
import CreateExercise from './components/Exercise/CreateExercise';

function App() {
	return (
		<Layout>
			<Route exact path='/' component={Home} />
			{/* <Route path='/signup' component={SignUp} />
			<Route path='/login' component={Login} /> */}
			<Route path='/exercises' component={ExerciseList} />
			<Route path='/exercise/:id' component={EditExercise} />
			<Route path='/exercise/create' component={CreateExercise} />
		</Layout>
	);
}

export default App;
