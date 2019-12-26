import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import ExerciseList from './components/ExerciseList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <>
      <Navbar />
      <br />
      <Route exact path='/' component={ExerciseList} />
      <Route exact path='/edit/:id' component={EditExercise} />
      <Route exact path='/create' component={CreateExercise} />
      <Route exact path='/user' component={CreateUser} />

    </>
  );
}

export default App;
