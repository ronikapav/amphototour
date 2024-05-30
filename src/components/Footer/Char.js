import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import "./Footer.css";

const Char = () => {
  const yellow = useRef(null);
  const white = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(
      [yellow.current],
      { duration: 7, x: 0 },
      { y: '-400%', yoyo: true, repeat: -1 }
    );
    gsap.fromTo(
      [white.current],
      { duration: 5, x: 0 },
      { y: 700, yoyo: true, repeat: -1 }
    );

    if (window.innerWidth < 750) {
        gsap.fromTo(
            [yellow.current],
            { duration: 7, x: 0 },
            { y: '-700%', yoyo: true, repeat: -1 }
          );
        gsap.fromTo(
          [white.current],
          { duration: 5, x: 0 },
          { y: 1000, yoyo: true, repeat: -1 }
        );
      }

      if (window.innerWidth < 430) {
        gsap.fromTo(
            [yellow.current],
            { duration: 7, x: 0 },
            { y: '-600%', yoyo: true, repeat: -1 }
          );
        gsap.fromTo(
          [white.current],
          { duration: 5, x: 0 },
          { y: 900, yoyo: true, repeat: -1 }
        );
      }
      
      if (window.innerHeight < 430) {
        gsap.fromTo(
          [yellow.current],
          { duration: 7, y: 0 },
          { y: '-500%', yoyo: true, repeat: -1 }
        );
        gsap.fromTo(
          [white.current],
          { duration: 5, y: 0 },
          { y: 600, yoyo: true, repeat: -1 }
        );
      }
  }, []);

  return (
    <svg className='viewBox' viewBox="0 0 1440 900" width="100%" height="100%">
      <circle ref={yellow} cx="720" cy="450" r="50" fill="rgb(255, 185, 33)"/>
      <circle ref={white} cx="620" cy="350" r="25" fill="#ebeceb"/>
    </svg>
  );
}

export default Char;