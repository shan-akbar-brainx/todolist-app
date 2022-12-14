import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password
    });
    if(token.status === 'failed'){
      setError(token.message)
    }else if(token.status === 'success'){
      setToken(token);
    }
  }

  return(
    <div className="login-wrapper">
      <h1>To Do List Application</h1>
      <h2>Please Log In</h2>
      <form onSubmit={handleSubmit} >
        <label>
          <p>Email:</p>
          <input type="email" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password:</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <p className='error-message'>{ error }</p>
        <div className='login-submit'>
          <button type="submit">Sign in</button>
        </div>
      </form>
      <div className='signup-link'>
        <a href="/signup">New User? Sign Up</a>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}