import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = (props) => {
  const [username, setUsername] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:4000/users/add', { username })
      .then(res => console.log(res.data));

    setUsername('');
    props.history.push('/');
  }


  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input type="text"
            required
            className="form-control"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Create User" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default CreateUser;