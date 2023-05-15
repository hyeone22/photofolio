import Background from 'components/Background'
import React, { useEffect } from 'react'
import '../styles/Kakao.scss';
import Header from 'components/Header';
import '../styles/Menu.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Kakao() {

  useEffect(() => {
    AOS.init();
  },[]);

  return (
    <div className='kakao_main'>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 0 0" width="0" height="0" style={{display:'none'}}>
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 13 -6" result="goo" />
    </filter>
  </defs>
    </svg>
      <Background />
      <div className='kakao_section'>
        <div className='kakao_movie'>  
        </div>
        <div className='kakao_container'>
          <div className='kakao_header'>
          <div class="goo">
              <h1>KAKAKOTALK APP</h1>
              <div class="drop"></div>
              <div class="drop"></div>
              <div class="drop"></div>
              <div class="drop"></div>
              <div class="drop"></div>
              <div class="drop"></div>
          </div>
          <p>카카오톡 React 앱 제작</p>
          </div>
          <div className='kakao_skill'>
            <span>React</span>
            <span>Sass</span>
            <span>Javascript</span>
            <span>SPA</span>
            <span>Firebase</span>
            <span>React-Router-Dom</span>    
          </div>
          <div className='kakao_date'>
          <span>2023.00 ~ 2023.00.00</span>  
          </div>
          <div className='kakao_overview' data-aos="fade-right">
            <h3>Overview</h3>
            <p>React와 Firebase를 사용해 간단한 CRUD가 가능한 채팅 애플리케이션 SPA 제작</p>  
          </div>
          <div className='kakao_description' data-aos="fade-left">
            <h3>Description</h3>
              <div className='kakao_des'>
                <p className='kakao_p'>Firebase를 이용한 회원가입 및 로그인/로그아웃 기능</p>
                <p>메시지 전송 및 사진 전송 기능 구현</p>
                <p>프로필 사진 변경과 프로필 배경사진 변경과 상태메시지 변경 기능 구현</p>
                <p>Hook함수 사용(useEffect, useState) </p>
                <p>React-Router-Dom을 이용한 SPA 구성</p>
                <p>React Icon 이용한 아이콘 연결</p>
                <p>SCSS를 활용하여 CSS 스타일 적용</p>
                <p>Axios를 사용하여 API 데이터 호출 및 전달</p>
                <p>Props를 통해 컴포넌트에게 값 전달</p>
                <p>Swiper 라이브러리로 친구기능의 스와이프 구현</p>
              </div>
            </div>
            <div className='kakao_nav type3'>
              <span>Repository</span>
              <span>Page</span>
            </div>

        </div>

      </div> 
      </div>
  )
}

export default Kakao