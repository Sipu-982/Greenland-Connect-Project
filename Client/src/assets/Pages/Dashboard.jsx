import { Routes, Route, Navigate } from 'react-router-dom';
import SellerProfile from './SellerProfile';
import ViewLands from './ViewLands';
import CreateLand from './CreateLand';
import EditLand from './EditLand';
import SideBar from '../Layouts/SideBar';
import UserHome from './UserHome';

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-[250px] fixed top-0 left-0 bottom-0">
        <SideBar />
      </div>
      <main className="ml-[250px] flex-1 h-screen overflow-y-auto p-6">
        <Routes>
          <Route index element={<UserHome />} />
          <Route path="userhome" element={<UserHome />} />
          <Route path="profile" element={<SellerProfile />} />
          <Route path="view-lands" element={<ViewLands />} />
          <Route path="edit-land/:id" element={<EditLand />} />
          <Route path="create-land" element={<CreateLand />} />
          <Route path="/" element={<Navigate to="userhome" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default Dashboard;
