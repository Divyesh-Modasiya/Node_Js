import React from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'


function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>

          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/about" element={<About />}>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
