import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import "./Reviews.css"

const NextButton = ({ onClick }) => {
  const nextRefs = useRef([]);

  useEffect(() => {
    gsap.to(nextRefs.current, {
      x: 10,
      duration: 1,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <button
      title="Слайд"
      ref={(el) => nextRefs.current.push(el)}
      onClick={onClick}
      className="button btn-next"
    >
      <div className="line one-next">
        <div className="none round"></div>
        <div className="none round"></div>
        <div className="none round"></div>
        <div className="round"></div>
      </div>
      <div className="line two-next">
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="round"></div>
          </div>
          <div className="line three-next">
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="round"></div>
          </div>
          <div className="line four-next">
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="round"></div>
          </div>
          <div className="line five-next">
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="round"></div>
          </div>
          <div className="line six-next">
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="round"></div>
          </div>
          <div className="line seven-next">
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="round"></div>
          </div>
    </button>
  );
};

export default NextButton;