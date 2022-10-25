import axios from 'axios';
import React, { Component } from 'react'
import "../App.css"

export default class  Register extends Component{

  handleSubmit = e =>{
e.preventDefault(); 
const data ={
  first_name: this.firstName,
  last_name: this.lastName,
  email: this.email,
  password: this.password,
  password_confirm: this.confirmPassword
};
axios.post("http://localhost:8000/register", data).then(
  res =>{
    console.log(res)
  }
).catch(
  err => {
    console.log(err)
  }
)
  };



  render() {
    return(
      <form onSubmit={this.handleSubmit}>
       <div className='fname'> <label htmlFor='first name'>First Name</label><br />
        <input typeof='text' name='text' placeholder='First Name' className='input'
        onChange={e => this.firstName = e.target.value} />
        </div>

        <div className='lname'> <label htmlFor='last name'>Last Name</label><br />
        <input typeof='text' name='text' placeholder='last Name' className='input'
          onChange={e => this.lastName = e.target.value}
        />
        </div>

        <div className='email'> <label htmlFor='email'>Email Address</label><br />
        <input typeof='email' name='email' placeholder='Email Address' className='input'
        onChange={e => this.email = e.target.value} />
        </div>

        <div className='password'> <label htmlFor='password'>Password</label><br />
        <input typeof='password' name='password' placeholder='******' className='input'
        onChange={e => this.password = e.target.value} />
        </div>

        <div className='c-password'> <label htmlFor='confirm password'>Confirm Password</label><br />
        <input typeof='password' name='cpassword' placeholder='******' className='input'
          onChange={e => this.confirmPassword = e.target.value}
        />
        </div>

        <div>
          <button className='btn' typeof='submit'>Submit</button>
        </div>
      </form>
    )
  }
}
