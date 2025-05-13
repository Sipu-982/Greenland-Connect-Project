import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name.trim()) {
      alert('Name is required!');
      return false;
    }
    if (!email.trim()) {
      alert('Email is required!');
      return false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Invalid email format!');
      return false;
    }
    if (!phone.trim()) {
      alert('Phone is required!');
      return false;
    }
    if (!password.trim()) {
      alert('Password is required!');
      return false;
    }
    return true;
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post('http://localhost:3000/api/seller/sellerReg', {
        name,
        email,
        phone,
        password,
      });

      alert(response.data.message || 'Registration successful!');

      const sellerData = {
        fullName: name,
        email,
        phone,
      };
      localStorage.setItem('sellerInfo', JSON.stringify(sellerData));

      setName('');
      setEmail('');
      setPhone('');
      setPassword('');

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error(error);
      const errMsg =
        error.response?.data?.message || error.response?.data?.error || 'Something went wrong!';
      alert(errMsg);
    }
  };

  return (
    <div className="bg-neutral-100 w-full min-h-[90vh] flex justify-center items-center">
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
              placeholder="Enter full name"
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
