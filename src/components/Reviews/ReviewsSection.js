import React, { useState, useCallback } from 'react';
import { slides } from "../../data/Reviews/reviewsData";
import PreviousButton from './PreviousButton';
import NextButton from './NextButton';
import "./Reviews.css"

const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide]);

  return (
    <div className="reviews-container">
      <span className="reviews-title">
        ЧТО ГОВОРЯТ
        <svg
          xmlns="\"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="reviews-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </span>
      <h1 className="heading-reviews-container">
        О ПЕЙЗАЖАХ, КОТОРЫЕ ВЕДУТ НАС К НОВЫМ ГОРИЗОНТАМ ТВОРЧЕСТВА
      </h1>
      <div className="slider">
      <PreviousButton onClick={prevSlide} />
        <ul className="cards">
          {slides.map((slide, index) => (
            <li
              key={index}
              style={{ display: index === currentSlide ? "block" : "none" }}
            >
              <a href="/" className="card card_img">
                <img
                  src={slide.image}
                  className="card__image"
                  alt=""
                />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img
                      className="card__thumb"
                      src={slide.icon}
                      alt=""
                    />
                    <div className="card__header-text">
                      <h3 className="card__title">{slide.title}</h3>
                      <span className="card__tagline">{slide.tagline}</span>
                    </div>
                  </div>
                  <p className="card__description">{slide.text}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <NextButton onClick={nextSlide} />
      </div>
    </div>
  );
};

export default ReviewsSection;