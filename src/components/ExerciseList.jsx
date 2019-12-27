import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.reps}</td>
    <td>{props.exercise.sets}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.exercise._id}>edit</Link> | <button onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</button>
    </td>
  </tr>
)

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/exercises/')
      .then(res => {
        setExercises(res.data)
      })
      .catch((err) => {
        console.log(err.response);
      });
    return () => { return }
  }, [])

  const deleteExercise = (id) => {
    axios.delete('http://localhost:4000/exercises/' + id)
      .then(response => { console.log(response.data) });

    setExercises(exercises.filter(el => el._id !== id))
  }

  const exerciseList = () => {
    return exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={deleteExercise} key={currentexercise._id} />;
    })
  }


  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Reps</th>
            <th>Sets</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exerciseList()}
        </tbody>
      </table>
    </div>
  )
}


export default ExerciseList