import React from 'react'
import { Element } from 'react-scroll'
import card1 from '../Images/card-img1.jpg'
import card2 from '../Images/card-img2.jpg'
import card3 from '../Images/card-img3.jpg'
import card4 from '../Images/card-img4.jpg'
import "./Service.css"
import { Link } from 'react-router-dom'
const Service = () => {
  return (
    <div>
       <Element name="service">
              <section className='py-[100px] w-full min-h-[80vh] bg-neutral-50'>
                <div className="text-center"><h1 className='text-3xl text-green-600 font-bold'>Our Services</h1></div>
                <div className="services">
                  
                  <div className="card">
                    <div className="card-image">
                    <img src={card1} alt="" />
                    </div>

                    <div className="card-content">
                      <h2>Eco-Friendly Broadband Service</h2>
                      <p>
                      Greenland Connect offers high-speed, eco-conscious broadband services that combine advanced networking technologies with sustainable energy sources.
                      </p>
                      <Link to="" className='text-green-700 hover:text-blue-700'>Read more</Link>
                    </div>
                    </div>
                  <div className="card">
                  <div className="card-image">
                    <img src={card2} alt="" />
                    </div>
                    <div className="card-content">
                      <h2>Rural & Remote Area Connectivity</h2>
                      <p>
                      Providing internet access to underserved rural and mountainous regions.
                      Wireless mesh networks or satellite-based coverage.                      </p>
                      <Link to="" className='text-green-700 hover:text-blue-700'>Read more</Link>
                    </div>
                    </div>
                  <div className="card">
                  <div className="card-image">
                    <img src={card3} alt="" />
                    </div>
                    <div className="card-content">
                      <h2>Smart Agriculture IoT Solutions</h2>
                      <p>
                      Real-time data connectivity for soil sensors, weather stations, and irrigation systems.
                      Support for precision farming to reduce resource waste.</p>
                      <Link to="" className='text-green-700 hover:text-blue-700'>Read more</Link>
                    </div>
                  </div>
                  <div className="card">
                  <div className="card-image">
                    <img src={card4} alt="" />
                    </div>
                    <div className="card-content">
                      <h2>Green Data Hosting</h2>
                      <p>
                      Web hosting and cloud services powered by clean energy.
                      Sustainable data centers with low carbon footprints.                      </p>
                      <Link to="" className='text-green-700 hover:text-blue-700'>Read more</Link>
                    </div>
                    </div>
                  </div>
              </section>
            </Element>
    </div>
  )
}

export default Service