import React, { useEffect, useRef } from 'react';
import './Reviews.css';

const Reviews = () => {
  const itemsRef = useRef([]);
  const activeIndex = useRef(0);

  useEffect(() => {
    const items = itemsRef.current;

    if ( items.length > 0 ) {

      const animate = (i) => {
        items[i].classList.add('animation');
      };

      const handleScrollTo = (i) => {
        animate(i);
        activeIndex.current = i;
      };

      const handleActivate = (e) => {
        if (e.target.matches('.btn')) {
          const index = parseInt(e.target.dataset.index);
          handleScrollTo(index);
        }
      };

      const init = () => handleScrollTo(0);

      init();

      window.addEventListener('click', handleActivate);

      return () => {
        window.removeEventListener('click', handleActivate);
      };
    }
  }, []);

  return (
    <main className='main'>
      <ul className='slider'>
        <li ref={(element) => itemsRef.current.push(element)} className='item'>
          <div className='testimonial'>
            <p>"This is the best no-code platform I've ever seen"</p>
            <p>Alyssa Morris</p>
            <p>Product Manager, Intel</p>
          </div>
          <img className='image' src='https://source.unsplash.com/IF9TK5Uy-KI' alt='Testimonial 1' />
        </li>
        <li ref={(element) => itemsRef.current.push(element)} className='item'>
          <div className='testimonial'>
            <p>"The perfect organizer and team builder"</p>
            <p>Randall Howard</p>
            <p>UX Designer, Netflix</p>
          </div>
          <img className='image' src='https://source.unsplash.com/C5XyLljkMrY' alt='Testimonial 2' />
        </li>
        <li ref={(element) => itemsRef.current.push(element)} className='item'>
          <div className='testimonial'>
            <p>"Flexible product with near endless possibilities"</p>
            <p>Adam Worrell</p>
            <p>Data Analyst, Spotify</p>
          </div>
          <img className='image' src='https://source.unsplash.com/e12wQLAjQi0' alt='Testimonial 3' />
        </li>
      </ul>
    </main>
  );
};

export default Reviews;