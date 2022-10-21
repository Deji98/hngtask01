import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

function NavLinks() {
  return (
    <div>
         <div className='n-zurinav'>
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



    </div>
    </div>
  )
}

export default NavLinks