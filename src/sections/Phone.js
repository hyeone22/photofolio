import React from 'react';
import '../styles/Phone.scss';
import { FaClock,FaComment,FaPhoneAlt,FaPhone } from "react-icons/fa";
import Header from 'components/Header';

function Phone() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='phone_main'>
      <Header />
      <div className='phone_header'>
        <h2 className='fall-out'>김승현</h2>  
      </div>
      <div className='phone_icon'>
        <div className='phone_icons'>
          <i><FaClock /></i>
          <p>Remind Me</p>  
        </div>
        <div className='phone_icons'>
          <i><FaComment /></i>
          <p>Message</p>  
        </div>  
      </div>  
      <div className='phone_call'>
        <div className='phone_screen'>
          <span className='phone_red'>
            <i><FaPhoneAlt /></i>
          </span>
          <p>종료</p>  
        </div>
        <div className='phone_screen'onClick={() => scrollToSection('introduce_scroll')}>
          <span className='phone_green'>
            <i><FaPhone /></i>
          </span>
          <p>통화</p>  
        </div>   
      </div>
  
    </div>
  )
}

export default Phone