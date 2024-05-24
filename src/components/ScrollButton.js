import React, { useEffect, useState } from 'react';
import './ScrollButton.css';
import { FaArrowUp } from 'react-icons/fa';

const ScrollButton = () => {
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.pageYOffset;
        setShowButton(scrollPosition > 200); // Показываем кнопку, если пользователь прокрутил страницу более чем на 200px
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <button
        className={`scroll-button button scroll-next button-to-top ${showButton ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Наверх"
      >
                <FaArrowUp/>
      </button>
    );
  };
  
  export default ScrollButton;