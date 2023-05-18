import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../styles/Se.scss';
import Background from 'components/Background';
import video from '../video/se_pc.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Se() {
  const [load, setLoad] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const componentRef = useRef(null);

  const scale = useCallback((num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }, []);

  const handleIntersection = useCallback((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      AOS.init();

      const id = setInterval(() => {
        setLoad((prevLoad) => {
          if (prevLoad >= 99) {
            clearInterval(id);
            return prevLoad;
          }
          return prevLoad + 1;
        });
      }, 10);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }
  }, [intervalId]);

  useEffect(() => {
    const loadText = document.querySelector(".loading-text");
    const bg = document.querySelector(".bg");

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, [handleIntersection, intervalId]);

  useEffect(() => {
    const loadText = document.querySelector(".loading-text");
    const bg = document.querySelector(".bg");

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  }, [load, scale, intervalId]);


  const url = "https://hyeone22.github.io/project_se";
  const url1 = "https://hyeone22.github.io/project_se/sub1.html";
  const url2 = "https://hyeone22.github.io/project_se/sub2.html";
  const url3 = "https://github.com/hyeone22/project_se";

  return (
    <div className='se_main' ref={componentRef}>
      <div className="bg">
        <Background />
      <div className="loading-text" >{load}%</div>
      
      <div className='se_section'>
        <div className='se_head'>
          <h2 className='spread-out'>삼성전기</h2>
          <p>Web Accessibility & Standard</p>
          <span></span>
        </div>
        <div className='se_container'>
          <div className='se_content'>
            <div className='se_con1'data-aos="zoom-in"data-aos-delay="100">
              <div className='se_title'>
                <h3 className='se_h3'>Built</h3>
                <p>2023.00.00</p>  
              </div>
              <div className='se_skill'>
                <span>HTML</span>
                <span>CSS</span>
                <span>Javascript</span>    
              </div>
              <div className='se_emoji'>
                <svg width="106" height="17" viewBox="0 0 106 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M105.819 0.143794C105.643 0.00490673 105.38 -0.0378226 105.149 0.0351706L85.1912 6.34308C84.9628 6.41523 84.8099 6.58709 84.8012 6.78131C84.7924 6.97552 84.9296 7.15553 85.1508 7.2403L93.0208 10.2563L96.8377 16.4749C96.9418 16.6445 97.1592 16.7515 97.3964 16.7515C97.4037 16.7515 97.4112 16.7514 97.4186 16.7512C97.6644 16.7442 97.8818 16.6234 97.9732 16.443L105.956 0.673101C106.049 0.490831 105.995 0.282615 105.819 0.143794Z" fill="#3C3E40" fill-opacity="0.7"/>
                <path d="M105.818 0.144043L93.0195 10.2565L96.8364 16.4751C96.9405 16.6447 97.1579 16.7517 97.3951 16.7517C97.4025 16.7517 97.4099 16.7516 97.4173 16.7514C97.6631 16.7445 97.8806 16.6236 97.9719 16.4432L105.955 0.67335C106.047 0.49108 105.993 0.282864 105.818 0.144043Z" fill="#3C3E40"/>
                <path d="M47.6752 16.7515C47.3663 16.7515 47.0586 16.6843 46.7846 16.5503C46.2811 16.3046 45.9808 15.8786 45.9808 15.4108V13.4478C44.2079 11.6729 43.4417 9.45657 43.8217 7.18218C44.4308 3.53313 48.2264 0.542269 52.8461 0.0710568C56.1001 -0.261105 59.2942 0.581632 61.6129 2.38187C63.9318 4.18212 65.0539 6.68899 64.6919 9.26001C64.1673 12.9834 60.3622 16.0466 55.6446 16.5439C53.7639 16.741 51.8618 16.5352 50.1167 15.9447L48.4344 16.6089C48.1934 16.7039 47.9337 16.7515 47.6752 16.7515Z" fill="#3C3E40"/>
                <path d="M6.4323 0C2.59992 0 0 2.79985 0 5.88565C0 11.1756 5.15676 13.3559 11.7459 16.7515C18.3351 13.3559 23.4919 11.1756 23.4919 5.88565C23.4919 2.79985 20.892 0 17.0596 0C14.5929 0 12.5654 1.10207 11.7459 1.7633C10.9265 1.10207 8.899 0 6.4323 0Z" fill="#F0304E"/>
                </svg> 
              </div>    
            </div>
            <div className='se_con2'data-aos="zoom-in"data-aos-delay="250">
            <div className='se_title'>
                <h3 className='se_h3'>Work</h3> 
                <p>삼성전기의 웹 사이트를 웹 접근성 지침과 
                    웹 표준성을 준수하여 제작</p>
                <p>리뉴얼된 삼성전기 홈페이지의 인터렉션과
                    디자인 적용</p>
                <span onClick={()=>{window.open(url3)}}>Github</span>     
              </div>
              <div className='se_skill'>
                <span onClick={()=>{window.open(url)}}>Main</span>
                <span onClick={()=>{window.open(url1)}}>Sub</span>
                <span onClick={()=>{window.open(url2)}}>Sub1</span>     
            </div>
            <div className='se_emoji'>
                <svg width="106" height="17" viewBox="0 0 106 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M105.819 0.143794C105.643 0.00490673 105.38 -0.0378226 105.149 0.0351706L85.1912 6.34308C84.9628 6.41523 84.8099 6.58709 84.8012 6.78131C84.7924 6.97552 84.9296 7.15553 85.1508 7.2403L93.0208 10.2563L96.8377 16.4749C96.9418 16.6445 97.1592 16.7515 97.3964 16.7515C97.4037 16.7515 97.4112 16.7514 97.4186 16.7512C97.6644 16.7442 97.8818 16.6234 97.9732 16.443L105.956 0.673101C106.049 0.490831 105.995 0.282615 105.819 0.143794Z" fill="#3C3E40" fill-opacity="0.7"/>
                <path d="M105.818 0.144043L93.0195 10.2565L96.8364 16.4751C96.9405 16.6447 97.1579 16.7517 97.3951 16.7517C97.4025 16.7517 97.4099 16.7516 97.4173 16.7514C97.6631 16.7445 97.8806 16.6236 97.9719 16.4432L105.955 0.67335C106.047 0.49108 105.993 0.282864 105.818 0.144043Z" fill="#3C3E40"/>
                <path d="M47.6752 16.7515C47.3663 16.7515 47.0586 16.6843 46.7846 16.5503C46.2811 16.3046 45.9808 15.8786 45.9808 15.4108V13.4478C44.2079 11.6729 43.4417 9.45657 43.8217 7.18218C44.4308 3.53313 48.2264 0.542269 52.8461 0.0710568C56.1001 -0.261105 59.2942 0.581632 61.6129 2.38187C63.9318 4.18212 65.0539 6.68899 64.6919 9.26001C64.1673 12.9834 60.3622 16.0466 55.6446 16.5439C53.7639 16.741 51.8618 16.5352 50.1167 15.9447L48.4344 16.6089C48.1934 16.7039 47.9337 16.7515 47.6752 16.7515Z" fill="#3C3E40"/>
                <path d="M6.4323 0C2.59992 0 0 2.79985 0 5.88565C0 11.1756 5.15676 13.3559 11.7459 16.7515C18.3351 13.3559 23.4919 11.1756 23.4919 5.88565C23.4919 2.79985 20.892 0 17.0596 0C14.5929 0 12.5654 1.10207 11.7459 1.7633C10.9265 1.10207 8.899 0 6.4323 0Z" fill="#F0304E"/>
                </svg> 
              </div>   
            </div>
            <div className='se_con3'data-aos="zoom-in"data-aos-delay="290">
              <div className='se_title'>
                 <h3 className='se_h3'>Project Info</h3>
                <p>2023.00.00</p>
                <p>HTML/CSS/W3C/SEO 웹 접근성 검사 첨부</p>
              </div>
              <div className='se_skill'>
                <span>Show !</span>
              </div>
              <div className='se_emoji'>
                <svg width="106" height="17" viewBox="0 0 106 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M105.819 0.143794C105.643 0.00490673 105.38 -0.0378226 105.149 0.0351706L85.1912 6.34308C84.9628 6.41523 84.8099 6.58709 84.8012 6.78131C84.7924 6.97552 84.9296 7.15553 85.1508 7.2403L93.0208 10.2563L96.8377 16.4749C96.9418 16.6445 97.1592 16.7515 97.3964 16.7515C97.4037 16.7515 97.4112 16.7514 97.4186 16.7512C97.6644 16.7442 97.8818 16.6234 97.9732 16.443L105.956 0.673101C106.049 0.490831 105.995 0.282615 105.819 0.143794Z" fill="#3C3E40" fill-opacity="0.7"/>
                <path d="M105.818 0.144043L93.0195 10.2565L96.8364 16.4751C96.9405 16.6447 97.1579 16.7517 97.3951 16.7517C97.4025 16.7517 97.4099 16.7516 97.4173 16.7514C97.6631 16.7445 97.8806 16.6236 97.9719 16.4432L105.955 0.67335C106.047 0.49108 105.993 0.282864 105.818 0.144043Z" fill="#3C3E40"/>
                <path d="M47.6752 16.7515C47.3663 16.7515 47.0586 16.6843 46.7846 16.5503C46.2811 16.3046 45.9808 15.8786 45.9808 15.4108V13.4478C44.2079 11.6729 43.4417 9.45657 43.8217 7.18218C44.4308 3.53313 48.2264 0.542269 52.8461 0.0710568C56.1001 -0.261105 59.2942 0.581632 61.6129 2.38187C63.9318 4.18212 65.0539 6.68899 64.6919 9.26001C64.1673 12.9834 60.3622 16.0466 55.6446 16.5439C53.7639 16.741 51.8618 16.5352 50.1167 15.9447L48.4344 16.6089C48.1934 16.7039 47.9337 16.7515 47.6752 16.7515Z" fill="#3C3E40"/>
                <path d="M6.4323 0C2.59992 0 0 2.79985 0 5.88565C0 11.1756 5.15676 13.3559 11.7459 16.7515C18.3351 13.3559 23.4919 11.1756 23.4919 5.88565C23.4919 2.79985 20.892 0 17.0596 0C14.5929 0 12.5654 1.10207 11.7459 1.7633C10.9265 1.10207 8.899 0 6.4323 0Z" fill="#F0304E"/>
                </svg> 
              </div>   
            </div>
            <div className='se_con4'data-aos="zoom-in"data-aos-delay="180">

            </div>
            <div className='se_con5'data-aos="zoom-in"data-aos-delay="180">
            </div>
          </div>
         
          <div className='se_movie'>
            <div className='se_mokup'>
                <video className='se_pc' src={video}
              muted autoPlay loop>  
              </video>
            </div> 
        </div>
        </div>

      </div>
      </div>
    </div>
  );
}

export default Se;