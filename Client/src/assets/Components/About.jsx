import React from 'react'
import { Element } from 'react-scroll'
import "./About.css"
const About = () => {
  return (
    <div>
      <Element name="about">
        <section className='w-full min-h-[90vh] bg-green-100 p-5'>
          <div className="text-center"><h1 className='text-green-600 font-bold text-3xl'>About Us</h1></div>
          <div className="pt-[50px] about">
          <div className="p-4 w-[700px] m-5 min-h-[200px] rounded-md bg-white">
          <h2>🌿 About Greenland Connect</h2>  
          <p>Greenland Connect is committed to bridging the gap between people and the planet. As a forward-thinking environmental organization, we aim to create a sustainable future through green initiatives, community engagement, and innovative eco-solutions.</p>
          </div>
          <div className="p-4 w-[700px] m-5 min-h-[200px] rounded-md bg-white">
            <h2>🌍 Our Mission</h2>
            <p>To connect communities with nature by promoting eco-friendly practices, supporting reforestation, and fostering environmental awareness that inspires real change.</p>
          </div>
          <div className="p-4 w-[700px] m-5 min-h-[200px] rounded-md bg-white">
            <h2>🌱 What We Do</h2>
            <p>Tree Plantation Drives: Organizing mass plantation events to combat deforestation and climate change.</p>
            <p>Sustainable Development Projects: Encouraging the use of renewable energy, waste management, and eco-housing solutions.</p>
            <p>Community Involvement: Empowering local communities to lead green movements in their regions.</p>
          </div>
          <div className="p-4 w-[700px] m-5 min-h-[200px] rounded-md bg-white">
            <h2>🤝 Our Vision</h2>
            <p>A connected world where nature and technology work hand in hand to ensure a cleaner, greener, and healthier planet for generations to come.</p>
          </div>
          <div className="p-4 w-[700px] m-5  min-h-[200px] rounded-md bg-white">
            <h2>🌐 Why Choose Us?</h2>
            <p>
              <li>Passionate about sustainability</li>
              <li>Proven impact through measurable outcomes</li>
              <li>Transparent and inclusive collaboration</li>
              <li>Driven by innovation and green technology</li>
            </p>
          </div>
          <div className="p-4 w-[700px] m-5  min-h-[200px] rounded-md bg-white">
            <h2>Join the Movement 🌎</h2>
            <p>
            Together, we can grow forests, protect wildlife, and build a sustainable tomorrow. Whether you're a student, a professional, or an organization, there's a place for you in the Green Land Project. <br />
          👉 Let's make Earth green again — one tree at a time.
            </p>
          </div>
          </div>
        </section>
      </Element>
    </div>
  )
}

export default About