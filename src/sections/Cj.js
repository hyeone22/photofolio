import React from 'react';
import '../styles/Cj.scss';
import Background from 'components/Background';

function Cj() {
  return (
    <div className='cj_main'>
      <Background />
      <div className='cj_section'>
        <div className='cj_header'>
        <span></span>
        <span></span> 
        <span></span>   
        </div>
        <div className='cj_movie'>
          <div className='movie_section'>

          </div>
        </div>
        <div className='cj_title'>
          <h2>CJ ONE</h2>
          <span>100%</span>
        </div>
        <p>CJ ONE 웹 사이트의 PC, Tablet, Mobile등 디바이스의 해상도에 맞는 반응형 웹 사이트 제작</p>
      </div>
    </div>
  )
}

export default Cj