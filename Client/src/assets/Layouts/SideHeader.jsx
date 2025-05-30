import React, { useState } from 'react';
import { FaHome, FaUserCheck, FaComments, FaLandmark, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { VscThreeBars } from "react-icons/vsc";


const menuItems = [
  { label: 'Home', icon: <FaHome />, path: '/admindashboard/dashbanner' },
  { label: 'Activate Seller', icon: <FaUserCheck />, path: '/admindashboard/VeiwSeller' },
  { label: 'View Feeds', icon: <FaComments />, path: '/admindashboard/ViewFeed' },
  { label: 'Activate Lands', icon: <FaLandmark />, path: '/admindashboard/GetLand' },
  { label: 'Logout', icon: <FaSignOutAlt />, path: '/' },
];

const SideHeader = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed z-50">
      <div className={`bg-green-700 text-white h-screen p-5 pt-8 relative duration-300 shadow-lg ${isOpen ? 'w-64' : 'w-20'}`}>
        <VscThreeBars
          className={`absolute cursor-pointer -right-4 top-9 w-8 h-8 bg-green-100 text-black rounded-full border border-white transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`}
          onClick={() => setIsOpen(!isOpen)}
        />

        <div className="mt-10 flex flex-col gap-y-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-4 p-2 hover:bg-green-600  rounded-md transition-all duration-500"
            >
              <span className="text-xl">{item.icon}</span>
              {isOpen && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideHeader;
