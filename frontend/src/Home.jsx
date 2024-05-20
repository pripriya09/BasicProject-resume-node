import React from 'react';
import { NavLink } from 'react-router-dom';


function Home() {
  return (<>
  <div>
    <h2>BasicProject</h2>
  </div>

  <div>
  <ul>
    <li><NavLink to="/myprofile">My Profile</NavLink></li>
    <button>Log Out</button>
  </ul>
  </div>

   
    </> )
}

export default Home
