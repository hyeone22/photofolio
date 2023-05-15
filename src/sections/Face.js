import React, { useState,useEffect } from 'react';
import '../styles/Face.scss';
import Header from 'components/Header';
import '../styles/Menu.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Face() {
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  let timer;

  const handleMouseEnter = () => {
    setIsActive(true);
    timer = setTimeout(() => {
      setIsCompleted(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timer);
    setIsActive(false);
    setIsCompleted(false);
  };

  useEffect(() => {
    AOS.init();
  },[]);

  return (
    <div className='face_main' data-aos="zoom-in"data-aos-easing="ease-in-out"data-aos-delay="50" >
    <Header />
    <div className='face_section'>
    <div
      className={`face-id-wrapper ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    <svg class="face-id-default" version="1.1" viewBox="0 0 30 30">
      <path d="M12.062 20c.688.5 1.688 1 2.938 1s2.25-.5 2.938-1M20 12v2M10 12v2M15 12v4a1 1 0 0 1-1 1" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" />
      <g fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
        <path d="M26 9V6a2 2 0 0 0-2-2h-3M9 4H6a2 2 0 0 0-2 2v3M21 26h3a2 2 0 0 0 2-2v-3M4 21v3a2 2 0 0 0 2 2h3" />
      </g>
    </svg>
    <div className="circle green"></div>
    <div className="circle blue"></div>
    <div className="circle purple"></div>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
      <path className="path-tick" stroke="#FFF" stroke-width="5" fill="none" stroke-linecap="butt" stroke-linejoin="butt" d="M 25,45 35,55 60,30" />

    </svg>
      </div>
    <p>Face ID</p>
    <p>김승현</p>


    </div>


    
    
    </div>
  )
}

export default Face
