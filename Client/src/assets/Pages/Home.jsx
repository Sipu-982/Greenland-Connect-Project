import React from 'react'
import Banner from '../Components/Banner'
import About from '../Components/About'
import Service from '../Components/Service'
import Contact from '../Components/Contact'
import Footer from '../Layouts/Footer'
// import './Home.css'
const Home = () => {
  return (
<div className='banner w-full overflow-x-hidden min-h-[80vh] mt-[60px]'>
<Banner/>
      <About/>
      <Service/>
      <Contact/>
    </div>
  )
}

export default Home