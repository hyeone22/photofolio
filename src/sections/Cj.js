import React, { useRef } from 'react';
import '../styles/Cj.scss';
import Background from 'components/Background';
import anime from 'animejs';

function Cj() {

  const folderContentRef = useRef(null);
  const folderAmountRef = useRef(null);
  const folderCollapseButtonRef = useRef(null);
  const folderCollapseButtonIconRef = useRef(null);
  const folderItemRefs = useRef([]);

  const toggleFolder = () => {
    if (showFolderContentAnimation.began) {
      showFolderContentAnimation.reverse();
      if (
        showFolderContentAnimation.progress === 100 &&
        showFolderContentAnimation.direction === 'reverse'
      ) {
        showFolderContentAnimation.completed = false;
      }
    }

    if (showFolderContentAnimation.paused) {
      showFolderContentAnimation.play();
    }
  };

  const showFolderContentAnimation = anime.timeline({
    easing: 'easeOutCubic',
    autoplay: false
  });

  showFolderContentAnimation
    .add({
      targets: folderContentRef.current,
      height: [0, 240],
      duration: 350
    })
    .add(
      {
        targets: folderAmountRef.current,
        opacity: [1, 0],
        duration: 400
      },
      '-=350'
    )
    .add(
      {
        targets: folderCollapseButtonRef.current,
        opacity: [0, 1],
        duration: 400
      },
      '-=300'
    )
    .add(
      {
        targets: folderCollapseButtonIconRef.current,
        duration: 300,
        translateX: ['-50%', '-50%'],
        translateY: ['-50%', '-50%'],
        rotate: ['0deg', '180deg']
      },
      '-=400'
    )
    .add(
      {
        targets: folderItemRefs.current,
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 300,
        delay: (el, i, l) => i * 120
      },
      '-=275'
    );
  return (
    <div className='cj_main'>
      <Background />
      <div className='cj_section'>
        <div className='cj_header'>
        <span></span>
        <span></span> 
        <span></span>   
        </div>
        <div className='cj_movie'>
          <div className='movie_section'>

          </div>
        </div>
        <div className='cj_title'>
          <h2>CJ ONE</h2>
          <span>100%</span>
        </div>
        <p>CJ ONE 웹 사이트의 PC, Tablet, Mobile등 디바이스의 해상도에 맞는 반응형 웹 사이트 제작</p>
        
      </div>
    </div>
  )
}

export default Cj