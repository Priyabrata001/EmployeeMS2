import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import axios from 'axios'
import { useState } from 'react'
function Login() {

const [values,setValues]=useState({
    email:'',
    password:''
})
const handleSubmit=(event)=>
{
    event.preventDefault()
    axios.post(`https://localhost:7036/api/Admin/login/${email}/${password}`,{email,password}).then((response)=>{
        if(response.status==200)
        {
            sessionStorage["token"] = response.data;
        }
    })
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
}


  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='p-3 rounded w-25 border loginForm'  >
        <h2>Login Page</h2>
         <form onSubmit={handleSubmit}>
           <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" name='email'  onChange={(e)=>setValues({...values,email:e.target.value})}
            autoComplete='off' placeholder='Enter Email' className='from-control rounded-0'/>
           </div>
           <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" name='password' onChange={(e)=>setValues({...values,password:e.target.value})}
             placeholder='Enter Password' className='from-control rounded-0'/>
           </div>
           <button className='btn btn-success w-80 rounded-0 mb-2'>Log in</button>
           <div className='mb-1'>
            <input type="checkbox" name="tick" id="tick" className='me-2'/>
            <label htmlFor='password'><strong>You are Agree with terms & conditions </strong></label>
           </div>
          </form> 

        </div>  

    </div>
  )
}

export default Login