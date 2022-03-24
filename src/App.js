import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Error from './Pages/Error'
import Navbar from './components/Navbar'
import Modal from './components/Modal'

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='/about' element={<About />} />
        <Route path= "*" element={<Home />} />
      </Routes>
    </Router>
  
    
    
  )
}

export default App
