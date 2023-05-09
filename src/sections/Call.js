import React from 'react'
import '../styles/Call.scss';
import Header from 'components/Header';
import Paper from 'components/Paper';

function Call() {
  return (
    <div className='call_main'>
    <Header />
    <Paper />
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 0 0" width="0" height="0" style={{display:'none'}}>
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 13 -6" result="goo" />
    </filter>
  </defs>
</svg>

<div class="goo">
  <h1>KAKAKOTALK APP</h1>
  <div class="drop"></div>
  <div class="drop"></div>
  <div class="drop"></div>
  <div class="drop"></div>
  <div class="drop"></div>
  <div class="drop"></div>

</div>
    </div>
  )
}

export default Call
