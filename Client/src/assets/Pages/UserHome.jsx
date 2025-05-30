import React from 'react';
import { FaUserShield, FaClipboardCheck, FaMapMarkedAlt, FaShoppingCart, FaUsers } from 'react-icons/fa';
import './DashBanner.css'
import SearchLand from './SearchLand';

const DashBanner = () => {
  const cards = [
    {
      title: "User and Seller Management",
      description: "Approve or reject seller registrations. Verify seller credentials and manage roles.",
      icon: <FaUsers className="text-green-700 text-4xl" />,
    },
    {
      title: "Seller Registration and Verification",
      description: "Review submitted documents and verify sellers for authenticity.",
      icon: <FaClipboardCheck className="text-green-700 text-4xl" />,
    },
    {
      title: "Land Listing Moderation",
      description: "Verify and moderate land listings for accuracy and compliance.",
      icon: <FaMapMarkedAlt className="text-green-700 text-4xl" />,
    },
    // {
    //   title: "User Purchase History",
    //   description: "Track user purchases and view transaction details securely.",
    //   icon: <FaShoppingCart className="text-green-700 text-4xl" />,
    // },
    // {
    //   title: "Profile & Account Settings",
    //   description: "Update user profile details, security settings, and preferences.",
    //   icon: <FaUserShield className="text-green-700 text-4xl" />,
    // }
  ];


  return (
    <div className="absolute left-[18%] top-[10px] w-[80%] p-6 min-h-[80vh] bg-gray-50 flex flex-col gap-8">
     
      {/* Cards Section */}
      <div className="flex flex-wrap gap-6  justify-center">
        {cards.map((card, index) => (
          <div
          key={index}
           className="bg-white rounded-lg shadow-md w-[300px] min-h-[250px] p-6 transition-all duration-700 hover:shadow-xl hover:shadow-green-400"

        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
            {card.icon}
          </div>
          <p className="text-gray-600">{card.description}</p>
        </div>
        ))}
      </div>
    <div className="">
        <SearchLand/>
      </div>
      {/* Passage Section */}
      <div className="w-full bg-green-700 rounded-xl p-6 text-center">
        <h3 className="text-xl font-bold mb-2 text-white">Platform Purpose</h3>
        <p className="text-white text-sm line-clamp-3">
          Greenland Connect aims to provide a secure and transparent platform for buyers and sellers to manage land transactions effectively. Our admin panel ensures that all seller activities, listings, and documents meet platform guidelines and legal standards.
        </p>
      </div>
    </div>
  );
};

export default DashBanner;
