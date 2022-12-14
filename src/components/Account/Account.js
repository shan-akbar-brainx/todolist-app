import React from 'react';

function logout(){
  localStorage.removeItem("token");
  window.location.reload();
}

export default function Account({token}) {
  return(
    <div>
      <h2>Account</h2>
      <p><b>Name: </b>{token.name}</p>
      <p><b>Email: </b>{token.email}</p>
      <p><a href="/changePass">change password</a></p>
      <button onClick={logout}>LogOut</button>
    </div>
  );
}