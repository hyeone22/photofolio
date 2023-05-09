import React, { useEffect, useRef, useState } from 'react';
import '../styles/Cj.scss';
import Background from 'components/Background';
import anime from 'animejs';

function Cj() {
  const h2Ref = useRef(null);
  const [textShadow, setTextShadow] = useState('');

  useEffect(() => {
    const h2 = h2Ref.current;
    h2.addEventListener('mousemove', handleMouseMove);
    return () => {
      h2.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseMove = e => {
    const rXP = e.pageX - h2Ref.current.offsetLeft - h2Ref.current.offsetWidth / 3;
    const rYP = e.pageY - h2Ref.current.offsetTop - h2Ref.current.offsetHeight / 2;
    setTextShadow(
      `${rYP / 550}px ${rXP / 80}px rgba(227,6,19,.8), 
       ${rYP / 500}px ${rXP / 60}px rgba(255,237,0,1), 
       ${rXP / 30}px ${rYP / 800}px rgba(0,159,227,.7)`
    );
  };

  const [isHeaderClicked, setIsHeaderClicked] = useState(false);

  const handleHeaderClick = () => {
    setIsHeaderClicked(prevState => !prevState);
  };

  const sectionStyle = {
    backgroundColor: isHeaderClicked ? 'rgba(82, 82, 82, 1)' : 'black'
  };

  return (
    <div className='cj_main'>
      <Background />
      <div className='cj_section' style={sectionStyle}>
        <div className='cj_header'>
        <span onClick={handleHeaderClick}></span>
        <span onClick={handleHeaderClick}></span> 
        <span onClick={handleHeaderClick}></span>   
        </div>
        <div className='cj_movie'>
          <div className='movie_section'>

          </div>
        </div>
        <div className='cj_title'>
          <h2 ref={h2Ref} style={{textShadow}}>CJ ONE</h2>
          <span>100%</span>
        </div>
        <p>CJ ONE 웹 사이트의 PC, Tablet, Mobile등 디바이스의 해상도에 맞는 반응형 웹 사이트 제작</p>
       
      </div>
    </div>
  )
}

export default Cj