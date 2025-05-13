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

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Routes using shared Layout */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='banner' element={<Banner />} />
          <Route path='about' element={<About />} />
          <Route path='service' element={<Service />} />
          <Route path='contact' element={<Contact />} />
        </Route>

        {/* Dashboard WITHOUT Layout */}
        <Route path='/dashboard/*' element={<Dashboard />} />

      </Routes>
    </Router>
  );
};

export default App;
