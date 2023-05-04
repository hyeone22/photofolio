import React, { useState } from 'react';

let highestZ = 1;

function Paper(props) {
  const [holdingPaper, setHoldingPaper] = useState(false);
  const [mouseTouchX, setMouseTouchX] = useState(0);
  const [mouseTouchY, setMouseTouchY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [prevMouseX, setPrevMouseX] = useState(0);
  const [prevMouseY, setPrevMouseY] = useState(0);
  const [velX, setVelX] = useState(0);
  const [velY, setVelY] = useState(0);
  const [rotation, setRotation] = useState(Math.random() * 30 - 15);
  const [currentPaperX, setCurrentPaperX] = useState(0);
  const [currentPaperY, setCurrentPaperY] = useState(0);
  const [rotating, setRotating] = useState(false);

  const handleMouseMove = (e) => {
    if (!rotating) {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
      setVelX(mouseX - prevMouseX);
      setVelY(mouseY - prevMouseY);
    }
    const dirX = e.clientX - mouseTouchX;
    const dirY = e.clientY - mouseTouchY;
    const dirLength = Math.sqrt(dirX * dirX + dirY * dirY);
    const dirNormalizedX = dirX / dirLength;
    const dirNormalizedY = dirY / dirLength;
    const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
    let degrees = (180 * angle) / Math.PI;
    degrees = (360 + Math.round(degrees)) % 360;
    if (rotating) {
      setRotation(degrees);
    }
    if (holdingPaper) {
      if (!rotating) {
        setCurrentPaperX(currentPaperX + velX);
        setCurrentPaperY(currentPaperY + velY);
      }
      setPrevMouseX(mouseX);
      setPrevMouseY(mouseY);
      props.paperRef.current.style.transform = `translateX(${currentPaperX}px) translateY(${currentPaperY}px) rotateZ(${rotation}deg)`;
    }
  };

  const handleMouseDown = (e) => {
    if (holdingPaper) return;
    setHoldingPaper(true);
    props.paperRef.current.style.zIndex = highestZ;
    highestZ += 1;
    if (e.button === 0) {
      setMouseTouchX(mouseX);
      setMouseTouchY(mouseY);
      setPrevMouseX(mouseX);
      setPrevMouseY(mouseY);
    }
    if (e.button === 2) {
      setRotating(true);
    }
  };

  const handleMouseUp = () => {
    setHoldingPaper(false);
    setRotating(false);
  };

  return (
    <div
      className="paper"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      ref={props.paperRef}
    />
  );
}



export default Paper