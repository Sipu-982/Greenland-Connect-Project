import { Routes, Route, Navigate } from 'react-router-dom'
import DashLayout from '../Layouts/DashLayout'
// import DashBanner from './Components/DashBanner'
import SellerProfile from './SellerProfile';
import ViewLands from './ViewLands';
import CreateLand from './CreateLand';
import DashBanner from '../Components/DashBanner'
import EditLand from './EditLand';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashLayout />}>
        <Route index element={<DashBanner />} /> 
        <Route path="profile" element={<SellerProfile />} />
        <Route path="view-lands" element={<ViewLands />} />
        <Route path="edit-land/:id" element={<EditLand />} />
        <Route path="create-land" element={<CreateLand />} />
      </Route>

      <Route path="/" element={<Navigate to="/dashboard" />} />
    </Routes>
  )
}

export default App
