import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import "./Reviews.css"

const PreviousButton = ({ onClick }) => {
  const previousRefs = useRef([]);

  useEffect(() => {
    gsap.to(previousRefs.current, {
      x: -10,
      duration: 1,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <button
      title="Слайд"
      ref={(el) => previousRefs.current.push(el)}
      onClick={onClick}
      className="button btn-previous"
    >
      <div className="line one-previous">
        <div className="none round"></div>
        <div className="none round"></div>
        <div className="none round"></div>
        <div className="round"></div>
      </div>
      <div className="line two-previous">
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="round"></div>
          </div>
          <div className="line three-previous">
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="round"></div>
          </div>
          <div className="line four-previous">
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="round"></div>
          </div>
          <div className="line five-previous">
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="round"></div>
          </div>
          <div className="line six-previous">
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="round"></div>
          </div>
          <div className="line seven-previous">
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="none round"></div>
            <div className="round"></div>
          </div>
    </button>
  );
};

export default PreviousButton;