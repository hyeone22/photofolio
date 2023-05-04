import React, { useEffect, useRef } from 'react';
import '../styles/Main.scss';


function Main() {
const text1Ref = useRef(null);
const text2Ref = useRef(null);
const filterRef = useRef(null);

const texts = [
'Hello',
'My',
'Name',
'is',
'Seung-Hyeon'
];

const morphTime = 2.5;
const cooldownTime = 0.5;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

useEffect(() => {
const text1 = text1Ref.current;
const text2 = text2Ref.current;
const filter = filterRef.current;

text1.textContent = texts[textIndex % texts.length];
text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  text1.textContent = texts[textIndex % texts.length];
  text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  text2.style.filter = '';
  text2.style.opacity = '100%';

  text1.style.filter = '';
  text1.style.opacity = '0%';
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }

    doMorph();
  } else {
    doCooldown();
  }
}

animate();

}, [texts, morphTime, cooldownTime]);

return (
<>
<div className="main">
<div id="container">
<span id="text1" ref={text1Ref}></span>
<span id="text2" ref={text2Ref}></span>
</div>
<svg id="filters">
<defs>
<filter id="threshold" ref={filterRef}>
<feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140" />
		</filter>
</defs>
</svg>
</div>

</>
);
}

export default Main;