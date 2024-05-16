import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Page from "page"
import Home from './Home';
import Frontpage from './Frontpage';

function Mainn() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Frontpage />}></Route>
        <Route path='/home' element={<Home />}></Route>

      </Routes>

    </BrowserRouter>
  )
}

export default Mainn
