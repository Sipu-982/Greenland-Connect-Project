import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [file,setFile]= useState(null)
  const navigate = useNavigate();

  

  const formSubmit = async (e) => {
    e.preventDefault();

    const formData= new FormData()
    formData.append("name",name)
    formData.append("email",email)
    formData.append("phone",phone)
    formData.append("password",password)
    formData.append("image",file)
    try {
      const response = await axios.post('http://localhost:3000/api/seller/sellerReg',formData,{
        headers:{
          "Content-Type": "multipart/form-data",
        }
      });
      alert(response.data.message || 'Registration successful!');

      const sellerData = {
        fullName: name,
        email,
        phone,
        file
      };
      localStorage.setItem('sellerInfo', JSON.stringify(sellerData));

      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setFile(null)

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
            alert(error.response?.data?.message || "Something went wrong!");    
          }
    
  };

  return (
    <div className="bg-neutral-200 w-full min-h-[100vh] flex justify-center items-center">
      <div className="form w-120 min-h-[500px] mt-[50px] flex justify-center items-center shadow-md bg-white p-8 rounded-xl">
        <form onSubmit={formSubmit} className="space-y-4 w-full">
          <div className="">
            <h2 className="text-xl font-semibold text-blue-700">Create an account</h2>
          </div>

          <div className="data-field">
            <input
              type="text"
              name="fullname"
              id="fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter fullname"
              autoComplete="off"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="data-field">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              autoComplete="off"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="data-field">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              autoComplete="off"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="data-field">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
           <div className="data-field">
            <input
              type="file"
              name="profile"
              id="profile"
              onChange={(e)=>setFile(e.target.files[0])}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          
          <div className="data-field">
            <button
              type="submit"
              className="cursor-pointer w-full bg-green-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
          <div className="data-field text-center">
            <span>
              Already have an account?{' '}
              <Link to="/login" className="text-blue-400">
                Login here
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
