import React from 'react';
import { Element } from 'react-scroll';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bg1 from '../Images/land5.jpeg';
import bg2 from '../Images/land4.jpeg';
import bg3 from '../Images/land8.jpeg';
import bg4 from '../Images/land6.jpeg';
import bg5 from '../Images/land7.jpeg';
import "./Banner.css"
import { Link } from 'react-router-dom';
const Banner = (props) => {
  // Show only one image on all devices
  const responsive = {
    allDevices: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div>
      <Element name="banner">
        <section className="banner w-screen min-h-[70vh]">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            arrows={false}
            autoPlay={props.deviceType !== "mobile"}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5s ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className="relative w-screen h-[65vh]">
              <img src={bg1} alt="Slide 1" className="w-full h-[500px]  object-cover" />
              <div className="effect flex items-center justify-between absolute top-0 left-0 w-full h-full bg-black  z-10">
              <div className='px-8'>
                <h2 className='font-bold text-4xl text-green-500'>Greenland Connect Project</h2>
                <p className='py-3 text-xl text-white'>Bridging technology and sustainability between Greenland and the world.</p>
               <div className="py-3"> <Link className='py-2 px-4 bg-green-500 text-lg text-white'>Get Started</Link></div>
              </div>
                <div className='w-1/2 h-[65vh] shape'>
               
                </div>
              </div>
            </div>
            <div className="relative w-screen h-[65vh]">
              <img src={bg2} alt="Slide 2" className="w-full h-[500px]  object-cover" />
              <div className="effect flex items-center justify-between absolute top-0 left-0 w-full h-full bg-black  z-10">
              <div className='px-8'>
                <h2 className='font-bold text-4xl text-green-500'>Greenland Connect Project</h2>
                <p className='py-3 text-xl text-white'>Bridging technology and sustainability between Greenland and the world.</p>
               <div className="py-3"> <Link className='py-2 px-4 bg-green-500 text-lg text-white'>Get Started</Link></div>
              </div>
                <div className='w-1/2 h-[65vh] shape'>
               
                </div>
              </div>
            </div>
            <div className="relative w-screen h-[65vh]">
              <img src={bg3} alt="Slide 2" className="w-full h-[500px]  object-cover" />
              <div className="effect flex items-center justify-between absolute top-0 left-0 w-full h-full bg-black  z-10">
              <div className='px-8'>
                <h2 className='font-bold text-4xl text-green-500'>Greenland Connect Project</h2>
                <p className='py-3 text-xl text-white'>Bridging technology and sustainability between Greenland and the world.</p>
               <div className="py-3"> <Link className='py-2 px-4 bg-green-500 text-lg text-white'>Get Started</Link></div>
              </div>
                <div className='w-1/2 h-[65vh] shape'>
               
                </div>
              </div>
            </div>
            <div className="relative w-screen h-[65vh]">
              <img src={bg4} alt="Slide 2" className="w-full h-[500px]  object-cover" />
              <div className="effect flex items-center justify-between absolute top-0 left-0 w-full h-full bg-black  z-10">
              <div className='px-8'>
                <h2 className='font-bold text-4xl text-green-500'>Greenland Connect Project</h2>
                <p className='py-3 text-xl text-white'>Bridging technology and sustainability between Greenland and the world.</p>
               <div className="py-3"> <Link className='py-2 px-4 bg-green-500 text-lg text-white'>Get Started</Link></div>
              </div>
                <div className='w-1/2 h-[65vh] shape'>
               
                </div>
              </div>
            </div>
            <div className="relative w-screen h-[65vh]">
              <img src={bg5} alt="Slide 2" className="w-full h-[500px]  object-cover" />
              <div className="effect flex items-center justify-between absolute top-0 left-0 w-full h-full bg-black  z-10">
              <div className='px-8'>
                <h2 className='font-bold text-4xl text-green-500'>Greenland Connect Project</h2>
                <p className='py-3 text-xl text-white'>Bridging technology and sustainability between Greenland and the world.</p>
               <div className="py-3"> <Link className='py-2 px-4 bg-green-500 text-lg text-white'>Get Started</Link></div>
              </div>
                <div className='w-1/2 h-[65vh] shape'>
               
                </div>
              </div>
            </div>
         
          </Carousel>
        </section>
      </Element>
    </div>
  );
};

export default Banner;
