import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function User() {
    const[username, setUserName]=useState("")
    const[product, setProduct]=useState("")
    const[quantity, setQuantity]=useState("")
    const[shipping, setShipping]=useState("")
    const[shippingSchedule, setShippingSchedule]=useState("")
    const[vendor, setVendor]=useState("")

    const navigate = useNavigate()

    const submitForm = (e) =>{
        e.preventDefault()

        axios.post('http://localhost:5000/userData',{ username, product, quantity, shipping, shippingSchedule, vendor }) 
        .then((data)=> {
          console.log(data)
          navigate('/home')
        })
        .catch((error)=> console.log(error))
    }

  return (
    <>
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white w-25 p-5 rounded-2'>
            <form onSubmit={submitForm}>
              <h2>User Sales</h2>
              <div className='mb-3'>
                <label htmlFor="email">User Name</label><br />
                <input type='text' className='form-control rounded-2 w-75 mx-2' onChange={(e)=>setUserName(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label htmlFor="email">Product Name</label><br />
                <input type='text' className='form-control rounded-2 w-75 mx-2' onChange={(e)=>setProduct(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label htmlFor="password">Quantity</label><br />
                <input type='text' className='form-control rounded-2 w-75 mx-2' onChange={(e)=>setQuantity(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label htmlFor="text">Date of Shipping</label><br />
                <input type='date' className='form-control rounded-2 w-75 mx-2' onChange={(e)=>setShipping(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label htmlFor="text">Shipping Schedule</label><br />
                <input type='text' className='form-control rounded-2 w-75 mx-2' onChange={(e)=>setShippingSchedule(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label htmlFor="text">Vendor Name</label><br />
                <input type='text' className='form-control rounded-2 w-75 mx-2' onChange={(e)=>setVendor(e.target.value)} />
              </div>
              <button id='submit' className='btn btn-success mx-2'>Submit</button>
            </form>
        </div>
    </div>

    </>
  )
}

export default User