import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import User from '../User/User';
import Preferences from '../Preferences/Preferences';
import useToken from './useToken';



function App() {
  const { token, setToken } = useToken();
  if(window.location.pathname == "/signup" && !token){
    return <SignUp setToken={setToken}  />
  }else if(window.location.pathname == "/signup" && token){
    window.location.pathname = '';
  }

  if(!token){
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>To Do List</h1>
      <nav>
        <a href="/">Home</a><br></br>
        <a href="/dashboard">Dashboard</a><br></br>
        <a href="/preferences">Preferences</a>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route exact path='/dashboard' element={<Dashboard/>}/>
          <Route exact path='/preferences' element={<Preferences/>}/>
          <Route exact path='/user' element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;