import React from 'react'
import './modal.css'
import Home from '../Pages/Home'
import { Link } from 'react-router-dom'
import About from '../Pages/About'
function Modal({showModal,setShowModal}) {
  return (
      <>
      <div className='menu'>
    
      </div>
      <div className='modal-container'>
          <Link to="/" element={Home} onClick={()=>setShowModal(false)}>HOME</Link>
          <Link to="/about" element={About} onClick={()=>setShowModal(false)}>ABOUT</Link>
      
      </div>
      </>
    
  )
}

export default Modal