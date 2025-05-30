import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdministratorLogin = () => {
    const [adminEmail,setAdminEmail]= useState("")
    const [adminPassword,setadminPassword]= useState("")
    const navigate= useNavigate()

    const handleSubmit= async(e)=>{
        e.preventDefault()
        
        try {
            const response =  await axios.post("http://localhost:3000/api/admin/adminLogin",{
                adminEmail,adminPassword
            })
            alert(response.data.message)

            const {token,data} = response.data
              console.log(token);
              console.log(data);
             localStorage.setItem("authenticateSeller", token);
            setAdminEmail("")
            setadminPassword("")
           setTimeout(()=>{
            navigate('/admindashboard')
           })
        } catch (error) {
         alert(error.response?.data?.message || error.response?.data?.error || 'Something went wrong!');   
         }

     }

  return (
<div className="bg-neutral-200 w-full min-h-[90vh] flex justify-center items-center">
      <div className="form w-120 min-h-[300px] flex justify-center items-center shadow-md bg-white p-8 rounded-xl">
        <form  className="space-y-4 w-full" onSubmit={handleSubmit}>
            <div className=""><h2 className='text-xl font-semibold text-blue-700'>Administartor Login</h2></div>
          <div className="data-field">
            <input type="email" name="email" id="email" value={adminEmail} onChange={(e)=>setAdminEmail(e.target.value)}  placeholder="administator email" autoComplete="off" className="w-full p-2 border border-gray-300 rounded" />
          </div>
         
          <div className="data-field">
            <input type="password" name="password" id="password" value={adminPassword} onChange={(e)=>setadminPassword(e.target.value)} placeholder="administator Password" className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="data-field">
            <button type='submit' className="cursor-pointer w-full bg-green-600 text-white p-2 rounded hover:bg-blue-600">
              Submit
            </button>
          </div>
          
        </form>
      </div>
    </div>  )
}

export default AdministratorLogin