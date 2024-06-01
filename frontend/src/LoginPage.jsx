import axios from 'axios';
import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUpdateRegister, setIsUpdateRegister] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:8080/login", {
      username,
      password
    })
    .then((res) => {
      if (res.data) {
        window.location.href = "/home";
      } else {
        setIsUpdateRegister("Invalid username/password");
      }
    })
    .catch((error) => {
      console.error("Error during login:", error);
      setIsUpdateRegister("Internal Server Error");
    });
  }

  return (
    <div id='wrapper'>
      <h2>Login</h2>
      <form method='post' onSubmit={handleSubmit}>
        <div className='formregister'>
          <label htmlFor='username'>UserName</label>
          <input type='text' id='username' placeholder='Enter username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='formregister'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' placeholder='Enter password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type='submit'>Submit</button>
      </form>
      {isUpdateRegister && <p>{isUpdateRegister}</p>}
    </div>
  );
}

export default LoginPage;
