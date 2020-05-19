import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';

// Components
import Layout from './components/Layout/Layout';
import Home from './views/Home/Home';
import ExerciseList from './components/Exercise/ExerciseList';
import EditExercise from './components/Exercise/EditExercise';
import CreateExercise from './components/Exercise/CreateExercise';
import Signup from './views/Signup/Signup';
import Login from './views/Login/Login';

function App() {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/signup' component={Signup} />
			<Route path='/login' component={Login} />
			<Layout>
				<ProtectedRoute exact path='/exercise/:id' component={EditExercise} />
				<ProtectedRoute
					exact
					path='/exercises/create'
					component={CreateExercise}
				/>
				<ProtectedRoute path='/exercises' component={ExerciseList} />
			</Layout>
		</Switch>
	);
}

export default App;
