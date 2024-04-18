import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nosotros from './pages/nosotros/Nosotros';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Nosotros' element={<Nosotros />} />
          <Route path='/details1' element={<Home />} />
          <Route path='/details2' element={<Home />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
