import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";
import circle from "./dash-circle.svg";
import oval from "./circle-ring.svg";
import wave from "./wave.svg";
import VFX from "./VFX.jpeg";
import Drone from "./Drone.jpeg";
import Video from "./Videography.jpeg";
import Photo from "./Photography.jpeg";

const HeroSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const introsplitTypes = document.querySelectorAll(".left-part h1");
    introsplitTypes.forEach((char, i) => {
      const i_text = new SplitType(char);
      gsap.to(i_text.chars, {
        y: i * 20,
        stagger: 0.08,
        duration: 1,
      });
    });

    const textChars = textRef.current;
    gsap.from(textChars, {
      opacity: 0,
      y: 20,
      duration: 2,
      stagger: 0.1,
      ease: "power3.out",
    });

    gsap.from(".box_box", {
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      onComplete: function() {
        gsap.to(".box_box", {
          opacity: 1,
          duration: 2,
          ease: "power3.out"
        });
      }
    });
  }, []);

  return (
    <section id="hero-section" className="info-section">
      <div className="left-part">
        <h1>
          <span className="d-flex">Фотопутешествия</span>
          <span ref={textRef} className="text">
            с лучшим трэвел-фотографом года
          </span>
        </h1>
        <p>ФОТОТУРЫ И МАСТЕР-КЛАССЫ ПЕЙЗАЖНОЙ ФОТОГРАФИИ АЛЕКСАНДРА МОРОЗОВА</p>
        <a href="#coming-tours-section" className="book-link">
          <span className="linktext">Забронируйте место прямо сейчас</span>
          <span className="arrow">
            <span></span>
          </span>
        </a>
      </div>
      <div className="right-part">
        <div className="bg-line">
          <img src={wave} alt="Line" />
          <img src={wave} alt="Line" />
        </div>

        <div className="main-grid d-flex">
          <div className="box box_box">
            <span>Фотография</span>
          </div>
          <div className="box box_box">
            <div className="bg-img bw">
              <img src={VFX} alt="VFX" />
            </div>
          </div>
          <div className="box box_box">
            <span>Съемка с дрона</span>
          </div>
          <div className="box box_box">
            <span>Визуальные эффекты</span>
          </div>
          <div className="box box_box">
            <div className="bg-img">
              <img src={Drone} alt="Drone Footage" />
            </div>
          </div>
          <div className="box box_box">
            <div className="bg-img">
              <img src={Video} alt="Videography" />
            </div>
          </div>
          <div className="box box_box">
            <span>Видеосьемка</span>
          </div>
          <div className="box box_box">
            <div className="bg-img bw">
              <img src={Photo} alt="Photography" />
            </div>
          </div>
        </div>

        <div className="bg-circle-h-line">
          <img src={oval} alt="Horizontal-circle" />
          <img src={oval} alt="Horizontal-circle" />
          <img src={oval} alt="Horizontal-circle" />
        </div>
        <div className="bg-dash-circle">
          <img src={circle} alt="dash-circle" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;