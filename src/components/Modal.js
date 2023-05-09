// import React, { useRef, useState } from 'react'
// import useOnClickOutside from 'hooks/useOnClickOutside';
// import styled from 'styled-components';

// function Modal() {

//   const [isClicked, setIsClicked] = useState(false);

//   const ref = useRef(); // id역할 dom을 직접적으로 조작하기 위해서 사용


  
//   useOnClickOutside(ref, () => {
//     setModalOpen(false);
//   });
//   return (
//     <div className='presentation'>
//       <div className='wrapper-modal'>
//         <div className='modal' ref={ref}>
//         <span className="modal-close" onClick={() => {
//             setModalOpen(false);

//           }}>X</span>  
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Modal