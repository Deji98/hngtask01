import React from 'react'
import {Link} from "react-router-dom"

function Dashboard({user}) {
  return (
    <div style={{lineHeight:"50px", textAlign:"center"}}>
    <h2>Hello, {user.name}</h2>
  <h4>Welcome to your Dashboard</h4>
  <h3>Or</h3>
  <Link style={{textDecoration:"none"}} to="/" className="btn">Log out</Link>
</div>
  )
}

export default Dashboard