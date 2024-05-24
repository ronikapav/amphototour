/*import { useState, useEffect } from "react";
import { gsap, CSSPlugin, Expo } from "gsap";
import "./Loader.css";
import logo from '../assets/logo.png';

const Preloader = ({ setLoading }) => {
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
      const count = setInterval(() => {
        setCounter((counter) =>
          counter < 100
            ? counter + 1
            : (clearInterval(count), setCounter(100), reveal())
        );
      }, 25);
    }, []);
  
    async function reveal() {
      const t1 = gsap.timeline({});
  
      await t1
        .to(".follow", {
          width: "100%",
          ease: Expo.easeInOut,
          duration: 1.2,
          delay: 0.5,
        })
        .to(".hide", { opacity: 0, duration: 0.3 })
        .to(".follow", {
          height: "100%",
          ease: Expo.easeInOut,
          duration: 0.7,
        })
        .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 2.7 })
        .to(".loading", { opacity: 0, duration: 1, ease: Expo.easeInOut, onComplete: () => setLoading(false) });
    }
  
    return (
      <div className="app-container">
        <div className="loading">
          <div className="follow"></div>
          <div id="progress-bar" className="progress-bar hide" style={{ width: counter + "%" }}></div>
        </div>
        <div className="content"><img className='logo' src={logo} alt="Line" /></div>
      </div>
    );
  };
  
  export default Preloader;*/
  import React, { useEffect, useRef } from 'react';
  import { gsap } from 'gsap';
  import './Loader.css';
  import logo from '../assets/Logotype.png';
  
  const Loader = () => {
    const imgRef = useRef(null);
    useEffect(() => {
      const imgElement = imgRef.current;
      const tl = gsap.timeline({ paused: true });
  
      tl.to(".panel:first-child, .panel:last-child", {
        scaleY: 1,
        duration: 1,
        ease: "power2.out" // Apply easing for smoother scaling
      })
      .to(
        ".panel:not(:first-child):not(:last-child)",
        { scaleY: 1, ease: "power2.out" }, // Apply easing for smoother scaling
        "-=0.5"
      )
      .to(".panel", {
        scaleY: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.inOut" // Apply easing for smoother scaling
      })
  
      tl.to(imgElement, {
        scale: 1.2,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out" // Apply easing for smoother scaling and opacity change
      })
      .to(
        imgElement,
        { scale: 1, opacity: 0, duration: 0.5, ease: "power2.inOut" }, // Apply easing for smoother scaling and opacity change
        "+=0.3"
      );
  
      tl.play();
    }, []);
  
    return (
      <div>
        <ul className="panels">
          <li className="panel"></li>
          <li className="panel"></li>
          <li className="panel"></li>
          <li className="panel"></li>
          <li className="panel"></li>
          <li className="panel"></li>
        </ul>
        <div className='TheLogo'>
          <img ref={imgRef} className='Logotype' src={logo} alt="Line" style={{ opacity: 0 }} />
        </div>
      </div>
    );
  };
  
  export default Loader;