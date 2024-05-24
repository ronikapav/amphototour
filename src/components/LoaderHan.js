import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './components/Loader.css';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import HeroSection from './components/HeroSection';
import CreatorSection from './components/CreatorSection';
import VideoSection from './components/VideoSection';
import ServicesSection from './components/ServicesSection';
import ComingToursSection from './components/ComingToursSection';
import CertificateSection from './components/CertificateSection';
import ReviewsSection from './components/ReviewsSection';
import FooterSection from './components/FooterSection';
import ProductsSection from './components/ProductsSection';
import ScrollButton from './components/ScrollButton';
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";
import React, { useState, useEffect } from "react";
import { gsap } from 'gsap';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(".panel:first-child, .panel:last-child", {
      scaleY: 1,
      duration: 1
    })
    .to(
      ".panel:not(:first-child):not(:last-child)",
      { scaleY: 1 },
      "-=0.5"
    )
    .to(".panel", {
      scaleY: 0,
      duration: 0.3,
      stagger: 0.05
    })
    .to(".panels", {
      clipPath: "circle(0%)",
      skewX: 0,
      duration: 1
    })
    .to(
      ".page-main",
      {
        clipPath: "circle(100%)",
        duration: 1
      },
      "-=0.3"
    );

    tl.play();

    setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      tl.progress(1).kill(); // Плавно останавливаем анимацию, когда компонент размонтируется
    };
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <ul className="panels">
            <li className="panel"></li>
            <li className="panel"></li>
            <li className="panel"></li>
            <li className="panel"></li>
            <li className="panel"></li>
            <li className="panel"></li>
          </ul>
          {/* <main className="page-main">
          </main> */}
        </div>
      ) : (
        <div className="App">
          <SnackbarProvider
            TransitionComponent={Slide}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
                <header class="page-header">
              <NavBar />
              <Cart />
              </header>
              <ul class="panels">
      <li class="panel"></li>
      <li class="panel"></li>
      <li class="panel"></li>
      <li class="panel"></li>
      <li class="panel"></li>
      <li class="panel"></li>
    </ul>
    <main className="page-main">
              <HeroSection />
              <CreatorSection />
              <VideoSection />
              <ServicesSection />
              <ComingToursSection />
              <ProductsSection />
              <CertificateSection />
              <ReviewsSection />
              <FooterSection />
              <ScrollButton />
              </main>
          </SnackbarProvider>
        </div>
      )}
    </>
  );
}

export default App;