import React from 'react'
import '../styles/Setting.scss'
import Header from 'components/Header'
import { Link } from 'react-router-dom'

function Settings() {
  return (
    <div className='setting_main' id='offfSection'>
    <Header />
      <div className='setting_header'>
      <svg width="200" height="200" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2_735)">
        <path d="M26 -1.55368e-06H94C97.4163 -0.00682694 100.8 0.661024 103.958 1.96523C107.115 3.26943 109.984 5.18432 112.4 7.6C114.816 10.0157 116.731 12.8846 118.035 16.0422C119.339 19.1997 120.007 22.5837 120 26V94C120.007 97.4163 119.339 100.8 118.035 103.958C116.731 107.115 114.816 109.984 112.4 112.4C109.984 114.816 107.115 116.731 103.958 118.035C100.8 119.339 97.4163 120.007 94 120H26C22.5837 120.007 19.1997 119.339 16.0422 118.035C12.8846 116.731 10.0157 114.816 7.59999 112.4C5.18431 109.984 3.26943 107.115 1.96522 103.958C0.661017 100.8 -0.00683457 97.4163 -9.18307e-06 94V26C-0.00683854 22.5837 0.66101 19.1997 1.96521 16.0422C3.26942 12.8846 5.1843 10.0157 7.59999 7.59999C10.0157 5.18431 12.8846 3.26942 16.0421 1.96522C19.1997 0.661018 22.5837 -0.00683091 26 -1.55368e-06Z" fill="url(#paint0_linear_2_735)"/>
        <path d="M60 112C88.7188 112 112 88.7188 112 60C112 31.2812 88.7188 8 60 8C31.2812 8 8 31.2812 8 60C8 88.7188 31.2812 112 60 112Z" fill="#2E2E2F"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M59 32H60.7L61.5 28H62.2L62.5 32.1C63.0053 32.1174 63.5078 32.1844 64 32.3L65.2 28.4L65.9 28.5L65.7 32.6C66.2114 32.6863 66.7135 32.8203 67.2 33L68.8 29.3L69.4 29.5L68.7 33.5C69.2 33.7 69.7 33.8 70.2 34L72.2 30.5L72.8 30.8L71.7 34.7C72.2 34.9 72.6 35.2 73.1 35.4L75.5 32.1L76.1 32.4L74.5 36.2C74.9 36.5 75.4 36.8 75.8 37.1L78.6 34.1L79.1 34.5L77.1 38.1C77.5 38.4 77.9 38.8 78.3 39.1L81.4 36.5L81.9 37L79.5 40.3L80.6 41.4L84 39.2L84.4 39.7L81.7 42.7L82.6 43.9L86.2 42.1L86.6 42.7L83.5 45.4C83.8 45.8 84 46.3 84.3 46.7L88.1 45.3L88.4 45.9L85 48.2L85.6 49.7L89.5 48.8L89.7 49.4L86.2 51.2C86.4 51.7 86.5 52.2 86.7 52.7L90.7 52.2L90.9 52.9L87.1 54.3C87.2 54.8 87.3 55.3 87.4 55.9H91.5L91.6 56.6L87.7 57.6C87.7 58.1 87.8 58.7 87.8 59.2L91.8 59.7V60.4L87.8 60.9C87.8165 61.4021 87.783 61.9046 87.7 62.4L91.6 63.3L91.5 64L87.5 64.1L87.2 65.6L91 67L90.9 67.6L86.9 67.2C86.8 67.7 86.6 68.2 86.5 68.7L90.1 70.5L89.9 71.1L85.9 70.2L85.3 71.7L88.7 74L88.4 74.6L84.5 73.3C84.3 73.7 84 74.2 83.8 74.6L86.9 77.2L86.5 77.8L82.9 76C82.5985 76.4569 82.2643 76.8914 81.9 77.3L84.7 80.2L84.3 80.7L80.9 78.5C80.585 78.915 80.215 79.285 79.8 79.6L82.2 82.9L81.7 83.4L78.5 80.8C78.1252 81.1624 77.7241 81.4967 77.3 81.8L79.3 85.3L78.8 85.7L76 82.8C75.6 83.1 75.1 83.4 74.7 83.7L76.3 87.5L75.7 87.8L73.2 84.6C72.7542 84.8729 72.2858 85.1071 71.8 85.3L73 89.2L72.4 89.5L70.3 86C69.816 86.2113 69.314 86.3787 68.8 86.5L69.5 90.5L68.9 90.7L67.2 87C66.7 87.1 66.2 87.3 65.7 87.4L65.9 91.5L65.2 91.6L64 87.7C63.5 87.8 63 87.8 62.4 87.9L62.2 92H61.5L60.7 88H59L58.3 92H57.9L57.6 87.9C57.0621 87.8766 56.5271 87.8097 56 87.7L54.8 91.6L54.1 91.5L54.3 87.4C53.7886 87.3136 53.2865 87.1797 52.8 87L51.2 90.7L50.6 90.5L51.3 86.5C50.8 86.3 50.3 86.2 49.8 86L47.7 89.5L47.1 89.2L48.2 85.3C47.7 85.1 47.3 84.8 46.8 84.6L44.4 87.9L43.8 87.6L45.4 83.8C45 83.5 44.5 83.2 44.1 82.9L41.3 85.9L40.8 85.5L42.8 81.9C42.4 81.6 42 81.2 41.6 80.9L38.5 83.5L38 83L40.4 79.7C40.0588 79.3087 39.6913 78.9412 39.3 78.6L35.9 80.9L35.5 80.4L38.3 77.4C37.9427 76.9856 37.6089 76.5516 37.3 76.1L33.7 77.9L33.3 77.3L36.4 74.7C36.1 74.3 35.9 73.8 35.6 73.3L31.8 74.7L31.5 74.1L34.9 71.8L34.3 70.3L30.4 71.2L30.2 70.6L33.8 68.7C33.6 68.2 33.5 67.7 33.3 67.2L29.3 67.7L29.1 67L32.9 65.6C32.8 65.1 32.7 64.6 32.6 64H28.6L28.5 63.3L32.4 62.3C32.4 61.8 32.3 61.3 32.3 60.7L28.3 60.2V59.5L32.3 59C32.2835 58.4647 32.3169 57.9291 32.4 57.4L28.5 56.5L28.6 55.8L32.6 55.7L32.9 54.2L29.1 52.8L29.3 52.2L33.3 52.6C33.4 52.1 33.6 51.6 33.7 51.1L30.1 49.3L30.3 48.7L34.2 49.6L34.8 48.1L31.4 45.9L31.7 45.3L35.5 46.6C35.8 46.1 36 45.7 36.3 45.2L33.2 42.6L33.6 42L37.2 43.8C37.5 43.4 37.8 42.9 38.1 42.5L35.3 39.5L35.7 39L39.1 41.2C39.439 40.7755 39.8066 40.3746 40.2 40L37.8 36.7L38.3 36.2L41.4 38.8C41.7748 38.4376 42.1759 38.1033 42.6 37.8L40.6 34.3L41.1 33.9L43.9 36.8C44.3 36.5 44.8 36.2 45.2 35.9L43.6 32.2L44.2 31.9L46.7 35.1C47.1458 34.8271 47.6142 34.5929 48.1 34.4L47 30.5L47.6 30.2L49.7 33.7C50.184 33.4887 50.686 33.3213 51.2 33.2L50.5 29.2L51.1 29L52.8 32.7C53.3 32.6 53.8 32.4 54.3 32.3L54.1 28.2L54.8 28.1L56 32C56.5 31.9 57 31.9 57.6 31.8L57.8 27.7H58.5L59 32ZM60 37.4C55.5499 37.4 51.1998 38.7196 47.4997 41.1919C43.7996 43.6643 40.9157 47.1783 39.2127 51.2896C37.5097 55.401 37.0642 59.925 37.9323 64.2895C38.8005 68.6541 40.9434 72.6632 44.0901 75.8099C47.2368 78.9566 51.2459 81.0995 55.6105 81.9677C59.975 82.8358 64.499 82.3903 68.6104 80.6873C72.7217 78.9843 76.2357 76.1004 78.7081 72.4003C81.1804 68.7002 82.5 64.3501 82.5 59.9C82.491 53.9354 80.1176 48.2176 75.9 44C71.6824 39.7824 65.9646 37.409 60 37.4Z" fill="url(#paint1_linear_2_735)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M58.5 18H60.9L62 12H63L63.4 18.1C64.2 18.2 65 18.3 65.7 18.4L67.5 12.5L68.5 12.7L68.2 18.9C69 19.1 69.7 19.2 70.4 19.4L72.9 13.7L73.9 14L72.9 20.2C73.616 20.4227 74.3173 20.6899 75 21L78.2 15.5L79.1 15.9L77.4 22C78.1 22.3 78.8 22.7 79.4 23L83.2 17.9L84.1 18.4L81.6 24.3C82.2562 24.6989 82.8904 25.1329 83.5 25.6L87.9 20.9L88.7 21.5L85.5 27.1C86.1 27.6 86.7 28.1 87.2 28.6L92.1 24.5L92.8 25.2L89 30.4C89.5 30.9 90 31.5 90.5 32L95.9 28.5L96.5 29.3L92.1 34.1C92.5659 34.6758 92.9999 35.2767 93.4 35.9L99.2 33L99.8 33.8L94.9 38.1C95.3038 38.7111 95.6711 39.3455 96 40L102.2 37.8L102.7 38.7L97.3 42.4C97.6 43.1 97.9 43.7 98.2 44.4L104.6 42.9L104.9 43.8L99.1 46.8L99.7 48.9L106.2 48.2L106.4 49.2L100.3 51.5C100.4 52.2 100.6 52.9 100.7 53.6H107.3L107.4 54.6L101 56.2C101.085 56.9635 101.119 57.7319 101.1 58.5L107.6 59.3V60.3L101.1 61.1C101.1 61.8 101 62.5 101 63.2L107.4 64.7L107.3 65.7L100.7 65.8C100.615 66.5413 100.482 67.2763 100.3 68L106.4 70.3L106.2 71.3L99.7 70.6L99.1 72.7L104.9 75.6L104.6 76.5L98.3 75.1C98 75.8 97.7 76.5 97.4 77.2L102.8 80.8L102.4 81.7L96.3 79.6C95.9933 80.2662 95.625 80.9023 95.2 81.5L100.1 85.7L99.6 86.5L93.8 83.7C93.4 84.3 92.9 84.9 92.5 85.5L96.9 90.2L96.3 91L90.9 87.5C90.4 88.1 89.9 88.6 89.4 89.2L93.2 94.3L92.5 95L87.6 91C87 91.5 86.5 92 85.9 92.5L89 98L88.2 98.6L83.8 94.1C83.2 94.5 82.6 95 81.9 95.4L84.4 101.1L83.5 101.6L79.7 96.7C79 97.1 78.3 97.4 77.6 97.8L79.4 103.8L78.5 104.2L75.3 98.9C74.6173 99.2101 73.916 99.4773 73.2 99.7L74.3 105.8L73.3 106.1L70.8 100.5C70.1 100.7 69.3 100.9 68.5 101.1L68.8 107.1L67.8 107.3L66 101.6L63.6 101.9L63.2 107.9L62.2 108L61.1 102.1H58.5L57.4 108L56.4 107.9L56 101.9C55.2 101.8 54.4 101.8 53.6 101.7L51.9 107.4L50.9 107.2L51.2 101.3C50.4 101.1 49.6 101 48.8 100.8L46.4 106.2L45.4 105.9L46.3 100.1C45.5185 99.8782 44.7505 99.6111 44 99.3L41.1 104.3L40.2 103.9L41.8 98.3C41.0379 97.994 40.3021 97.6261 39.6 97.2L36.1 101.8L35.2 101.3L37.4 96C36.7 95.6 36 95.1 35.3 94.7L31.4 98.9L30.6 98.3L33.4 93.3C32.7 92.8 32.1 92.3 31.4 91.7L27 95.3L26.3 94.6L29.6 90L27.8 88.2L23.1 91.3L22.4 90.5L26.2 86.3C25.7 85.6 25.2 85 24.7 84.3L19.7 86.8L19.1 86L23.3 82.3C22.8299 81.589 22.396 80.8548 22 80.1L16.7 82L16.3 81.1L20.9 78C20.5243 77.2183 20.1905 76.4172 19.9 75.6L14.5 76.8L14.2 75.9L19.1 73.4C18.8 72.6 18.6 71.8 18.3 70.9L12.8 71.5L12.6 70.5L17.8 68.6C17.6 67.8 17.5 66.9 17.3 66.1H11.7L11.6 65.1L17 63.7C16.9 62.9 16.9 62 16.8 61.2L11.3 60.5V59.5L16.8 58.8C16.8 57.9 16.9 57.1 16.9 56.2L11.5 54.9L11.6 53.9L17.2 53.8C17.3 53 17.5 52.1 17.6 51.3L12.4 49.4L12.6 48.4L18.1 49C18.3 48.2 18.6 47.4 18.8 46.5L13.8 44L14.2 43.1L19.6 44.3C19.9 43.5 20.3 42.7 20.6 42L15.9 38.9L16.3 38L21.6 39.9C21.996 39.1452 22.4299 38.411 22.9 37.7L18.6 34.1L19.1 33.3L24.2 35.8C24.7 35.1 25.2 34.4 25.7 33.8L21.8 29.6L22.4 28.8L27.2 31.9C27.8 31.3 28.3 30.7 28.9 30.1L25.5 25.5L26.2 24.8L30.7 28.4C31.3 27.9 32 27.3 32.6 26.8L29.7 21.8L30.5 21.2L34.5 25.4C35.2 24.9 35.9 24.5 36.6 24L34.3 18.6L35.2 18.1L38.8 22.7C39.5 22.3 40.3 22 41 21.6L39.3 16L40.2 15.6L43.2 20.7C43.9505 20.3889 44.7185 20.1218 45.5 19.9L44.5 14L45.5 13.7L47.9 19.1C48.6556 18.8858 49.4237 18.7188 50.2 18.6L49.9 12.6L50.9 12.4L52.7 18.1L55.1 17.8L55.5 11.8L56.5 11.7L58.5 18ZM34.1 86.8C36.8 89.4 41.2 88.3 43.1 85L53.9 66C54.9256 64.1591 55.4472 62.0801 55.4121 59.9731C55.377 57.8661 54.7864 55.8057 53.7 54L42.6 35.2C40.7 32 36.3 30.9 33.6 33.6C30.0442 37.0728 27.2278 41.2291 25.3202 45.8188C23.4126 50.4084 22.4533 55.3366 22.5001 60.3067C22.5468 65.2767 23.5985 70.186 25.592 74.739C27.5855 79.292 30.4796 83.3946 34.1 86.8ZM57.1 51.9C58.2029 53.7262 59.7575 55.2375 61.6141 56.2884C63.4707 57.3393 65.5666 57.8943 67.7 57.9H89.5C93.3 57.9 96.4 54.7 95.5 51C94.2834 46.139 92.0937 41.5752 89.0632 37.5845C86.0327 33.5938 82.2244 30.2591 77.8685 27.7821C73.5126 25.305 68.6996 23.737 63.7205 23.1729C58.7414 22.6088 53.6997 23.0602 48.9 24.5C45.3 25.6 44 29.9 45.9 33.2L57.1 51.9ZM67.8 62C65.6804 62.0068 63.5988 62.5632 61.7585 63.6148C59.9181 64.6664 58.382 66.1773 57.3 68L46.5 87C46.0266 87.751 45.7327 88.6011 45.6413 89.4841C45.5499 90.3672 45.6634 91.2594 45.973 92.0914C46.2826 92.9235 46.78 93.6729 47.4264 94.2814C48.0728 94.8899 48.8508 95.3411 49.7 95.6C54.4745 96.9258 59.4663 97.2809 64.3804 96.6443C69.2944 96.0078 74.031 94.3926 78.3102 91.8941C82.5893 89.3956 86.3241 86.0646 89.2938 82.0979C92.2635 78.1313 94.4078 73.6096 95.6 68.8C96.5 65.2 93.4 61.9 89.6 61.9L67.8 62ZM59.5 58C59.1044 58 58.7178 58.1173 58.3889 58.3371C58.06 58.5568 57.8036 58.8692 57.6522 59.2346C57.5009 59.6001 57.4613 60.0022 57.5384 60.3902C57.6156 60.7781 57.8061 61.1345 58.0858 61.4142C58.3655 61.6939 58.7219 61.8844 59.1098 61.9616C59.4978 62.0387 59.8999 61.9991 60.2654 61.8478C60.6308 61.6964 60.9432 61.44 61.1629 61.1111C61.3827 60.7822 61.5 60.3956 61.5 60C61.4985 59.47 61.2872 58.9622 60.9125 58.5875C60.5378 58.2128 60.03 58.0015 59.5 58Z" fill="url(#paint2_linear_2_735)"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_2_735" x1="60" y1="120" x2="60" y2="3.8147e-06" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8E8E93"/>
        <stop offset="1" stop-color="#E5E5EA"/>
        </linearGradient>
        <linearGradient id="paint1_linear_2_735" x1="60.0609" y1="27.964" x2="60.0609" y2="91.964" gradientUnits="userSpaceOnUse">
        <stop stop-color="#B4B4B9"/>
        <stop offset="1" stop-color="#B4B4B9"/>
        </linearGradient>
        <linearGradient id="paint2_linear_2_735" x1="59.466" y1="11.9567" x2="59.466" y2="107.867" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DCDCE1"/>
        <stop offset="1" stop-color="#98989D"/>
        </linearGradient>
        <clipPath id="clip0_2_735">
        <rect width="120" height="120" fill="white"/>
        </clipPath>
        </defs>
      </svg>
        <div className='setting_text'>
          <h2>신속한 <b>변화
              <svg viewBox="0 0 70 36">
                 <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
              </svg>
            </b>
            에 적응하는 프론트엔드개발자</h2>
          <p>오늘날 우리는 모든 것이 신속히 변하는 시대에 살고 있습니다. 이러한 변화와 적응의 요인은 정보화, 소프트화, 서비스화, 세계화의 급진전 등의 여러 가지 형태에 기인합니다.<br/>
            눈 깜짝할 사이에 패러다임이 변하고 주변 환경은 급격히 변합니다. 이러한 상황과 환경 목적과 목표에 따라 수시로 변화 적응하는 위기를 기회로 바꾸고<br/> 장애물을 목적에 맞게
            변화 시키는 계속해서 자신만의 존재가치를 증명하는 프론트엔드 개발자가 되겠습니다.
          </p>
          <span></span>
          <p>Preparing Update ...</p>  
        </div>
        <svg class="spinner" width="65" height="65" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
           <circle class="path1" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
      </div>
      <div className='setting_content'>
        <div className='setting_contents'>
        <h3>Contents</h3>
        </div>
        <div className='setting_number'>
          <p>01</p>
          <p>02</p>
          <p>03</p>
        </div>
        <div className='setting_index'>
          <div className='setting_idx'>
            <h4>Setting</h4>
            <p>Hello</p>
            <p>Face ID</p>
            <p>Setting</p>
            <p>Call</p>
            <p>Introduce</p>
            <p>Home</p>
          </div>
          <div className='setting_idx'>
            <h4>Project</h4>
            <p>Project Index</p>
            <p>삼성전기</p>
            <p>CJ ONE</p>
            <p>코스닥 글로벌 세그먼트</p>
            <p>KAKAOTALK APP</p>
            <p>NETFLIX APP</p>
          </div>
          <div className='setting_idx'>
            <h4>Other</h4>
            <p>Facebook Emoji</p>
            <p>Off</p>
          </div>
          {/* <div className='setting_idx'>
            <h4>Index</h4>
            <p>Home</p>
            <p>삼성전기</p>
            <p>CJ ONE</p>
            <p>코스닥 글로벌</p>
            <p>카카오톡</p>
            <p>넷플릭스</p>
            <p>Pure CSS</p>  
          </div> */}
        </div>
       
       
      </div>  
    </div>
  )
}

export default Settings
