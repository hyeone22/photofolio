import Background from 'components/Background';
import React from 'react';
import '../styles/Kosdaq.scss';

function Kosdaq() {
  return (
    <div className='kosdaq_main'>
      <Background />
      <div className='kosdaq_section'>
        <div className='kosdaq_movie'>
          <div className='kosdaq_phone'></div>
          <div className='kosdaq_mac'></div>
          <div className='kosdaq_desk'></div>
        </div>
        <div className='kosdaq_container'>
          
          <div className='kosdaq_search'>
          <p>Search</p>  
          </div>

          <div className='kosdaq_titles'>
            <p>Fuel your mind</p>
            <h2 className='center__text glitch' data-text="코스닥 글로벌">코스닥 글로벌 <b>↑기여도 (100%)</b></h2>
            <span>코스닥 글로벌 웹 사이트의 PC, Tablet, Mobile등 디바이스의 해상도에 맞는 반응형 웹 사이트 제작</span>  
          </div> 

          <div className='kosdaq_skill'>
            <div className='kosdaq_built'>
            <h2>Built</h2>
            <p>2023.00.00</p>
            <p>Responsive Web</p>
            </div>
            <div className='kosdaq_index'>
              <div className='kosdaq_html'>
                <span className='circle'>1</span>
                <p>HTML</p>
                <p>+100%(+100%)</p>    
              </div> 
              <div className='kosdaq_css'>
              <span className='circle'>1</span>
                <p>CSS</p>
                <p>+100%(+100%)</p>    
              </div>
              <div className='kosdaq_js'>
              <span className='circle'>1</span>
                <p>Javascript</p>
                <p>+100%(+100%)</p>    
              </div>   
            </div>   
          </div> 
          <div className='kosdaq_layout'>

          <div className='kosdaq_info'>
            <div className='kosdaq_title'>
              <span>
                <svg width="14" height="30" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <rect x="0.5" y="1" width="13" height="24" rx="1.5" fill="#4C4B4B" stroke="#E6E6E6"/>
                </svg>
              </span>
              <p>100%</p>
            </div>
            <div className='kosdaq_content'>
            <h3>Project Information</h3>
            <p>반응형 웹 사이트 제작</p>
            <p>PC/Tablet/Mobile 포함 총 5개의 반응형 페이지로 구성</p> 
            </div>
            <div className='kosdaq_footer'>
            <p>28 April 2023</p>
            <span>웹 접근성 검사 e</span>
            </div>
          </div>
          
          <div className='kosdaq_info2'>
            <div className='kosdaq_title'>
              <span className='k1'>
              <svg width="14" height="30" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <rect x="0.5" y="1" width="13" height="24" rx="1.5" fill="#4C4B4B" stroke="#E6E6E6"/>
                </svg>
              </span>
              <p className='p1'>100%</p>
            </div>
            <div className='kosdaq_content'>
            <h3>Project Technology</h3>
            <p>CSS animation 속성과 Hover 인터렉션 구현</p>
            <p>Javascript를 통해 Rolling Banner 및 
                Auto Banner 구현</p>
            <p>Scroll event의 활용으로 Main Page에 적용</p>
            <p>서브 페이지는 Form과Table 속성을 이용하여 제작</p> 
            </div>
            <div className='kosdaq_footer'>
            <p>28 April 2023</p>
            <span>More Page</span>
            </div>
          </div>
          </div>

        </div>
      </div>
   

    </div>
  )
}

export default Kosdaq