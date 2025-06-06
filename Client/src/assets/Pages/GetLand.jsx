import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdRemoveRedEye } from "react-icons/md";

const GetLand = () => {
  const [lands, setLands] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchLands = async () => {
    try {
      const token = localStorage.getItem("authenticateSeller");
      console.log("Token from localStorage:", token);

      if (!token) {
        alert("No token found. Please log in again.");
        return;
      }

      const response = await axios.get("http://localhost:3000/api/admin/getAllLands", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLands(response.data.data);
    } catch (error) {
      console.error("Fetching lands failed!", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLands();
  }, []);

  const handleToggleLandStatus = async (landId, newStatus) => {
    const confirmChange = window.confirm(`Are you sure you want to mark this land as "${newStatus}"?`);
    if (!confirmChange) return;

    try {
      const token = localStorage.getItem("authenticateSeller");
      const response = await axios.patch(
        `http://localhost:3000/api/admin/toggleLand/${landId}`,
        { newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
      fetchLands(); // Refresh the land list
    } catch (error) {
      console.error("Failed to update land status:", error);
      alert("Error updating land status");
    }
  };

  const viewLandId = (id) => {
    navigate(`/admindashboard/GetLandId/${id}`);
  };

  if (loading) {
    return <div class="flex justify-center absolute top-[50%] left-[50%] text-center">
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
    <div className="flex flex-col justify-center   items-center w-full">
      <h1 className="text-2xl text-black font-semibold mt-6 mb-4">Land Records</h1>
      <div className="p-4 min-w-[800px] ml-[150px] flex justify-center max-h-[600px] overflow-y-auto">
        <table className="w-full text-black border border-gray-300  rounded overflow-hidden">
          <thead className="bg-green-500 text-white sticky top-0">
            <tr>
              <th className="p-2">Title</th>
              <th className="p-2">Description</th>
              <th className="p-2">Price</th>
              <th className="p-2">Address</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-neutral-300">
            {lands.length > 0 ? (
              lands.map((land) => (
                <tr key={land._id} className="text-center border-t border-gray-300">
                  <td className="p-2 text-left">{land.title}</td>
                  <td className="p-2 text-left">{land.description}</td>
                  <td className="p-2">{land.price}</td>
                  <td className="p-2">{land.address}</td>
                  <td
                    className={`p-2 font-semibold ${
                      land.status === "Approved"
                        ? "text-green-700"
                        : land.status === "Declined"
                        ? "text-red-700"
                        : "text-yellow-600"
                    }`}
                  >
                    {land.status}
                  </td>
                  <td className="p-2 space-x-2">
                    <button
                      onClick={() => viewLandId(land._id)}
                      className="hover:text-green-600 cursor-pointer text-neutral-500 px-3 py-1"
                    >
                      <MdRemoveRedEye />
                    </button>
                    <button
                      onClick={() => handleToggleLandStatus(land._id, "Approved")}
                      className="bg-green-500 cursor-pointer hover:opacity-85 text-white px-3 py-1 rounded"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleToggleLandStatus(land._id, "Declined")}
                      className="bg-red-500 cursor-pointer hover:opacity-85 text-white px-3 py-1 rounded"
                    >
                      Decline
                    </button>
                    <button
                      onClick={() => handleToggleLandStatus(land._id, "Pending")}
                      className="bg-blue-500 cursor-pointer hover:opacity-85 text-white px-3 py-1 rounded"
                    >
                      Pending
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  No land records available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetLand;
