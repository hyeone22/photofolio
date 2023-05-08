import React from 'react';
import '../styles/Netflix.scss';
import Background from 'components/Background';
import Header from 'components/Header';

function Netflix() {
  return (
    <div className='netflix_main'>
      <Header />
      <div className='netflix_section'>
        <div className='netflix_content'>
          <div className='netflix_header'>
            <h2>NETFLIX APP</h2>
            <p>넷플릭스 앱 React 제작</p>
            <div className='netflix_skill'>
              <span>React</span>
              <span>Sass</span>
              <span>Javascript</span>
              <span>Firebase</span>
              <span>Styled-Component</span>
            </div>
          </div>
          <div className='netflix_desc'>
            <h3>Overview</h3>
            <p>React와 Firebase를 활용해 반응형 SPA 제작</p>
            <h3>Description</h3>
            <p>Firebase 이용한 회원가입 및 로그인/로그아웃 기능</p>
            <p>Axios를 사용한 API 데이터 호출 및 전달</p>
            <p>모달 창 밖을 클릭하면 닫히는 onClickOutside 함수 생성</p>
            <p>일부 컴포넌트 Styled-Component를 사용해 스타일 적용 </p>
            <p>Swiper 라이브러리로 영화배열의 스와이프 기능 구현</p>
          </div>
          <div className='netflix_nav'>
            <span>Play App</span>
            <span>More Github</span>
          </div>
        </div>
        <div className='netflix_movie'>

        </div>
      </div>
    </div>
  )
}

export default Netflix
