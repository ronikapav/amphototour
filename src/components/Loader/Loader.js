import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Loader.css";
import logo from "./Logotype.png";

const Loader = () => {
  const imgRef = useRef(null);
  useEffect(() => {
    const imgElement = imgRef.current;
    const tl = gsap.timeline({ paused: true });

    tl.to(".panel:first-child, .panel:last-child", {
      scaleY: 1,
      duration: 1,
      ease: "power2.out",
    })
      .to(
        ".panel:not(:first-child):not(:last-child)",
        { scaleY: 1, ease: "power2.out" },
        "-=0.5"
      )
      .to(".panel", {
        scaleY: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.inOut",
      });

    tl.to(imgElement, {
      scale: 1.2,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    }).to(
      imgElement,
      { scale: 1, opacity: 0, duration: 0.5, ease: "power2.inOut" },
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
      <div className="TheLogo">
        <img
          ref={imgRef}
          className="Logotype"
          src={logo}
          alt="Line"
          style={{ opacity: 0 }}
        />
      </div>
    </div>
  );
};

export default Loader;