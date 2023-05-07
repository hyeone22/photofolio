import React, { useRef } from 'react';
import '../styles/Paper.scss';

let highestZ = 1;

function Paper() {
  const holdingPaper = useRef(false);
  const mouseTouchX = useRef(0);
  const mouseTouchY = useRef(0);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const prevMouseX = useRef(0);
  const prevMouseY = useRef(0);
  const velX = useRef(0);
  const velY = useRef(0);
  const rotation = useRef(Math.random() * 30 - 15);
  const currentPaperX = useRef(0);
  const currentPaperY = useRef(0);
  const rotating = useRef(false);

  const init = (paper) => {
    const handleMouseMove = (e) => {
      if (!rotating.current) {
        mouseX.current = e.clientX;
        mouseY.current = e.clientY;

        velX.current = mouseX.current - prevMouseX.current;
        velY.current = mouseY.current - prevMouseY.current;
      }

      const dirX = e.clientX - mouseTouchX.current;
      const dirY = e.clientY - mouseTouchY.current;
      const dirLength = Math.sqrt(dirX * dirX + dirY * dirY);
      const dirNormalizedX = dirX / dirLength;
      const dirNormalizedY = dirY / dirLength;



      const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
      let degrees = (180 * angle) / Math.PI;
      degrees = (360 + Math.round(degrees)) % 360;
      if (rotating.current) {
        rotation.current = degrees;
      }

      if (holdingPaper.current) {
        if (!rotating.current) {
          currentPaperX.current += velX.current;
          currentPaperY.current += velY.current;
        }
        prevMouseX.current = mouseX.current;
        prevMouseY.current = mouseY.current;

        paper.style.transform = `translateX(${currentPaperX.current}px) translateY(${currentPaperY.current}px) rotateZ(${rotation.current}deg)`;
      }
    };

    const handleMouseDown = (e) => {
      if (holdingPaper.current) return;
      holdingPaper.current = true;

      paper.style.zIndex = highestZ;
      highestZ += 1;

      if (e.button === 0) {
        mouseTouchX.current = mouseX.current;
        mouseTouchY.current = mouseY.current;
        prevMouseX.current = mouseX.current;
        prevMouseY.current = mouseY.current;
      }
      if (e.button === 2) {
        rotating.current = true;
      }
    };

    const handleMouseUp = () => {
      holdingPaper.current = false;
      rotating.current = false;
    };

    document.addEventListener("mousemove", handleMouseMove);
    paper.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      paper.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  };

  return (
    <>
    <div className="paper image" ref={init}>
          <p>Random image from unsplash!</p>
          <img src="https://source.unsplash.com/random?l=4" />

    </div>
    <div className='paper' ref={init}>
        <p>안녕하세요 저의 이름은 승현</p>
    </div>
    </>
  );
}

export default Paper;