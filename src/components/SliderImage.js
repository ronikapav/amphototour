import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "./Slider.css";

const SliderImage = ({ image, previousPerson, nextPerson }) => {
  const previousRefs = useRef([]);
  const nextRefs = useRef([]);

  useEffect(() => {
    gsap.to(previousRefs.current, {
      x: -10,
      duration: 1,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    });
  }, []);

  useEffect(() => {
    gsap.to(nextRefs.current, {
      x: 10,
      duration: 1,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    });
  }, []);

  return (
    <div className='slider-container'>
      {/* <img src={image} alt='photos'/> */}
      <button ref={el => previousRefs.current.push(el)} onClick={previousPerson} className="button btn-previous">
        <div className="line one-previous">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
        <div className="line two-previous">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
        <div className="line three-previous">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
        <div className="line four-previous">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
        <div className="line five-previous">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
        <div className="line six-previous">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
        <div className="line seven-previous">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
      </button>
      {/* <button onClick={previousPerson} className="btn-previous">Previous</button> */}
      {/* <button onClick={nextPerson} className="btn-next">Next</button> */}
      <button ref={el => nextRefs.current.push(el)} onClick={nextPerson} className="button btn-next">
        <div className="line one-next">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
        <div className="line two-next">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
        <div className="line three-next">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
        <div className="line four-next">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
        <div className="line five-next">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
        <div className="line six-next">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
        <div className="line seven-next">
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
          <div className="round"></div>
        </div>
      </button>
    </div>
  );
}

export default SliderImage;
