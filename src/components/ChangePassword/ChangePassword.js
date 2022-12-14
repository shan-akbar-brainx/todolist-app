import React, { useState } from 'react';
import './ChangePassword.css';

async function changePass(credentials, token) {
    console.log(token);
  return fetch('http://localhost:8080/api/user/changepassword', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function ChangePassword({user}) {
  const [password, setPassword] = useState();
  const [password_confirmation, setConfirmPassword] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await changePass({
      password,
      password_confirmation
    }, user.token);
      setError('');
      setSuccess('');
    if(token.status === "failed"){
      setError(token.message);
    }else if(token.status === "success"){
      setSuccess(token.message);
    }
  }

  return(
    <div className="changepass-wrapper">
      <h1>To Do List Application</h1>
      <h2>Change Your Password</h2>
      <form onSubmit={handleSubmit} >
        <label>
          <p>Password:</p>
        </label>
        <input type="password" onChange={e => setPassword(e.target.value)} />
        <label>
          <p>Confirm Password:</p>
        </label>
        <input type="password" onChange={e => setConfirmPassword(e.target.value)} />
        <p className='error-message'>{ error }</p>
        <p className='success-message'>{ success }</p>
        <div className='changepass-submit'>
          <button type="submit">Change Password</button>
        </div>
      </form>
      <div className='dashboard-link'>
        <a href="/dashboard">Dashboard</a>
      </div>
    </div>
  )
}