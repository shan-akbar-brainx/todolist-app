import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SignUp.css';

async function signupUser(credentials) {
  return fetch('http://localhost:8080/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function SignUp({ setToken }) {
  const [name, setName] = useState();  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password_confirmation, setConfirmPassword] = useState();
  const [error, setError] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await signupUser({
      name,
      email,
      password,
      password_confirmation,
      tc: true
    });
    if(token.status === "failed"){
      setError(token.message);
    }else if(token.status === "success"){
      setToken(token);
    }
  }

  return(
    <div className="signup-wrapper">
      <h1>To Do List Application</h1>
      <h2>Sign up here</h2>
      <form onSubmit={handleSubmit} >
        <label>
          <p>Name:</p>
        </label>
        <input type="text" onChange={e => setName(e.target.value)} />
        <label>
          <p>Email:</p>
        </label>
        <input type="email" onChange={e => setEmail(e.target.value)} />
        <label>
          <p>Password:</p>
        </label>
        <input type="password" onChange={e => setPassword(e.target.value)} />
        <label>
          <p>Confirm Password:</p>
        </label>
        <input type="password" onChange={e => setConfirmPassword(e.target.value)} />
        <p className='error-message'>{ error }</p>
        <div className='signup-submit'>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <div className='login-link'>
        <a href="/login">Already have account? Sign in</a>
      </div>
    </div>
  )
}

SignUp.propTypes = {
    setToken: PropTypes.func.isRequired
}