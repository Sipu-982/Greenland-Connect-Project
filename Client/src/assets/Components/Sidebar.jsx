import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaUser, FaPlus, FaList, FaSignOutAlt } from 'react-icons/fa';
import '../Layouts/Header.css'
import logo from '../Images/logo1.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const sellerInfo = JSON.parse(localStorage.getItem("sellerInfo"));
  const sellerName = sellerInfo?.fullName || "User";
  
  return (
    <div className="w-full fixed">
      {/* Main Navbar Header */}
      <div className="side-nav text-white h-16 flex items-center justify-between px-8">
        <div className="flex">
           <Link 
                    to="/dashboard"
                    smooth={true}
                    duration={500}
                    className="logo text-xl font-bold flex gap-x-2 cursor-pointer"
                  >
                  <div>
                    <img src={logo} className='w-[50px] h-[40px] object-contain' alt="" />
                    </div>
                    <div>
                     <span>Greenland </span> </div>
                  </Link>
        </div>
        <div className="">

      <nav className="flex justify-center items-center gap-8 py-4">
        <Link to="/dashboard/profile" className="flex items-center gap-2 text-white hover:text-[#2575fc] duration-300">View Profile
          {/* <FaUser /> {isOpen && 'Profile'} */}
        </Link>
        <Link to="/dashboard/create-land" className="flex items-center gap-2 text-white hover:text-[#2575fc] duration-300"> Create Land
          {/* <FaPlus /> {isOpen && 'Create Land'} */}
        </Link>
        <Link to="/dashboard/view-lands" className="flex items-center gap-2 text-white hover:text-[#2575fc] duration-300">View Lands
          {/* <FaList /> {isOpen && 'View Lands'} */}
        </Link>
        <Link to="/" className="flex items-center gap-2 text-white hover:text-[#2575fc] duration-300">
        Logout
          {/* <FaSignOutAlt /> {isOpen && 'Logout'} */}
        </Link>
        {isOpen && (
            <div className="flex gap-x-2 p-2 rounded-lg bg-black text-white">
              
              <FaUser className=" text-2xl" />
              <span className="text-sm font-semibold">{sellerName}</span>

            </div>
        )}
      </nav>
      </div>
      </div>

    </div>
  );
};

export default Navbar;
