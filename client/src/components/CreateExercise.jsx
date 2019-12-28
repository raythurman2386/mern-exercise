// @ts-nocheck
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CreateExercise = (props) => {
  const [username, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [reps, setReps] = useState(0)
  const [sets, setSets] = useState(0)
  const [date, setDate] = useState(new Date())
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://lift-track-mern.herokuapp.com/users/')
      .then(response => {
        if (response.data.length > 0) {
          setUsers(response.data.map(user => user.username))
          setUsername(response.data[0].username)
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username,
      description,
      reps,
      sets,
      date
    }

    axios.post('https://lift-track-mern.herokuapp.com/exercises/add', exercise)
      .then(res => props.history.push('/'));
  }

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            value={username}
            onChange={e => setUsername(e.target.value)}>
            {
              users.map((user) => {
                return <option
                  key={user}
                  value={user}>{user}
                </option>;
              })
            }
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input type="text"
            required
            className="form-control"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Reps: </label>
          <input
            type="text"
            className="form-control"
            value={reps}
            onChange={e => setReps(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Sets: </label>
          <input
            type="text"
            className="form-control"
            value={sets}
            onChange={e => setSets(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={date}
              onChange={date => setDate(date)}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default CreateExercise;