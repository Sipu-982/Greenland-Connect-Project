import axios from "axios";
import React, { useEffect, useState } from "react";
// import { MdDescription } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./EditLand.css"
const EditLand = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [land, setLand] = useState({
    title: "",
    description:"",
    price: "",
    address: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLand = async () => {
      try {
        const token = localStorage.getItem("authenticateSeller");
        if (!token) {
          alert("Unauthorized. Please log in again.");
          return;
        }

        const response = await axios.get(`http://localhost:3000/api/land/getLandById/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setLand(response.data.Data);
      } catch (error) {
        console.error("Failed to fetch land:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLand();
  }, [id]);

  const handleChange = (e) => {
    setLand({ ...land, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authenticateSeller");
      if (!token) {
        alert("Unauthorized. Please log in again.");
        return;
      }

      await axios.put(`http://localhost:3000/api/land/update/${id}`, land, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Land updated successfully.");
      navigate("/dashboard/view-lands");
    } catch (error) {
      console.error("Failed to update land:", error);
      alert("Update failed.");
    }
  };

  if (loading || !land) {
    return <div className="text-center mt-10 text-blue-500">Loading...</div>;
  }
  return (
    <div className="flex  justify-center pt-[100px]">
      <form onSubmit={handleSubmit} className=" bg-gray-900 update-form p-6 rounded shadow-md min-h-[400px] w-[500px]">
        <h2 className="text-2xl font-bold mb-4 text-white">Edit Land</h2>
       
        <div className="input-field">
        <label className="block font-semibold">Title</label>
        <input
          type="text"
          name="title"
          value={land?.title||""}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          required
        />
        </div>
        <div className="input-field">

                <label className="block  font-semibold">Address</label>

         <textarea
          id='description' name='description' value={land.description} onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        />
        </div>
        <div className="input-field">
        <label className="block  font-semibold">Price</label>
        <input
          type="number"
          name="price"
          value={land.price}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          required
        />
</div>
<div className="input-field">

        <label className="block  font-semibold">Address</label>
        <input
          type="text"
          name="address"
          value={land.address}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
          required
        />
</div>
<div className="input-field flex gap-x-3">

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
        >
          Update
        </button>
        <Link to="/dashboard/view-lands" className="py-2 px-4 bg-red-600 transition duration-500 hover:opacity-75  text-white rounded">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default EditLand;
