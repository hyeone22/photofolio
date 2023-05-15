import React, { useEffect, useRef, useState } from 'react';
import '../styles/Cj.scss';
import Background from 'components/Background';
import anime from 'animejs';
import video from '../video/cj-pc.mp4';
import videos from '../video/cj_mobile.mp4';

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


    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);
  
    const handleClick = () => {
      setActive(prevActive => !prevActive);
    };
    const handleClick2 = () => {
      setActive2(prevActive2 => !prevActive2);
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
          <video className='cj_pc' src={video} 
              muted autoPlay loop>  
              </video>
              <video className='cj_pc1' src={videos}
              muted autoPlay loop>  
              </video>
          </div>
        </div>
        <blockquote>
        <div className='cj_title'>
          <h2 ref={h2Ref} style={{textShadow}}>CJ ONE</h2>
          <span>100%</span>
        </div>
        </blockquote>
        <p className='cj_p'>CJ ONE 웹 사이트의 PC, Tablet, Mobile등 디바이스의 해상도에 맞는 반응형 웹 사이트 제작</p>
        <ul class="faq" style={sectionStyle}>
        <li className={active ? 'active' : ''}>
      <h3 class="question" onClick={handleClick}>CJ ONE 페이지의 한줄평이 뭐야?
        <div class={`plus-minus-toggle ${active ? 'collapsed' : ''}`}></div>
      </h3>
      <div class="answer">이미지 애니메이션 효과의 적용 및 다양한 레이아웃 적용 
          및 아티클의 다채로운 속성값 설정 적용을 위해 CJ ONE 페이지 제작하게 됐어!</div>
    </li>
    <li className={active2 ? 'active' : ''}>
    <h3 class="question" onClick={handleClick2}>사용된 기술들은 무엇이 있어?
    <div class={`plus-minus-toggle ${active2 ? 'collapsed' : ''}`}></div>
      </h3>
      <div class="answer">Js를 이용한 이미지 애니매이션 효과
        Auto Banner, 다수의 인터렉션 구현 반응형 웹사이트 구현
        웹 접근성 준수 HTML/CSS/W3C/SEO 유효성 검사 Pass!    
      </div>
    </li>
         </ul>
      </div>
    </div>
  )
}

export default Cj