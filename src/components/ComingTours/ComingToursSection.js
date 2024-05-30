import React from "react";
import ComingToursCard from "./ComingToursCard";
import "./ComingTours.css";
import africa from "./south-africa.png";
import indonesia from "./indonesia.png";
import algeria from "./algeria.png";
import AfricaTours from './AfricaTours';
import IndonesiaTours from "./IndonesiaTours";
import AlgeriaTours from "./AlgeriaTours";

const ComingToursSection = () => (
  <section id="coming-tours-section" className="coming-tours-section">
    <span className="coming-tours-title">
      ЧТО Я ПРЕДОСТАВЛЯЮ
      <svg
        xmlns="\"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="coming-tours-icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>
    </span>
    <h1 className="tours-title">ВОЗМОЖНОСТЬ ИССЛЕДОВАТЬ МИР ВМЕСТЕ СО МНОЙ!</h1>
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
          timer={<AfricaTours/>}
        />
        <ComingToursCard
          backgroundUrl={indonesia}
          imageUrl={indonesia}
          title="ИНДОНЕЗИЯ"
          meta="Семь островов"
          date="3 - 13 сентября 2024 года"
          author="Алекс Морозов"
          authorRole="Гид"
          timer={<IndonesiaTours/>}
        />
        <ComingToursCard
          backgroundUrl={algeria}
          imageUrl={algeria}
          title="АЛЖИР"
          meta="Дюны Сахары"
          date="15 - 22 декабря 2024 года"
          author="Алекс Морозов"
          authorRole="Гид"
          timer={<AlgeriaTours/>}
        />
      </div>
    </div>
  </section>
);

export default ComingToursSection;