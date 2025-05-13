import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";

import "./viewLand.css"
// import { TbTruckReturn } from 'react-icons/tb';
const ViewLands = () => {
  const [lands, setLands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLand = async () => {
      try {
        const token = localStorage.getItem("authenticateSeller"); // Correct token key
        console.log("Token from localStorage:", token);
        if (!token) {
          alert("No token found. Please log in again.");
          return;
        }

        const response = await axios.get("http://localhost:3000/api/land/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setLands(response.data.data);
      } catch (error) {
        console.error("Land fetching failed!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLand();
  }, []);

const deleteLand = async(id)=>{
  const confirmDelete= window.confirm("Are you want to delete land?")
  if(!confirmDelete) return

  try {
    const token = localStorage.getItem("authenticateSeller");
      if (!token) {
        alert("Unauthorized. Please log in again.");
        return;
      }
      await axios.delete(`http://localhost:3000/api/land/delete/${id}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setLands((prevLands) => prevLands.filter((land) => land._id !== id));

  } catch (error) {
    console.error("Failed to delete land:", error);
    alert("Failed to delete land. Please try again.");
  }
}

  if (loading) {
    return <div className="text-center mt-10 text-blue-500">Loading...</div>;
  }

  return (
    <div className="flex justify-center pt-[70px]">
      <div className="p-4 min-w-[800px]">
        <h1 className="text-3xl font-bold mb-6">My Lands</h1>
        <table className="w-full bg-white text-black rounded overflow-hidden">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="p-2">Title</th>
              <th className="p-2">Price</th>
              <th className="p-2">Address</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody className='bg-neutral-200 border-2 border-white'>
            {lands.length > 0 ? (
              lands.map((land) => (
                <tr key={land._id} className="text-center ">
                  <td className="p-2">{land.title}</td>
                  <td className="p-2">{land.price}</td>
                  <td className="p-2">{land.address}</td>
                  <td className="p-2  flex justify-center gap-x-4 space-x-2">
                    <Link
                      to={`/dashboard/edit-land/${land._id}`}
                      className="text-xl  text-blue-600"
                    >
                    <MdEditSquare />


                    </Link>
                    <button onClick={()=>deleteLand(land._id)}
                      className="text-xl cursor-pointer hover:opacity-75  text-red-500"
                    >
                       <RiDeleteBin6Fill />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4">No lands available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewLands;
