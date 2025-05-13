import React, { useState } from 'react';
import './CreateLand.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
const CreateLand = () => {

  const [title,setTitle] = useState("")
  const [description,setDescription]= useState("")
  const [price,setPrice] = useState("")
  const [address,setAddress]= useState("")
  // const [imageFile, setImageFile] = useState(null);

  const navigate = useNavigate()
  // const [file,setFile] =useState(null)
  
  const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
      const token = localStorage.getItem("authenticateSeller")
      console.log("Token from localStorage:", token);
      if (!token) {
        alert("No token found. Please log in again.");
        return;
      }
      const response = await axios.post("http://localhost:3000/api/land/create",{
        title,description,price,address
      
      },{
        headers:{
          Authorization: `Bearer ${token}`,
        },
      }) 
      alert(response.data.message)
      console.log(response.data.message);

      setTitle('')
      setDescription('')
      setPrice('')
      setAddress('')
      setTimeout(() => {
        navigate("/dashboard/view-lands");
      }, 2000);   
      // setFile('')
      
    } catch (error) {
      // console.error("Error creating land:", error);
      alert(error.response?.data?.message || "Something went wrong!");    }
  }
  return (
    <div className="flex justify-center pt-[50px]">
    <div className="bg-gray-900 text-white w-full max-w-[700px] p-6 rounded-lg shadow-lg mx-5 mt-[70px]">
      <h2 className="text-2xl font-bold mb-4">Create Land</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Land Title" id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)}
          className="p-2 rounded bg-gray-800 border border-gray-700"
        />
    
        <textarea
          placeholder="Enter Description" id='description' name='description' value={description} onChange={(e) => setDescription(e.target.value)}

          className="p-2 rounded bg-gray-800 border border-gray-700"
        />
         <input
          type="number"
          placeholder="Enter Price" id='price' name='price'
          className="p-2 rounded bg-gray-800 border border-gray-700" value={price} onChange={(e) => setPrice(e.target.value)}

        />
        <textarea
          placeholder="Enter Address" id='address' name='address'
          className="p-2 rounded bg-gray-800 border border-gray-700" value={address} onChange={(e) => setAddress(e.target.value)}

        />
         <input type="file" id="file" name="file" className="p-2 rounded bg-gray-800 border border-gray-700"
/>
      <div className="flex space-x-3">
        <button
          type="submit"
          className="bg-green-600 w-25 cursor-pointer hover:bg-green-700 p-2 rounded text-white font-semibold"
        >
          Submit
        </button>
        <Link to="/dashboard" className='p-2 bg-red-500 rounded transition duration-500 hover:opacity-75'>Cancel</Link>
        </div>

      </form>
    </div>
    </div>
  );
};

export default CreateLand;
