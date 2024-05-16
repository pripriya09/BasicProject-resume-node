import React, { useState } from 'react';
import axios from 'axios';

function Registerpage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [isUpdateRegister, setIsUpdateRegister] = useState(null);

  function handleSubmit() {

    axios.post("http://localhost:8080/register", {
      name: name,
      username: username,
      email: email,
      password: password,
    })
    .then((res) => {
      if (res.status === 200 && res.data === true) {
        setIsUpdateRegister("Registration successful. Now open the login page.");
      }
    })
    .catch((err) => {
      console.error( err);
    });
  }
  function noMatch(){
    setPasswordError(false)
  }
  function Match(){
    setPasswordError(true)
  }

  return (
    <>
      
      <div id='wrapper'>
      {isUpdateRegister ? <p className='alter'>{isUpdateRegister}</p> : null}
        <h2>Form Registration</h2>
        <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}>
          <div className='formregister'>
            <label htmlFor="">Name</label>
            <input type="text" name="name" placeholder='enter your name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='formregister'>
            <label htmlFor="">Username</label>
            <input type="text" name="username" placeholder='enter your name' value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className='formregister'>
            <label htmlFor="">Email</label>
            <input type="text" name="email" placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='formregister'>
            <label htmlFor="">Password</label>
            <input type="text" name="password" placeholder='enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='formregister'>
            <label htmlFor="">Confirm Password</label>
            <input type="text" name="confirm password" placeholder='enter confirm password' value={cpassword} onChange={(e) => { setCPassword(e.target.value); e.target.value !== password ? noMatch(false) : Match(true); }} />
            {passwordError === null || passwordError === true ? "" : <p>PASSWORD DO NOT MATCH</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Registerpage;
