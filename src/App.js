import './App.scss';
import Main from './sections/Main';
import Se from './sections/Se';
import Cj from './sections/Cj';
import Kosdaq from './sections/Kosdaq';
import Kakao from './sections/Kakao';
import Netflix from './sections/Netflix';
import Facebook from './sections/Facebook';
import Off from './sections/Off';
import Face from './sections/Face';
import Settings from './sections/Settings';
import Introduce from './sections/Introduce';
import Menu from './sections/Menu';
import Call from './sections/Call';
import { BrowserRouter } from 'react-router-dom';
import Phone from './sections/Phone';
import React, { useEffect, useRef } from 'react';


function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
  
      const delta = e.wheelDelta > 0 ? -1 : 1; 
  
      window.scrollBy({
        top: delta * window.innerHeight,
        behavior: 'smooth',
      });
    };
  
    window.addEventListener('wheel', handleWheel, { passive: false });
  
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);


  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div
      className="app"
      // ref={containerRef}    
    >
    <>
    <Main/>
    <Face  />
    <Settings />
    <Phone  />
    <Introduce />
    <Menu />
    <Call />
    <Se />
    <Cj />
    <Kosdaq />
    <Kakao />
    <Netflix />
    <Facebook />
    <Off/>
    </>  
    </div>
    </BrowserRouter>
  );
}

export default App;
