import React from "react";
import ComingToursCard from "./ComingToursCard";
import "./ComingTours.css";
import { comingToursData } from "../../data/ComingTours/comingToursData";

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
        {comingToursData.map((tour, index) => (
          <ComingToursCard
            key={index}
            backgroundUrl={tour.backgroundUrl}
            imageUrl={tour.imageUrl}
            title={tour.title}
            meta={tour.meta}
            date={tour.date}
            author={tour.author}
            authorRole={tour.authorRole}
            timer={tour.timer}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ComingToursSection;