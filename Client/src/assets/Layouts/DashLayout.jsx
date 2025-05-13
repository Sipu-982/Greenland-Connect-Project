import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'

const DashLayout = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className=''>
        <Outlet /> {/* This is where child components will render */}
      </main>
    </div>
  )
}

export default DashLayout
