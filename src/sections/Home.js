import React, { useState,useRef } from 'react'
import '../styles/Home.scss'
import Background from '../components/Background'



function Home() {

  
  return (
    <>
    <div className='home_main'>
    <Background />
    
      {/* con1 */}
      <div className='con1 paper image'>
        <div className='picture'></div>
        <div className='skill'>
          <p>HTML</p>
          <p>CSS</p>
          <p>JS</p>
        </div>
        <div className='box1 '>
          <h3>삼성전기</h3>
          <p>삼성전기 기업 웹사이트 제작</p>
          <div className='box2'>
          <span>Go</span>
          <span>Cached</span>  
          </div> 
        </div>  
      </div>
      {/* con2 */}
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
      {/* con3 */}
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
      {/* con4 */}
      <div className='con4 paper image'>
        <div className='picture'></div>
        <div className='skill'>
          <p>HTML</p>
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
      {/* con5 */}
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
      {/* con6 */}
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
      {/* con7 */}
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
    </>
  )
}

export default Home