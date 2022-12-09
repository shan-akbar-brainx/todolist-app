import React from 'react';

function logout(){
  localStorage.removeItem("token");
  window.location.reload();
}

export default function Account({token}) {
  return(
    <div>
      <h2>Account</h2>
      <p><b>Name: </b>{token}</p>
      <button onClick={logout}>LogOut</button>
    </div>
  );
}