import { useState } from "react";
import "./Certificate.css";
import Modal from "../Modal/Modal";
import Certificate from "../../assets/certificate.png";

const CertificateSection = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="certificate-container">
      <span className="certificate-title">
        ЧТО ПОДАРИТЬ
        <svg
          xmlns="\"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="certificate-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </span>
      <h1 className="certificate-title-h1">
        КОГДА ВАШ ДРУГ ИЛИ БЛИЗКИЙ ЧЕЛОВЕК УВЛЕКАЕТСЯ ФОТОГРАФИЕЙ?
      </h1>
      <div className="certificate-content">
        <div className="certificate-post">
          <img
            className="certificate-image"
            src={Certificate}
            alt="Сертификат"
          />
          <div className="certificate-excerpt certificate-card">
            <header className="certificate-header">
              <h2 className="certificate-h1">ПОДАРОЧНЫЙ СЕРТИФИКАТ</h2>
            </header>
            <p className="certificate-p">
              Подарочный сертификат на онлайн мастер-класс по обработке
              фотографий от Алекса Морозова. Один сертификат - один урок. Доступ
              к урокам предоставляется бессрочно. Можно покупать любое
              количество сертификатов. Приятного просмотра и новых знаний!
            </p>
            <div className="certificate-cta">
              <button className="certificate-btn" onClick={openModal}>
                КУПИТЬ
              </button>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateSection;