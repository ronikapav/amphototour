import React from 'react';
import ComingToursCard from './ComingToursCard';
import './ComingTours.css';
import africa from '../assets/south-africa.png';
import indonesia from '../assets/indonesia.png';
import algeria from '../assets/algeria.png';

const ComingToursSection = () => (
    <section id="coming-tours-section" className="coming-tours-section">
      {/* <section className="services-section"> */}
      <span className="coming-tours-title">ЧТО Я ПРЕДОСТАВЛЯЮ 
        <svg xmlns="\" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="coming-tours-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </span>
      <h1 className="tours-title">ВОЗМОЖНОСТЬ ИССЛЕДОВАТЬ МИР ВМЕСТЕ СО МНОЙ!</h1>
        {/* <div className="row">
          <div className="col text-center mb-5">
            <h1 className="display-4 font-weight-bolder">Bootstrap 4 Cards With Background Image</h1>
            <p className="lead">Lorem ipsum dolor sit amet at enim hac integer volutpat maecenas pulvinar.</p>
          </div>
        </div> */}
        <div className="container">
        <div className="row">
          <ComingToursCard
            backgroundUrl={africa}
            imageUrl={africa}
            title="ЮАР"
            meta="Тайны двух океанов"
            date="20 - 28 июня 2024 года"
            author="Алекс Морозов"
            authorRole="Гид"
          />
          <ComingToursCard
            backgroundUrl={indonesia}
            imageUrl={indonesia}
            title="ИНДОНЕЗИЯ"
            meta="Семь островов"
            date="3 - 13 сентября 2024 года"
            author="Алекс Морозов"
            authorRole="Гид"
          />
          <ComingToursCard
            backgroundUrl={algeria}
            imageUrl={algeria}
            title="АЛЖИР"
            meta="Дюны Сахары"
            date="15 - 22 декабря 2024 года"
            author="Алекс Морозов"
            authorRole="Гид"
          />
        </div>
      </div>
    </section>
  );
  
  export default ComingToursSection;