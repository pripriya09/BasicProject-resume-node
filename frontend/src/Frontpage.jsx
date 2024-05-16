import React from 'react';
import Registerpage from './Registerpage';
import './resume.css' ;
import LoginPage from './LoginPage';


function Frontpage() {
  return (

    <div className='dividedPage'>
       
      <div className='SignUpPage'>
        <LoginPage />
      </div>
      {/* <h1>Resume Builder </h1> */}
      <div className='Registerpage'>
        <Registerpage />
      </div>
    </div>
  );
}

export default Frontpage;
