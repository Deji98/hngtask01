import React, {useState} from 'react'
import {Link} from "react-router-dom"

function Loginform({Login, error}) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
  return (
    <div>   
    <h2>Login</h2>
    {(error !== "") ? (<div>{error}</div>) : ""}
    <form className='log-form' onSubmit={submitHandler}> 

    <div className='fname'> <label htmlFor='first name'>First Name</label><br />
  <input type='text' name='text' placeholder='First Name' className='input' required onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
  </div>

  <div className='email'> <label htmlFor='email'>Email Address</label><br />
  <input type='email' name='email' placeholder='Email Address' className='input' required onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
  </div>

  <div className='password'> <label htmlFor='password'>Password</label><br />
  <input type='password' name='password' placeholder='******' className='input' required onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
  </div>

  <div>
    <button className='btn' typeof='submit'>Login</button>
  </div>
  <div className='check'>
  <input type="checkbox" id='trust' name='device'  required/>
  <label htmlFor='checkbox'>Trust this Device</label>
  </div>
  <div className='need'>
 <p>Need an account?</p>
 <Link to="/register">Sign Up</Link>
  </div>
</form>
</div>
  )
}

export default Loginform