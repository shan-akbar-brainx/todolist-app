import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SignUp.css';

async function signupUser(credentials) {
  return fetch('http://localhost:8080/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function SignUp({ setToken }) {
  const [fullname, setFullName] = useState();  
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await signupUser({
      fullname,
      username,
      password
    });
    
    setToken(token);
  }

  return(
    <div className="signup-wrapper">
      <h1>Please Enter Your Details</h1>
      <form onSubmit={handleSubmit} >
        <label>
          <p>Full Name</p>
          <input type="text" onChange={e => setFullName(e.target.value)} />
        </label>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

SignUp.propTypes = {
    setToken: PropTypes.func.isRequired
}