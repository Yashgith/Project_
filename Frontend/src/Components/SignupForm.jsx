import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignupForm() {
    const[name, setName]=useState("")
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
    const[vendor, setVendor]=useState("")
    const[client, setClient]=useState("")

    const navigate = useNavigate()

    const submitRegister = (e) =>{
        e.preventDefault()

        axios.post('http://localhost:5000/register',{name, email, password, vendor, client}) 
        .then((data)=> {
          console.log(data)
          navigate('/login')
        })
        .catch((error)=> console.log(error))
    }

  return (
    <>
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white w-25 p-5 rounded-2'>
            <form onSubmit={submitRegister}>
              <h2>Register</h2>
              <div className='mb-3'>
                <label htmlFor="text">User/Vendor</label><br />
                <input type='text' className='form-control rounded-2 w-75 mx-2' onChange={(e)=>setClient(e.target.value)} />
                <label htmlFor="email">Name</label><br />
                <input type='text' className='form-control rounded-2 w-75 mx-2' onChange={(e)=>setName(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label htmlFor="email">Email</label><br />
                <input type='email' className='form-control rounded-2 w-75 mx-2' onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label htmlFor="password">Password</label><br />
                <input type='password' className='form-control rounded-2 w-75 mx-2' onChange={(e)=>setPassword(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label htmlFor="text">Vendor</label><br />
                <input type='text' className='form-control rounded-2 w-75 mx-2' onChange={(e)=>setVendor(e.target.value)} />
              </div>
              <button id='submit' className='btn btn-success mx-2'>Submit</button>
            </form>
        </div>
    </div>

    </>
  )
}

export default SignupForm