import React from 'react';
import Register from './assets/Pages/Register';
import Layout from './assets/Layouts/Layout';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './assets/Pages/Login';
import Home from './assets/Pages/Home';
import Banner from './assets/Components/Banner';
import About from './assets/Components/About';
import Contact from './assets/Components/Contact';
import Service from './assets/Components/Service';
import Dashboard from './assets/Pages/Dashboard';
import AdministratorLogin from './assets/Pages/AdministratorLogin';
import AdminDashboard from './assets/Pages/AdminDashboard';

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Routes using shared Layout */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='adminLogin' element={<AdministratorLogin />} />
          <Route path='banner' element={<Banner />} />
          <Route path='about' element={<About />} />
          <Route path='service' element={<Service />} />
          <Route path='contact' element={<Contact />} />
        </Route>
        <Route path='/admindashboard/*' element={<AdminDashboard/>} />
        {/* Dashboard WITHOUT Layout */}
        <Route path='/dashboard/*' element={<Dashboard />} />

      </Routes>
    </Router>
  );
};

export default App;
