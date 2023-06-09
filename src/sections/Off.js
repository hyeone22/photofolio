import React, { useEffect, useState } from 'react';
import '../styles/Off.scss';
import Header from 'components/Header';


function Off() {

  const [currentTime, setCurrentTime] = useState(new Date());
  const currentDate = new Date().toLocaleString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedHour = currentTime.getHours().toString().padStart(2, "0");
  const formattedMin = currentTime.getMinutes().toString().padStart(2, "0");

  const url = 'https://github.com/hyeone22'

  return (
    <div className='off_main' id="offSection">
    <Header />
      <div className='off_time'>

      <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5781 14.2063H6.76378C6.64348 14.2063 6.52837 14.2063 6.41569 14.2063V11.8461C6.41569 10.4284 6.4254 9.3817 6.63862 8.32809C6.84422 7.31363 7.22282 6.43602 7.79592 5.67379C8.94802 4.1417 10.762 3.25924 12.6709 3.25924C14.5802 3.25924 16.3939 4.1417 17.546 5.67379C18.1194 6.43602 18.498 7.31363 18.7033 8.32809C18.9168 9.3817 18.9262 10.4284 18.9262 11.8461V14.2063C18.8139 14.2063 18.6987 14.2063 18.5781 14.2063ZM24.6309 20.2848C24.6309 19.4827 24.6323 18.8559 24.6229 18.4474C24.6128 17.9994 24.5879 17.619 24.523 17.2525C24.3906 16.5075 24.0855 15.8437 23.5429 15.2987C23.1539 14.9079 22.7025 14.6415 22.2053 14.472V11.8461C22.2053 10.2558 22.1911 8.9008 21.8676 7.45187C21.5546 6.0504 20.9825 4.76846 20.1088 3.63551C18.3475 1.35192 15.5964 0 12.6709 0C9.74544 0 6.99434 1.35192 5.23308 3.63551C4.35938 4.76846 3.78732 6.0504 3.47459 7.45187C3.15077 8.9008 3.13656 10.2558 3.13656 11.8461V14.472C2.63938 14.6415 2.18797 14.9079 1.79897 15.2987C1.25638 15.8437 0.951276 16.5075 0.818835 17.2525C0.753655 17.619 0.729039 17.9994 0.718984 18.4474C0.709623 18.8559 0.71101 19.4827 0.71101 20.2848V28.5671C0.71101 29.3692 0.709623 29.996 0.718984 30.4044C0.729039 30.8524 0.753655 31.2332 0.818835 31.5994C0.951276 32.3443 1.25638 33.0085 1.79897 33.5532C2.34122 34.0982 3.00273 34.4041 3.74433 34.5375C4.10941 34.6026 4.48836 34.6276 4.93387 34.6376C5.34125 34.647 5.96532 34.6459 6.76378 34.6459H18.5781C19.3766 34.6459 20.001 34.647 20.4077 34.6376C20.8535 34.6276 21.2325 34.6026 21.5975 34.5375C22.3391 34.4041 23.0007 34.0982 23.5429 33.5532C24.0855 33.0085 24.3906 32.3443 24.523 31.5994C24.5879 31.2332 24.6128 30.8524 24.6229 30.4044C24.6323 29.996 24.6309 29.3692 24.6309 28.5671V20.2848Z" fill="white"/>
      </svg>

        <p>
          <span>{formattedHour}</span> : <span>{formattedMin}</span>
        </p>

        <span className='day'>{currentDate}</span>
      </div> 
      <div className='load'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      </div> 
      <div className='off_text'>
        <h3>김승현이(가) 비활성화되었음</h3>
        <p>010-5635-0561</p>
        <p>wmfrjdnsakdma12@naver.com</p>
        <p onClick={()=>{window.open(url)}}>https://github.com/hyeone22</p> 
      </div>
      <span className='off_call'>긴급통화</span>
    </div>
  )
}

export default Off
