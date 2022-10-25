import React, {useState} from 'react'
import "../Pages/Loginform"
import "../App.css"
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

// function Login() {
// const adminUser ={
//   email: "admin@admin.com",
//   password: "admin123"
// }


// const [user, setUser] = useState({name:"", email:""});
// const [error, setError] = useState("");

// const Login = details =>{
//   console.log(details);

//   if (details.email ==adminUser.email && details.password == adminUser.password){
//     console.log("logged in");
//     setUser({
//       name: details.name,
//       email: details.email
//     });
//   }else {
//     console.log("details do not match!");
//     setError("details do not match!");
  

// } 
// }

// const Logout = () =>{
//   setUser({name:"", email:""});
// }

const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email, password: password });
    navigate('/Dashboard');
  };

  return (
    <div>
       
       <div>   
    
    <form className='log-form' onSubmit={handleSubmit}> 
    <h2>Login</h2>
    <div className='fname'> <label htmlFor='first name'>First Name</label><br />
  <input type='text' name='text' placeholder='First Name' className='input' required onChange={(e) => setName(e.target.value)} />
  </div>

  <div className='email'> <label htmlFor='email'>Email Address</label><br />
  <input type='email' name='email' placeholder='Email Address' className='input' required onChange={(e) => setEmail(e.target.value)}/>
  </div>

  <div className='password'> <label htmlFor='password'>Password</label><br />
  <input type='password' name='password' placeholder='******' className='input' required onChange={(e) => setPassword(e.target.value)}/>
  </div>

  <div>
    <button className='btn' onSubmit={'Dashboard'} typeof='submit'>Login</button>
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
    </div>
  )
}

export default Login