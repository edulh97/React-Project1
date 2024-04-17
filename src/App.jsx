import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/home/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/details1' element={<Home />} />
          <Route path='/details2' element={<Home />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
