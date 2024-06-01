import React from 'react'
// import Outlet from "react-router-dom"
import { NavLink } from 'react-router-dom'

function Blog() {

// function handleClick(){
//   window.location.href = "/myprofile"
// }



  return (
    <div className="blog">
      <h1>hello</h1>
     <h2><NavLink to="/myprofile">next</NavLink></h2>
     {/* <button onClick={handleClick} >next</button> */}
     {/* <Outlet/> */}
    </div>
  )
}

export default Blog
