import React from 'react'
import '../Styles/Footer.css'
import {FaLink} from "react-icons/fa"
import {Link} from "react-router-dom"
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"

function Footer() {
  return (
    <div>
    <div className='zuri-foot'>
    <div className='foot01'>
    <div className='zuri-lg'>
        <h1>
        <Link style={{textDecoration:"none", color:"red"}} to={'/'}>ZURI.<FaLink/> </Link>
        </h1>
         </div>
         <div className='zuri-text'>
         <p>Empowering the Tech Inducstry and all of humanity</p>
         </div>
        <div className='zuri-icons'>
<BsFacebook size="30px" color='red' />
<AiFillTwitterCircle size="35px" color='red' />
<AiFillInstagram size="35px" color='red' />
<AiFillLinkedin size="35px" color='red' />
        </div>
        </div>
        <div className='foot02'>
<div><h2>Company</h2></div>
<div className='faq'>
    <Link style={{textDecoration:"none", color:"black"}} to={'Question'}>FAQ</Link>
    </div>
    <div>
    <Link style={{textDecoration:"none", color:"black"}} to={'About'}>About Us</Link>
    </div>
</div>
   <div className='foot03'>
<div><h2>Legal</h2></div>
<div className='faq'>
    <Link style={{textDecoration:"none", color:"black"}} to={'Question'}>Privacy</Link>
    </div>
    <div>
    <Link style={{textDecoration:"none", color:"black"}} to={'About'}>Terms and Conditions</Link>
    </div>
   </div>


        </div>
    </div>
       
    
  )
}

export default Footer