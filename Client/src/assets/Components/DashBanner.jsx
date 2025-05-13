import React from 'react'
import "./DashBanner.css"
const DashBanner = () => {
  return (
    <div className='bg w-full h-[100vh]'>
    <div className="w-full h-[100vh] overlay flex justify-center items-center">
    <div className="px-8 py-12 mt-16 flex flex-col justify-center items-center text-center
     text-white ">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Greenland Project</h1>
      
      <p className="text-lg max-w-4xl mb-8">
        Greenland is a modern digital platform designed to manage, register, and monitor land listings with ease and transparency. It empowers landowners and administrators to interact with land data efficiently.
      </p>
      </div>
    </div>
    </div>
  )
}

export default DashBanner