import React, { useEffect } from 'react'
import '../styles/Call.scss';
import Background from 'components/Background';
import '../styles/Menu.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Call() {

  useEffect(() => {
    AOS.init();
  },[]);

  const url ="https://hyeone22.github.io/project_se"

  return (
    <div className='call_main' id='ofSection'>
      
    <div class="container">
      <Background/>
    <h2  data-aos="fade-right">Home</h2>
  <aside class="carousel">
    <div class="carousel__wrapper">
      <div class="item" id="slide-0">
      <div className='con1 paper image'>
        <div className='picture'></div>
        <div className='skill'>
          <p>HTML</p>
          <p>CSS</p>
          <p>JS</p>
        </div>
        <div className='box1'>
          <h3>삼성전기</h3>
          <p>삼성전기 기업 웹사이트 제작</p>
          <div className='box2'>
          <span onClick={()=>{window.open(url)}}>Go</span>
          <span>Cached</span>  
          </div> 
        </div>  
      </div>
      </div>
      <div class="item" id="slide-1">
      <div className='con2 paper image'>
        <div className='picture'></div>
        <div className='skill'>
          <p>HTML</p>
          <p>CSS/SASS</p>
          <p>React</p>
        </div>
        <div className='box1'>
          <h3>KAKAOTALK APP</h3>
          <p>카카오톡 웹/앱 React 제작</p>
          <div className='box2'>
          <span>Go</span>
          <span>Cached</span>  
          </div> 
        </div>  
      </div>
      </div>
      <div class="item" id="slide-2">
      <div className='con3 paper image'>
        <div className='picture'></div>
        <div className='skill'>
          <p>HTML</p>
          <p>CSS</p>
          <p>Js</p>
        </div>
        <div className='box1'>
          <h3>CJ ONE</h3>
          <p>CJ ONE 반응형 웹사이트 제작</p>
          <div className='box2'>
          <span>Go</span>
          <span>Cached</span>  
          </div> 
        </div>  
      </div>
      </div>
      <div class="item" id="slide-3">
        <div className='con4 paper image'>
        <div className='picture'></div>
        <div className='skill'>
          <p>CSS</p>
          <p>JSX</p>
          <p>React</p>
          <p>Styled Component</p>
        </div>
        <div className='box1'>
          <h3>NETFLIX APP</h3>
          <p>넷플릭스 웹/앱 React 제작</p>
          <div className='box2'>
          <span>Go</span>
          <span>Cached</span>  
          </div> 
        </div>  
        </div>
        </div>
      <div class="item" id="slide-4">
        <div className='con5 paper image'>
          <div className='picture'></div>
          <div className='skill'>
            <p>HTML</p>
            <p>CSS</p>
            <p>Js</p>
          </div>
          <div className='box1'>
            <h3>코스닥 글로벌 세그먼트</h3>
            <p>코스닥 글로벌 반응형 웹사이트 제작</p>
            <div className='box2'>
            <span>Go</span>
            <span>Cached</span>  
            </div> 
          </div>  
        </div>
        </div>
      <div class="item" id="slide-5">
        <div className='con6 paper image'>
          <div className='picture'></div>
          <div className='skill'>
            <p>HTML</p>
            <p>CSS</p>
          </div>
          <div className='box1'>
            <h3>Facebook Emoji</h3>
            <p>설명</p>
            <div className='box2'>
            <span>Go</span>
            <span>Cached</span>  
            </div> 
          </div>  
        </div>
      </div>
      <div class="item" id="slide-6">
      <div className='con7 paper image'>
        <div className='picture'></div>
        <div className='skill'>
          <p>HTML</p>
          <p>CSS</p>
        </div>
        <div className='box1'>
          <h3>Pure CSS</h3>
          <p>설명</p>
          <div className='box2'>
          <span>Go</span>
          <span>Cached</span>  
          </div> 
        </div>  
      </div>
      </div>
    </div>
  </aside>

</div>
    </div>
  )
}

export default Call
