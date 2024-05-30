import React from "react";
import "./Services.css";

function ServicesSection() {
  return (
    <section className="services-section">
      <span className="favors-title">
        ЧТО Я ПРЕДЛАГАЮ
        <svg
          xmlns="\"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="favors-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </span>
      <h1 className="services-title">
        ОТКРЫТЬ НОВЫЕ ГОРИЗОНТЫ КОМФОРТА И УЮТА В ПУТЕШЕСТВИИ!
      </h1>
      <div className="grid-offer grid-offer-styles">
        <div className="services-card favors-card">
          <div className="services-circle"></div>
          <div className="services-card-content services-card-left">
            <div className="services-header">
              <h2 className="services-card-title">Избранные места</h2>
            </div>
            <p className="services-card-description">
              Я тщательно подбираю впечатляющие места для путешествий, проверяю
              их на себе, чтобы показать Вам самые фотогеничные места на
              планете!
            </p>
          </div>
        </div>
        <div className="services-card favors-card">
          <div className="services-circle"></div>
          <div className="services-card-content services-card-right">
            <div className="services-header">
              <h2 className="services-card-title">Комфортные условия</h2>
            </div>
            <p className="services-card-description">
              Я выбираю лучшие варианты размещения для путешествий: дома и отели
              с уютом и стилем, чтобы ваш отдых был комфортным и незабываемым!
            </p>
          </div>
        </div>
        <div className="services-card favors-card">
          <div className="services-circle"></div>
          <div className="services-card-content services-card-left">
            <div className="services-header">
              <h2 className="services-card-title">Удобная логистика</h2>
            </div>
            <p className="services-card-description">
              Я организую логичный и удобный порядок посещения мест, чтобы
              каждое из них вызывало восхищение в самое наилучшее время суток!
            </p>
          </div>
        </div>
        <div className="services-card favors-card">
          <div className="services-circle"></div>
          <div className="services-card-content services-card-right">
            <div className="services-header">
              <h2 className="services-card-title">Маленькие группы</h2>
            </div>
            <p className="services-card-description">
              Группы до 8 человек, где Вы общаетесь с увлеченными и творческими
              людьми, наполняясь положительными эмоциями и вдохновением!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;