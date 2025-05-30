import { Link } from 'react-router-dom';
import { FaUser, FaPlus, FaList, FaSignOutAlt, FaHome } from 'react-icons/fa';

const SideBar = () => {
  const sellerInfo = JSON.parse(localStorage.getItem("sellerInfo"));
  const sellerName = sellerInfo?.fullName || "User";
  const profile = sellerInfo?.profile || "User";
  const email = sellerInfo?.email || "User";

  return (
    <aside className="w-[250px] bg-white font-semibold  text-green-700 min-h-screen fixed left-0 top-0 flex flex-col py-10 px-6">
      <div className="pt-5">
       <div className="flex flex-col justify-center">
       <div className="p-2">
        <img src={profile} alt="" className='w-15 h-15 object-cover rounded-full' /></div>
        <div className=""><span className="font-semibold text-blue-600">{sellerName}</span></div>
        <div className=""><span className="font-semibold">{email}</span></div>
      </div>
      <hr className="w-full border-gray-500 border-2 mt-4" />

      </div>
      {/* Navigation Links */}
      <nav className="flex flex-col gap-y-8 text-base pt-7 font-medium">
        <Link to="/dashboard/userhome" className="flex items-center gap-3 p-2 hover:bg-green-600 hover:text-white  rounded-md transition-all duration-500">
          <FaHome /> Home
        </Link>
        <Link to="/dashboard/profile" className="flex items-center gap-3 p-2 hover:bg-green-600 hover:text-white  rounded-md transition-all duration-500">
          <FaUser /> Profile
        </Link>
        <Link to="/dashboard/create-land" className="flex items-center gap-3 p-2 hover:bg-green-600 hover:text-white  rounded-md transition-all duration-500">
          <FaPlus /> Create Land
        </Link>
        <Link to="/dashboard/view-lands" className="flex items-center gap-3 p-2 hover:bg-green-600 hover:text-white  rounded-md transition-all duration-500">
          <FaList /> View Lands
        </Link>
        <Link to="/" className="flex items-center gap-3 p-2 hover:bg-green-600  rounded-md hover:text-white transition-all duration-500">
          <FaSignOutAlt /> Logout
        </Link>
      </nav>

      
    </aside>
  );
};

export default SideBar;
