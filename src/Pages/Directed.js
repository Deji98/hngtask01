import React from 'react'
import { Link } from 'react-router-dom'

function Directed() {
  return (
    <div style={{textAlign:"center", lineHeight:"50px"}}><h2>You have to login first</h2>
    {/* <Link style={{}} to="/Login">Login</Link> */}
    <Link style={{textDecoration:"none", backgroundColor:"red", color:"white", padding:"25px", paddingTop:"15px", paddingBottom:"15px", paddingLeft:"100px", paddingRight:"100px", borderRadius:"10px"}} to={'/Login'}>Login here</Link>
    </div>
  )
}

export default Directed;