import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")

    const navigate = useNavigate()

    const submitLogin = (e) =>{
        e.preventDefault()

        axios.post('http://localhost:5000/login',{ email, password }) 
        .then((data)=> {
          console.log(data)
          navigate('/vendor')
        })
        .catch((error)=> console.log(error))
    }

  return (
    <>
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white w-25 p-5 rounded-2'>
            <form onSubmit={submitLogin}>
              <h2>Login</h2>
              <div className='mb-3'>
                <label htmlFor="email">Email</label><br />
                <input type='email' className='form-control rounded-2 w-75 mx-2' onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label htmlFor="password">Password</label><br />
                <input type='password' className='form-control rounded-2 w-75 mx-2' onChange={(e)=>setPassword(e.target.value)} />
              </div>
              <button id='submit' className='btn btn-success mx-2'>Submit</button>
            </form>
        </div>
    </div>

    </>
  )
}

export default LoginForm