// AdminDashboard.jsx

import React from 'react';
import SideHeader from '../Layouts/SideHeader';
import { Route, Routes } from 'react-router-dom';
import ViewSeller from './ViewSeller';
import ViewFeed from './ViewFeed';
import GetLand from './GetLand';
import GetLandById from './GetLandById';
import DashBanner from './DashBanner';

const AdminDashboard = () => {
  return (
    <div className="flex gap-x-[100px]">
      <SideHeader />
      <div className="flex-1 p-6 text-white justify-center bg-white min-h-screen">
        <Routes>
          <Route index element={<DashBanner />} /> {/* Default route */}
          <Route path='dashbanner' element={<DashBanner />} /> {/* Default route */}
          <Route path="VeiwSeller" element={<ViewSeller />} />
          <Route path="ViewFeed" element={<ViewFeed />} />
          <Route path="GetLand" element={<GetLand />} />
          <Route path="GetLandId/:id" element={<GetLandById />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
