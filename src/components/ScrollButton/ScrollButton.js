import React, { useEffect, useState } from "react";
import "./ScrollButton.css";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowButton(scrollPosition > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-button button scroll-next button-to-top ${
        showButton ? "show" : ""
      }`}
      onClick={scrollToTop}
      aria-label="Наверх"
      title="Наверх"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollButton;