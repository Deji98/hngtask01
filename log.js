import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate('/schedule');
  };
  return (
    <div className='login1'>
  <section className='section'>
      <form className='form' onSubmit={handleSubmit}>
        
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
    </div>
  
  );
};
export default Login;


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Testimonial from './Pages/Testimonial';
import Pricing from './Pages/Pricing';
import Login from './Pages/Login';
import Schedule from './Pages/Schedule';
import Sharedlayout from './Pages/Sharedlayout';
import Error from './Pages/Error';
import './App.css';
import { useState } from 'react';
import ProtectedRoute from './Pages/ProtectedRoute';
import Directed from './Pages/Directed';


function App() {
  const [user, setUser] = useState(null);
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Sharedlayout />}>
        <Route index element={<Home />} />
        <Route path='Testimonial' element={<Testimonial />} />
        <Route path='Pricing' element={<Pricing />} />
        <Route path='Login' element={<Login setUser={setUser}></Login>} />
        <Route path='Schedule' element={ 
        <ProtectedRoute user={user}>
          <Schedule user={user} />
        </ProtectedRoute>
        } />
        <Route path='Directed' element={<Directed />} />
      </Route>
      <Route path='*' element={<Error />} />
    </Routes>
  </BrowserRouter>


        import React from 'react'
import {Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, user}) => {
    if (!user){
        return <Navigate to="/Directed" />;
    }
    return children;
}

export default ProtectedRoute

import React from 'react'
import { Link } from 'react-router-dom'

function Directed() {
  return (
    <div className='direct'><h2>You have to login first</h2>
    <Link className='btn' to="/Login">Login</Link>
    </div>
  )
}

export default Directed;


import React from 'react'
import { Link } from 'react-router-dom'

function Schedule({user}) {
  return (
    <div className='scheduled'>
        <h2>Hello, {user.name}</h2>
      <h4>Follow these steps to schedule a demo</h4>
      <h3>Or</h3>
      <Link to="/" className="btn">Log out</Link>
    </div>
  )
}

export default Schedule