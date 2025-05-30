import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./EditLand.css";

const EditLand = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [land, setLand] = useState({
    title: "",
    description: "",
    price: "",
    address: "",
    imageUrls: "", // to hold current image URL
  });
  const [imageFile, setImageFile] = useState(null); // for new image upload
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

        setLand(response.data.data); // fix key to lowercase 'data'
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

      const formData = new FormData();
      formData.append("title", land.title);
      formData.append("description", land.description);
      formData.append("price", land.price);
      formData.append("address", land.address);

      if (imageFile) {
        formData.append("file", imageFile);
      }

      await axios.put(`http://localhost:3000/api/land/update/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Land updated successfully.");
      navigate("/dashboard/view-lands");
    } catch (error) {
      console.error("Failed to update land:", error);
      alert("Update failed.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center absolute top-[50%] left-[50%] text-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 update-form p-6 rounded shadow-md min-h-[400px] w-[500px]"
      >
        <h2 className="text-2xl font-bold mb-4 text-white">Edit Land</h2>

        <div className="input-field">
          <label className="block font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={land.title || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
        </div>

        <div className="input-field">
          <label className="block font-semibold">Description</label>
          <textarea
            name="description"
            value={land.description || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
          />
        </div>

        <div className="input-field">
          <label className="block font-semibold">Price</label>
          <input
            type="number"
            name="price"
            value={land.price || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
        </div>

        <div className="input-field">
          <label className="block font-semibold">Address</label>
          <input
            type="text"
            name="address"
            value={land.address || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-4"
            required
          />
        </div>

        {/* Current Image Preview */}
        {land.imageUrls && (
          <div className="mb-4">
            <label className="block font-semibold text-white mb-2">Current Image</label>
            <img
              src={land.imageUrls}
              alt="Current Land"
              className="max-w-full h-auto rounded"
            />
          </div>
        )}

        {/* Image Upload Input */}
        <div className="input-field">
          <label className="block font-semibold">Upload New Image (optional)</label>
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="w-full p-2 border rounded mb-4"
          />
        </div>

        <div className="input-field flex gap-x-3">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
          >
            Update
          </button>
          <Link
            to="/dashboard/view-lands"
            className="py-2 px-4 bg-red-600 transition duration-500 hover:opacity-75 text-white rounded"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditLand;
