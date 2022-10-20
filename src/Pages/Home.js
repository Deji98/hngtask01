import React from 'react'
import {FaLink} from "react-icons/fa"
import '../Styles/Home.css'
import {Link} from 'react-router-dom'
import {MdModelTraining} from "react-icons/md"
import free01 from '../Images/free01.jpeg'
import {BsFillJournalBookmarkFill} from "react-icons/bs"
import hfree02 from "../Images/hfree02.png"
import {MdOutlineWork} from "react-icons/md"
import free03 from "../Images/free03.jpeg"


function Home() {
  return (
    <div>
      <div className='heading'>
        <h1>Zuri.<FaLink />, where you find links to everything to 
         get you started and improve your tech journey</h1>
      </div>
      <div className='h-text'>
        <p>You don't have to waste time on different platform <br /> before you find solutions, we have put together 
        <br /> all you need to start and/or improve your tech journey here</p>
      </div>
      <div className='start'>
        <Link style={{textDecoration:"none", backgroundColor:"aqua", color:"darkblue", padding:"25px", paddingTop:"15px", paddingBottom:"15px", paddingLeft:"35px", paddingRight:"35px", borderRadius:"10px"}} to={'Login'}>GET STARTED</Link>
      </div>
      <div className='body'>
<div className='expect'>
  <h2>WHAT TO EXPECT:</h2>
</div>
<div className='expt-01'>
<div> <h3> <MdModelTraining size="30px" color='red' /> Access to free Trainings</h3>
<p>Gain knowledge to help you scale through the tech industry for free.</p>

</div>
 <div className='imgdiv'> <img style={{borderRadius:"15px"}} src={free01} alt="training" /></div>
 
</div>
<div className='expt-02'>
<div><h3> <BsFillJournalBookmarkFill size="30px" color='red' /> Access to free Books</h3>
<p>Books and  writing to help make your learning smooth</p>
</div>
<div className='imgdiv2'><img style={{borderRadius:"15px"}} src={hfree02} alt="books" /></div>
</div>

<div className='expt-03'>
<div><h3> <MdOutlineWork size="30px" color='red' /> Job Opportunities</h3>
<p>Open to opportunities to learn and earn like never before</p>
</div>
<div className='imgdiv3'> <img style={{borderRadius:"15px"}} src={free03} alt="training" /></div>
</div>
      </div>
      <div className='body2'>
      <div className='now'>
        <Link style={{textDecoration:"none", backgroundColor:"red", color:"white", padding:"25px", paddingTop:"15px", paddingBottom:"15px", paddingLeft:"100px", paddingRight:"100px", borderRadius:"10px"}} to={'Login'}>GET STARTED</Link>
      </div>
      </div>
    </div>
  )
}

export default Home