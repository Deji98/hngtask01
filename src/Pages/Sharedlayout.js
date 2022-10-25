import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import "../index.css"



function Sharedlayout() {
  return (
    <div className='layout'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Sharedlayout