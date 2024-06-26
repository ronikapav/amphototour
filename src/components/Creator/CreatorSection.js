import React, { useEffect, useState } from "react";
import "./Creator.css";
import alex from "../../assets/alex-photo.png";

const CreatorSection = () => {
  const [isButtonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  useEffect(() => {
    if (isButtonClicked) {
      const instagramUrl = "https://www.instagram.com/your_username";
      window.open(instagramUrl, "_blank");
      setButtonClicked(false);
    }
  }, [isButtonClicked]);

  return (
    <div className="author-container">
      <span className="about-title">
        ЧТО Я ДЕЛАЮ
        <svg
          xmlns="\"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="about-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </span>
      <h1 className="author-title">ОТКРЫВАЮ МИР ЧЕРЕЗ ОБЪЕКТИВ</h1>

      <div className="author-content">
        <div className="author-post">
          <div className="author-excerpt author-card">
            <header className="author-header">
              <h2 className="author-h1">Меня зовут Александр Морозов</h2>
            </header>
            <p className="author-p">
            Вот уже 15 лет моя главная страсть - пейзажная фотография. Ради
            красивого кадра я готов вставать задолго до рассвета и ложиться
            глубоко заполночь. Я карабкался на барханы в пылевую бурю и
            ночевал на извергающемся вулкане.
            </p>
            <div className="author-cta">
              <button className="author-btn" onClick={handleButtonClick}>
              ПОДРОБНЕЕ
              </button>
            </div>
          </div>
          <img className="author-image" src={alex} alt="Alex Morozov" />
        </div>
      </div>
    </div>
  );
};

export default CreatorSection;