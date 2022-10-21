import React from 'react'
import NavLinks from './NavLinks'
import MobileLinks from './MobileLinks'
import { Link } from 'react-router-dom'
import {FaLink} from 'react-icons/fa'
import '../Styles/Navbar.css'







function Navbar() {
  return (
    <div className='zurinav'>
        <div className='zurilink'>
    <Link style={{textDecoration:"none", color:"red"}} to={'/'}>ZURI.<FaLink/> </Link>
    
    </div>
    <div className="navt">
    <NavLinks />
    </div>
    <div className="navm">
    <MobileLinks />
    </div>
   
    
    {/* <div className='zurinav'>
    <div className='zurilink'>
    <Link style={{textDecoration:"none", color:"red"}} to={'/'}>ZURI.<FaLink/> </Link>
    
    </div>
    <div className='faq'>
    <Link style={{textDecoration:"none"}} to={'Question'}>FAQ</Link>
    </div>
    <div>
    <Link style={{textDecoration:"none"}} to={'About'}>About Us</Link>
    </div>
   <div>
   <Link style={{textDecoration:"none"}} to={'Register'}>Register</Link>
   </div>
<div>
<Link style={{textDecoration:"none"}} to={'Login'}>Login</Link>
</div>



    </div> */}


    </div>
  )
}

export default Navbar