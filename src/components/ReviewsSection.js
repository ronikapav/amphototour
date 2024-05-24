import React, { useState, useCallback, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './Reviews.css';
import { slides } from './ReviewsData';

const ReviewsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
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

    /*const slides = [
      {
        icon: 'https://images.pexels.com/photos/21301309/pexels-photo-21301309.jpeg',
        image: 'https://cdn.pixabay.com/photo/2023/03/31/13/19/girl-7889973_1280.jpg',
        title: 'Юлия Паршина',
        tagline: 'Прошла классический мастер-класс по пейзажной съемке и отправилась в фототур "От Шанхая до Цветных гор".',
        text: '"Я всегда любила фотографировать, но после мастер-класса мои навыки значительно улучшились. Фототур помог мне использовать новые знания и создать незабываемые снимки. Это было невероятное путешествие, и я с нетерпением жду следующее!"',
      },
      {
        icon: 'https://images.pexels.com/photos/15422042/pexels-photo-15422042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        image: 'https://images.pexels.com/photos/4555524/pexels-photo-4555524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: 'Стас Егоров',
        tagline: 'Прошел мастер-класс по съемкам с дрона и отправился в фототур "Путешествие к Альпийским вершинам".',
        text: '  "Я давно увлекаюсь фотографией, и моя цель была научиться профессиональной съемке с использованием дрона. Благодаря мастер-классу я значительно улучшил свои навыки и успешно применил их во время фототура, создав впечатляющие снимки!',
      },

    ];*/
  
    const nextSlide = useCallback(() => {
        setCurrentSlide((currentSlide + 1) % slides.length);
      }, [currentSlide]);
    
      const prevSlide = useCallback(() => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
      }, [currentSlide]);
    
      return (
        <div className='reviews-container'>
            <span className="reviews-title">ЧТО ГОВОРЯТ
                <svg xmlns="\" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="reviews-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </span>
            <h1 className="heading-reviews-container">О ПЕЙЗАЖАХ, КОТОРЫЕ ВЕДУТ НАС К НОВЫМ ГОРИЗОНТАМ ТВОРЧЕСТВА</h1>
            <div className="slider">
                    <button ref={el=> previousRefs.current.push(el)} onClick={prevSlide} className="button btn-previous">
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
                    <ul className="cards">
                        {slides.map((slide, index) => (
                        <li key={index} style={{ display: index === currentSlide ? 'block' : 'none' }}>
                            <a href="/" className="card card_img">
                                <img src={`./${slide.image}.jpeg`} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                                            <path />
                                        </svg>
                                        <img className="card__thumb" src={`./${slide.icon}.jpeg`} alt="" />
                                        <div className="card__header-text">
                                            <h3 className="card__title">{slide.title}</h3>
                                            <span className="card__tagline">{slide.tagline}</span>
                                            {/* <span className="card__status">{slide.status}</span> */}
                                        </div>
                                    </div>
                                    <p className="card__description">{slide.text}</p>
                                </div>
                            </a>
                        </li>
                        ))}
                    </ul>
                    <button ref={el=> nextRefs.current.push(el)} onClick={nextSlide} className="button btn-next">
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
            </div>
        </div>
      );
  };
  
  export default ReviewsSection;