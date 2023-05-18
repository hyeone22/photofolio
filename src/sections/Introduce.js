import Header from 'components/Header';
import React, { useEffect } from 'react';
import '../styles/Introduce.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../images/face.png';
import img2 from '../images/face2.png';

function Introduce() {

  useEffect(() => {
    AOS.init();
  },[]);
  return (
    <div className='introduce_main' id='introduce_scroll'
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="300"
    data-aos-offset="0">
        <Header />
        
      <div className='introduce_face'>
        <div className='introduce_my'>
         <h2>#소통과 협업의 가치</h2>
         <h3>안녕하세요 저는 프론트엔드 개발자를 꿈꾸는 예비 개발자 김승현 입니다.</h3>  
        <p>- 노력과 소통이 업무에서 중요한 부분을 차지함을 알기에 노력하겠습니다.</p>
        <p>- 협업의 가치를 배워가는 개발자가 되겠습니다.</p>
        </div>
        <img src={img} className='face_1' alt='' /> 
        <img src={img2} className='face_2' alt='' style={{display:'none'}} /> 
      </div>
      <div className='introduce_text'>
        <div className='introduce_header'>
          <div className='introduce_box'>
          </div>
          <div className='introduce_self'>
          <p>김승현</p>
          <p>010-5635-0561</p>
          <p>wmfrjdnsakdma12@naver.com</p>  
          </div>
          
          <span></span>   
        </div>
        <div className='introduce_content'>
          <div class="slider">
            <div class="slide-track">
              <div className='slide'>
              <svg width="100" height="100" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_20_1657)">
                <rect x="40" y="36" width="180" height="180" rx="32" fill="white"/>
                <rect x="40.5" y="36.5" width="179" height="179" rx="31.5" stroke="white"/>
                </g>
                <path d="M93.9281 166.034L85.9067 76H174.093L166.072 165.985L129.927 176" fill="#E44D26"/>
                <path d="M130 168.344V83.3901H166.047L159.168 160.201" fill="#F16529"/>
                <path d="M102.29 94.4009H130V105.436H114.395L115.416 116.739H130V127.75H105.304L102.29 94.4009ZM105.79 133.292H116.874L117.652 142.116L130 145.422V156.943L107.346 150.624" fill="#EBEBEB"/>
                <path d="M157.613 94.4009H129.951V105.436H156.592L157.613 94.4009ZM155.595 116.739H129.951V127.775H143.563L142.275 142.116L129.951 145.422V156.895L152.557 150.624" fill="white"/>
                <defs>
                <filter id="filter0_d_20_1657" x="0" y="0" width="260" height="260" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="20"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_1657"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_1657" result="shape"/>
                </filter>
                </defs>
              </svg>

              </div>
              <div className='slide'>
              <svg width="100" height="100" viewBox="0 0 261 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_20_1679)">
                <rect x="40.724" y="36" width="180" height="180" rx="32" fill="white"/>
                <rect x="41.224" y="36.5" width="179" height="179" rx="31.5" stroke="white"/>
                </g>
                <path d="M175.192 76L167.159 165.99L131.051 176L95.0415 166.004L87.017 76H175.192Z" fill="#264DE4"/>
                <path d="M160.282 160.259L167.147 83.3591H131.104V168.348L160.282 160.259Z" fill="#2965F1"/>
                <path d="M105.413 116.74L106.402 127.779H131.105V116.74H105.413Z" fill="#EBEBEB"/>
                <path d="M131.105 94.3977H131.066H103.425L104.428 105.436H131.105V94.3977Z" fill="#EBEBEB"/>
                <path d="M131.104 156.893V145.408L131.056 145.421L118.762 142.102L117.976 133.298H112.003H106.895L108.442 150.63L131.054 156.907L131.104 156.893Z" fill="#EBEBEB"/>
                <path d="M144.659 127.779L143.378 142.095L131.066 145.418V156.902L153.696 150.63L153.862 148.765L156.456 119.704L156.725 116.74L158.718 94.3977H131.066V105.436H146.621L145.616 116.74H131.066V127.779H144.659Z" fill="white"/>
                <defs>
                <filter id="filter0_d_20_1679" x="0.723999" y="0" width="260" height="260" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="20"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_1679"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_1679" result="shape"/>
                </filter>
                </defs>
                </svg>

              </div>
              <div className='slide'>
                <svg width="100" height="100" viewBox="0 0 261 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_20_1661)">
                  <rect x="40.724" y="36" width="180" height="180" rx="32" fill="white"/>
                  <rect x="41.224" y="36.5" width="179" height="179" rx="31.5" stroke="white"/>
                  </g>
                  <path d="M180.552 75.5942H80.5522V175.594H180.552V75.5942Z" fill="#F7DF1E"/>
                  <path d="M147.727 153.72C149.741 157.009 152.362 159.426 156.997 159.426C160.89 159.426 163.378 157.48 163.378 154.791C163.378 151.569 160.822 150.428 156.536 148.553L154.187 147.545C147.406 144.656 142.901 141.037 142.901 133.386C142.901 126.339 148.271 120.974 156.663 120.974C162.638 120.974 166.933 123.053 170.028 128.497L162.711 133.196C161.1 130.307 159.362 129.169 156.663 129.169C153.911 129.169 152.167 130.915 152.167 133.196C152.167 136.015 153.913 137.156 157.944 138.902L160.293 139.909C168.278 143.332 172.786 146.823 172.786 154.67C172.786 163.131 166.14 167.766 157.214 167.766C148.487 167.766 142.849 163.607 140.09 158.156L147.727 153.72ZM114.532 154.534C116.008 157.153 117.351 159.367 120.579 159.367C123.667 159.367 125.614 158.159 125.614 153.463V121.51H135.011V153.59C135.011 163.32 129.306 167.748 120.979 167.748C113.455 167.748 109.098 163.855 106.882 159.165L114.532 154.534Z" fill="black"/>
                  <defs>
                  <filter id="filter0_d_20_1661" x="0.723999" y="0" width="260" height="260" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="20"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_1661"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_1661" result="shape"/>
                  </filter>
                  </defs>
                </svg>
              </div>
              <div className='slide'>
                <svg width="100" height="100" viewBox="0 0 261 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_20_1678)">
                  <rect x="40.724" y="36" width="180" height="180" rx="32" fill="white"/>
                  <rect x="41.224" y="36.5" width="179" height="179" rx="31.5" stroke="white"/>
                  </g>
                  <path d="M81 76.636H181V174.553H81V76.636Z" fill="url(#paint0_linear_20_1678)"/>
                  <path d="M117.48 126.484H126.343L121.912 109.296L117.48 126.484ZM88.5656 84.303V166.934H173.561V84.303H88.5656ZM131.208 145.329L127.965 134.159H115.966L112.723 145.329H104.507L116.074 105.837V101.513H127.1L140.288 145.329H131.208V145.329ZM153.044 145.329H144.18V111.999H153.044V145.329ZM148.666 107.999C146.129 107.999 144.071 105.966 144.071 103.459C144.071 100.951 146.128 98.9186 148.666 98.9186C151.204 98.9186 153.26 100.951 153.26 103.459C153.26 105.966 151.204 107.999 148.666 107.999Z" fill="url(#paint1_linear_20_1678)"/>
                  <defs>
                  <filter id="filter0_d_20_1678" x="0.723999" y="0" width="260" height="260" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="20"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_1678"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_1678" result="shape"/>
                  </filter>
                  <linearGradient id="paint0_linear_20_1678" x1="180.479" y1="76.115" x2="82.476" y2="174.118" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFAA2A"/>
                  <stop offset="1" stop-color="#FFC06C"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_20_1678" x1="131.063" y1="84.1642" x2="131.063" y2="166.517" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#251200"/>
                  <stop offset="1"/>
                  </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className='slide'>
                <svg width="100" height="100" viewBox="0 0 261 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_20_1665)">
                  <rect x="40.724" y="36" width="180" height="180" rx="32" fill="white"/>
                  <rect x="41.224" y="36.5" width="179" height="179" rx="31.5" stroke="white"/>
                  </g>
                  <path d="M80.2761 76.4277H180.276V174.761H80.2761V76.4277Z" fill="url(#paint0_linear_20_1665)"/>
                  <path d="M88.2291 84.2476H172.324V166.942H88.2291V84.2476Z" fill="url(#paint1_linear_20_1665)"/>
                  <path d="M104.442 104.142C104.442 104.142 110.765 103.976 115.969 103.976C121.229 103.976 124.979 105.213 127.496 107.388C129.903 109.442 131.525 112.945 131.525 116.932C131.525 120.92 130.294 124.182 128.055 126.476C125.146 129.437 121.755 131.189 115.969 131.431C114.371 131.498 112.892 131.514 112.892 131.514V144.476H104.442L104.442 104.142V104.142ZM112.891 124.333C113.809 124.423 114.385 124.38 115.745 124.363C120.278 124.309 123.075 121.553 123.075 117.384C123.075 113.64 120.769 110.565 116.417 110.406C114.683 110.342 112.891 110.406 112.891 110.406V124.333V124.333Z" fill="url(#paint2_linear_20_1665)"/>
                  <path d="M134.75 135.446C136.453 136.491 140.472 138.056 143.211 138.056C146.01 138.056 147.165 137.07 147.165 135.532C147.165 133.992 146.253 132.375 142.784 131.206C136.637 129.113 134.264 126.607 134.325 123.101C134.325 117.437 139.071 113.19 146.435 113.19C149.903 113.19 152.674 114.324 154.498 115.247V122.044C153.158 121.305 149.295 119.654 146.739 119.654C144.486 119.654 143.209 120.578 143.209 122.115C143.209 123.531 144.366 124.27 148.017 125.563C153.676 127.532 156.049 130.424 156.109 134.856C156.109 140.458 151.791 144.912 143.209 144.642C140.264 144.549 137.001 143.385 134.749 142.155L134.75 135.446V135.446Z" fill="url(#paint3_linear_20_1665)"/>
                  <defs>
                  <filter id="filter0_d_20_1665" x="0.723999" y="0" width="260" height="260" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="20"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_1665"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_1665" result="shape"/>
                  </filter>
                  <linearGradient id="paint0_linear_20_1665" x1="104.578" y1="71.2924" x2="142.911" y2="152.293" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#A0CBFF"/>
                  <stop offset="0.394" stop-color="#A0CBFE"/>
                  <stop offset="0.583" stop-color="#8EC2FC"/>
                  <stop offset="0.784" stop-color="#83BCFB"/>
                  <stop offset="1" stop-color="#7FBAFB"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_20_1665" x1="118.184" y1="85.4129" x2="139.851" y2="157.414" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#090058"/>
                  <stop offset="1" stop-color="#070033"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_20_1665" x1="92.6551" y1="75.6024" x2="130.988" y2="156.602" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#A0CBFF"/>
                  <stop offset="0.394" stop-color="#A0CBFE"/>
                  <stop offset="0.583" stop-color="#8EC2FC"/>
                  <stop offset="0.784" stop-color="#83BCFB"/>
                  <stop offset="1" stop-color="#7FBAFB"/>
                  </linearGradient>
                  <linearGradient id="paint3_linear_20_1665" x1="114.49" y1="65.0261" x2="152.975" y2="146.346" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#A0CBFF"/>
                  <stop offset="0.394" stop-color="#A0CBFE"/>
                  <stop offset="0.583" stop-color="#8EC2FC"/>
                  <stop offset="0.784" stop-color="#83BCFB"/>
                  <stop offset="1" stop-color="#7FBAFB"/>
                  </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className='slide'>
                <svg width="100" height="100" viewBox="0 0 261 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_20_1659)">
                  <rect x="40.724" y="36" width="180" height="180" rx="32" fill="white"/>
                  <rect x="41.224" y="36.5" width="179" height="179" rx="31.5" stroke="white"/>
                  </g>
                  <path d="M114.162 176C123.362 176 130.828 168.533 130.828 159.333V142.667H114.162C104.962 142.667 97.4951 150.133 97.4951 159.333C97.4951 168.533 104.962 176 114.162 176Z" fill="#0ACF83"/>
                  <path d="M97.4951 126C97.4951 116.8 104.962 109.333 114.162 109.333H130.828V142.667H114.162C104.962 142.667 97.4951 135.2 97.4951 126Z" fill="#A259FF"/>
                  <path d="M97.4951 92.6667C97.4951 83.4667 104.962 76 114.162 76H130.828V109.333H114.162C104.962 109.333 97.4951 101.867 97.4951 92.6667Z" fill="#F24E1E"/>
                  <path d="M130.828 76H147.495C156.695 76 164.162 83.4667 164.162 92.6667C164.162 101.867 156.695 109.333 147.495 109.333H130.828V76Z" fill="#FF7262"/>
                  <path d="M164.162 126C164.162 135.2 156.695 142.667 147.495 142.667C138.295 142.667 130.828 135.2 130.828 126C130.828 116.8 138.295 109.333 147.495 109.333C156.695 109.333 164.162 116.8 164.162 126Z" fill="#1ABCFE"/>
                  <defs>
                  <filter id="filter0_d_20_1659" x="0.723999" y="0" width="260" height="260" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="20"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_1659"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_1659" result="shape"/>
                  </filter>
                  </defs>
                </svg>
              </div>
              <div className='slide'>
                <svg width="100" height="100" viewBox="0 0 261 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_20_1672)">
                  <rect x="40.724" y="36" width="180" height="180" rx="32" fill="white"/>
                  <rect x="41.224" y="36.5" width="179" height="179" rx="31.5" stroke="white"/>
                  </g>
                  <path d="M131.105 134.411C135.974 134.411 139.921 130.463 139.921 125.594C139.921 120.725 135.974 116.778 131.105 116.778C126.235 116.778 122.288 120.725 122.288 125.594C122.288 130.463 126.235 134.411 131.105 134.411Z" fill="#61DAFB"/>
                  <path d="M131.104 143.657C157.231 143.657 178.411 135.57 178.411 125.594C178.411 115.619 157.231 107.532 131.104 107.532C104.978 107.532 83.7979 115.619 83.7979 125.594C83.7979 135.57 104.978 143.657 131.104 143.657Z" stroke="#61DAFB" stroke-width="5"/>
                  <path d="M115.462 134.625C128.525 157.252 146.119 171.551 154.758 166.563C163.397 161.575 159.81 139.189 146.747 116.563C133.684 93.9366 116.09 79.6377 107.451 84.6255C98.812 89.6133 102.398 111.999 115.462 134.625Z" stroke="#61DAFB" stroke-width="5"/>
                  <path d="M115.462 116.563C102.399 139.189 98.812 161.575 107.451 166.563C116.09 171.551 133.684 157.252 146.747 134.625C159.81 111.999 163.397 89.6133 154.758 84.6255C146.119 79.6376 128.525 93.9365 115.462 116.563Z" stroke="#61DAFB" stroke-width="5"/>
                  <defs>
                  <filter id="filter0_d_20_1672" x="0.723999" y="0" width="260" height="260" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="20"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_1672"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_1672" result="shape"/>
                  </filter>
                  </defs>
                </svg>

              </div>
              <div className='slide'>
              <svg width="100" height="100" viewBox="0 0 261 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_20_1668)">
                <rect x="40.724" y="36" width="180" height="180" rx="32" fill="white"/>
                <rect x="41.224" y="36.5" width="179" height="179" rx="31.5" stroke="white"/>
                </g>
                <path d="M167.212 131.911C163.724 131.929 160.692 132.77 158.153 134.012C157.221 132.167 156.29 130.523 156.125 129.317C155.943 127.911 155.723 127.053 155.943 125.372C156.162 123.692 157.148 121.299 157.13 121.116C157.112 120.934 156.911 120.075 154.901 120.057C152.892 120.039 151.157 120.441 150.956 120.97C150.755 121.5 150.372 122.705 150.116 123.947C149.769 125.774 146.098 132.295 143.997 135.71C143.321 134.377 142.737 133.208 142.609 132.276C142.426 130.87 142.207 130.012 142.426 128.331C142.645 126.651 143.632 124.258 143.613 124.075C143.595 123.893 143.394 123.034 141.385 123.016C139.376 122.998 137.641 123.4 137.44 123.929C137.239 124.459 137.02 125.701 136.6 126.906C136.179 128.112 131.303 138.998 130.024 141.811C129.366 143.254 128.8 144.405 128.398 145.19C128.398 145.19 128.38 145.245 128.325 145.336C127.978 146.012 127.777 146.377 127.777 146.377C127.777 146.377 127.777 146.377 127.777 146.396C127.503 146.889 127.211 147.345 127.065 147.345C126.955 147.345 126.754 146.03 127.102 144.24C127.832 140.459 129.567 134.578 129.549 134.377C129.549 134.267 129.878 133.245 128.417 132.715C126.992 132.185 126.481 133.062 126.353 133.062C126.225 133.062 126.133 133.372 126.133 133.372C126.133 133.372 127.723 126.76 123.101 126.76C120.215 126.76 116.234 129.92 114.261 132.77C113.019 133.445 110.37 134.888 107.539 136.441C106.462 137.044 105.347 137.647 104.306 138.213C104.233 138.14 104.16 138.048 104.087 137.975C98.4979 132.003 88.1597 127.783 88.5981 119.765C88.7625 116.842 89.7671 109.171 108.453 99.8554C123.832 92.2753 136.07 94.3758 138.189 99.0335C141.221 105.682 131.631 118.029 115.74 119.819C109.676 120.495 106.498 118.157 105.694 117.281C104.854 116.367 104.726 116.313 104.416 116.495C103.904 116.769 104.233 117.591 104.416 118.066C104.891 119.308 106.845 121.5 110.151 122.578C113.074 123.527 120.179 124.057 128.782 120.733C138.408 117.007 145.933 106.65 143.723 97.9741C141.513 89.1702 126.901 86.266 113.074 91.1794C104.854 94.1018 95.9408 98.7047 89.5296 104.696C81.913 111.819 80.7074 118.011 81.2006 120.605C82.9724 129.811 95.6668 135.802 100.745 140.24C100.489 140.386 100.251 140.514 100.05 140.624C97.5116 141.884 87.8309 146.944 85.4199 152.295C82.6801 158.359 85.8583 162.707 87.9588 163.291C94.4795 165.099 101.183 161.848 104.781 156.478C108.38 151.108 107.941 144.131 106.279 140.934C106.261 140.898 106.242 140.861 106.206 140.825C106.863 140.441 107.539 140.039 108.197 139.656C109.494 138.889 110.772 138.176 111.868 137.592C111.247 139.29 110.791 141.318 110.571 144.24C110.297 147.674 111.704 152.131 113.549 153.884C114.371 154.652 115.339 154.67 115.96 154.67C118.115 154.67 119.083 152.88 120.161 150.761C121.476 148.167 122.663 145.154 122.663 145.154C122.663 145.154 121.184 153.3 125.202 153.3C126.663 153.3 128.143 151.4 128.8 150.432C128.8 150.451 128.8 150.451 128.8 150.451C128.8 150.451 128.837 150.396 128.91 150.268C129.056 150.03 129.147 149.884 129.147 149.884C129.147 149.884 129.147 149.866 129.147 149.848C129.732 148.825 131.047 146.505 133.001 142.651C135.522 137.683 137.951 131.473 137.951 131.473C137.951 131.473 138.17 132.989 138.919 135.509C139.358 136.989 140.271 138.615 141.001 140.185C140.417 141.007 140.052 141.464 140.052 141.464C140.052 141.464 140.052 141.464 140.07 141.482C139.595 142.103 139.084 142.779 138.517 143.437C136.526 145.811 134.152 148.533 133.823 149.318C133.44 150.25 133.531 150.925 134.262 151.473C134.791 151.875 135.741 151.93 136.709 151.875C138.499 151.747 139.759 151.309 140.38 151.035C141.349 150.688 142.481 150.158 143.54 149.373C145.495 147.93 146.682 145.866 146.572 143.144C146.518 141.647 146.024 140.149 145.422 138.742C145.604 138.487 145.769 138.231 145.951 137.975C149.038 133.464 151.431 128.514 151.431 128.514C151.431 128.514 151.65 130.03 152.399 132.55C152.764 133.829 153.513 135.217 154.171 136.569C151.267 138.925 149.477 141.665 148.837 143.455C147.687 146.779 148.582 148.277 150.28 148.624C151.047 148.788 152.143 148.423 152.947 148.076C153.97 147.747 155.175 147.181 156.326 146.341C158.281 144.898 160.162 142.889 160.052 140.167C159.997 138.925 159.669 137.701 159.212 136.514C161.678 135.491 164.856 134.925 168.911 135.4C177.605 136.423 179.322 141.848 178.993 144.131C178.665 146.414 176.838 147.656 176.235 148.04C175.633 148.423 175.432 148.551 175.487 148.825C175.56 149.227 175.852 149.208 176.363 149.135C177.076 149.008 180.93 147.291 181.094 143.09C181.368 137.72 176.254 131.856 167.212 131.911ZM100.142 154.524C97.2559 157.665 93.2375 158.853 91.5023 157.848C89.6392 156.77 90.3698 152.131 93.9133 148.807C96.0686 146.779 98.845 144.898 100.69 143.747C101.11 143.491 101.731 143.126 102.48 142.669C102.608 142.596 102.681 142.56 102.681 142.56C102.827 142.469 102.973 142.377 103.119 142.286C104.416 147.035 103.174 151.218 100.142 154.524ZM121.147 140.24C120.142 142.688 118.042 148.953 116.763 148.606C115.667 148.313 114.992 143.564 116.544 138.87C117.33 136.514 118.992 133.701 119.96 132.605C121.531 130.852 123.266 130.267 123.686 130.98C124.216 131.911 121.768 138.706 121.147 140.24ZM138.481 148.533C138.061 148.752 137.659 148.898 137.476 148.788C137.348 148.715 137.659 148.423 137.659 148.423C137.659 148.423 139.833 146.085 140.691 145.026C141.184 144.405 141.769 143.674 142.39 142.852C142.39 142.925 142.39 143.017 142.39 143.09C142.39 145.884 139.686 147.766 138.481 148.533ZM151.851 145.482C151.541 145.263 151.595 144.533 152.637 142.249C153.038 141.354 153.988 139.857 155.614 138.414C155.796 138.998 155.924 139.564 155.906 140.094C155.888 143.619 153.367 144.934 151.851 145.482Z" fill="#CD6799"/>
                <defs>
                <filter id="filter0_d_20_1668" x="0.723999" y="0" width="260" height="260" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="20"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20_1668"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20_1668" result="shape"/>
                </filter>
                </defs>
              </svg>

              </div>
              <div className='slide'>
                <svg width="100" height="100" viewBox="0 0 261 261" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_25_400)">
                  <rect x="40.9329" y="36.2969" width="180" height="180" rx="32" fill="white"/>
                  <rect x="41.4329" y="36.7969" width="179" height="179" rx="31.5" stroke="white"/>
                  </g>
                  <path d="M142.343 112.011L132.343 121.322L123.059 102.59L127.855 91.8186C129.067 89.6701 131.049 89.6417 132.262 91.8186L142.343 112.011Z" fill="#FFA000"/>
                  <path d="M132.347 121.318L94.9379 156.113L123.063 102.59L132.347 121.318Z" fill="#F57F17"/>
                  <path d="M153.309 97.7697C155.101 96.063 156.945 96.6387 157.412 99.0629L167.137 155.642L134.88 175.007C133.749 175.64 130.749 175.887 130.749 175.887C130.749 175.887 128.021 175.555 126.975 174.979L94.9379 156.113L153.309 97.7697Z" fill="#FFCA28"/>
                  <path d="M123.063 102.59L94.9379 156.112L107.472 77.8816C107.943 75.4574 109.317 75.2101 110.557 77.3586L123.063 102.59Z" fill="#FFA000"/>
                  <defs>
                  <filter id="filter0_d_25_400" x="0.932861" y="0.296875" width="260" height="260" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="20"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_400"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_400" result="shape"/>
                  </filter>
                  </defs>
                </svg>

              </div>
              <div className='slide'>
               <svg width="100" height="100" viewBox="0 0 261 261" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_22_662)">
                <rect x="40.724" y="36.5939" width="180" height="180" rx="32" fill="white"/>
                <rect x="41.224" y="37.0939" width="179" height="179" rx="31.5" stroke="white"/>
                </g>
                <path d="M130.276 77.4224C102.666 77.4224 80.2761 99.8078 80.2761 127.423C80.2761 149.514 94.6027 168.256 114.469 174.868C116.968 175.331 117.886 173.783 117.886 172.463C117.886 171.27 117.839 167.331 117.818 163.153C103.907 166.178 100.972 157.254 100.972 157.254C98.6978 151.475 95.4207 149.938 95.4207 149.938C90.8844 146.835 95.7626 146.898 95.7626 146.898C100.784 147.251 103.427 152.051 103.427 152.051C107.887 159.695 115.124 157.485 117.978 156.208C118.426 152.976 119.722 150.77 121.152 149.522C110.046 148.257 98.3716 143.97 98.3716 124.811C98.3716 119.353 100.325 114.892 103.524 111.391C103.004 110.131 101.293 105.046 104.008 98.1585C104.008 98.1585 108.207 96.8146 117.761 103.284C121.75 102.176 126.027 101.62 130.276 101.602C134.526 101.62 138.806 102.176 142.802 103.284C152.346 96.8146 156.539 98.1585 156.539 98.1585C159.26 105.046 157.548 110.131 157.029 111.391C160.234 114.892 162.174 119.352 162.174 124.811C162.174 144.015 150.478 148.244 139.344 149.482C141.137 151.033 142.735 154.077 142.735 158.741C142.735 165.431 142.677 170.816 142.677 172.463C142.677 173.793 143.577 175.352 146.112 174.861C165.968 168.242 180.276 149.507 180.276 127.423C180.276 99.8078 157.89 77.4224 130.276 77.4224Z" fill="#161614"/>
                <path d="M99.0028 148.649C98.893 148.897 98.5016 148.972 98.1459 148.801C97.7832 148.638 97.5793 148.299 97.6969 148.05C97.8048 147.794 98.1961 147.723 98.5581 147.895C98.9216 148.058 99.1286 148.399 99.0028 148.649ZM101.462 150.843C101.224 151.064 100.758 150.962 100.441 150.612C100.114 150.264 100.053 149.798 100.295 149.573C100.541 149.352 100.993 149.456 101.321 149.805C101.648 150.157 101.711 150.62 101.462 150.844L101.462 150.843ZM103.15 153.651C102.843 153.864 102.342 153.664 102.032 153.22C101.726 152.775 101.726 152.242 102.039 152.028C102.35 151.815 102.843 152.007 103.157 152.448C103.463 152.9 103.463 153.433 103.149 153.651L103.15 153.651ZM106.003 156.903C105.729 157.205 105.145 157.124 104.718 156.712C104.281 156.309 104.159 155.736 104.434 155.434C104.711 155.131 105.298 155.217 105.729 155.626C106.163 156.028 106.295 156.604 106.003 156.903H106.003ZM109.691 158.001C109.57 158.392 109.008 158.571 108.442 158.404C107.876 158.233 107.506 157.774 107.62 157.378C107.738 156.984 108.302 156.799 108.873 156.977C109.438 157.147 109.809 157.603 109.691 158.001H109.691ZM113.888 158.467C113.902 158.879 113.422 159.221 112.827 159.229C112.229 159.241 111.746 158.908 111.74 158.502C111.74 158.086 112.209 157.747 112.807 157.737C113.401 157.725 113.888 158.057 113.888 158.467ZM118.011 158.309C118.083 158.711 117.669 159.124 117.079 159.234C116.499 159.34 115.961 159.092 115.887 158.693C115.815 158.28 116.236 157.867 116.816 157.76C117.407 157.658 117.936 157.9 118.011 158.309Z" fill="#161614"/>
                <defs>
                <filter id="filter0_d_22_662" x="0.723999" y="0.593872" width="260" height="260" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="20"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0367917 0 0 0 0 0.0348958 0 0 0 0 0.0484375 0 0 0 0.1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_662"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_662" result="shape"/>
                </filter>
                </defs>
              </svg>

              </div>
            </div>
          </div>       
        </div> 

      </div>  
    </div>
  )
}

export default Introduce
