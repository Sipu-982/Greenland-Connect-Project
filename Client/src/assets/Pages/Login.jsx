import React, { useState } from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
const Login = () => {

    const [email,setEmail]= useState("")
    const [password,setPassword] =useState("")
    const navigate= useNavigate()
    const [loading,setLoading]=useState(true)

    const validateForm=()=>{
     
        if(!email.trim()){
            alert("Email is required!")
            return false
             }
             else if(!/^\S+@\S+\.\S+$/.test(email)){
              alert("Incorrect email address!")
             return false;
            }

             if(!password.trim()){
                alert("Password is required!")
                return false;
          }
          return true;
    }
    const formSubmit= async(e)=>{
   e.preventDefault()
       
   if (!validateForm()) return;

          try {
         const response = await axios.post("http://localhost:3000/api/seller/loginSeller",{
                email,
                password
          
              })
              alert(response.data.message || 'Login successful!');
              const {token,data} = response.data
              console.log(token);
              console.log(data);
             localStorage.setItem("authenticateSeller", token);
             const sellerInfo = {
              fullName: data.name,
              email: data.email,
              phone: data.phone,
              profile:data.profile
            };
            localStorage.setItem("sellerInfo", JSON.stringify(sellerInfo));
              setTimeout(() => {
                navigate('/dashboard');
              }, 2000);      
             setEmail('');
                setPassword('');
        } 
    catch (error) {
      if (error.response) {
        alert(error.response.data.message || "Something went wrong!");
      } else if (error.request) {
        alert("No response from server. Please try again later.");
      } else {
        alert("Error: " + error.message);
      }
    }
    finally{
      setLoading(false)
    }
    }
    if(loading){
      <div class="flex justify-center text-center">
    <div role="status">
        <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
    </div>
</div>
    }
  return (
    <div className="bg-neutral-200 w-full min-h-[90vh] flex justify-center items-center">
      <div className="form w-120 min-h-[300px] flex justify-center items-center shadow-md bg-white p-8 rounded-xl">
        <form onSubmit={formSubmit} className="space-y-4 w-full">
            <div className=""><h2 className='text-xl font-semibold text-blue-700'>login to your account</h2></div>
          <div className="data-field">
            <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" autoComplete="off" className="w-full p-2 border border-gray-300 rounded" />
          </div>
         
          <div className="data-field">
            <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="data-field">
            <button type='submit' className="cursor-pointer w-full bg-green-600 text-white p-2 rounded hover:bg-blue-600">
              Submit
            </button>
          </div>
          <div className="data-field text-center">
            <span>Don't have account? <Link to='/register' className='text-blue-400'>register here</Link></span>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
