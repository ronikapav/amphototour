import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/Hero/HeroSection';
import CreatorSection from './components/Creator/CreatorSection';
import VideoSection from './components/Video/VideoSection';
import ServicesSection from './components/Services/ServicesSection';
import ComingToursSection from './components/ComingTours/ComingToursSection';
import CertificateSection from './components/Certificate/CertificateSection';
import ReviewsSection from './components/Reviews/ReviewsSection';
import FooterSection from './components/Footer/FooterSection';
import ProductsSection from './components/Products/ProductsSection';
import Cart from './components/Cart/Cart';
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";
import ScrollButton from './components/ScrollButton/ScrollButton';
import Loader from './components/Loader/Loader';
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { BrowserRouter } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  
    gsap.fromTo(".All", {
      scale: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: ".All",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    }, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="All">
          <Loader />
        </div>
      ) : (
        <SnackbarProvider
          TransitionComponent={Slide}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <BrowserRouter>
            <NavBar />
            <Cart />
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
          </BrowserRouter>
        </SnackbarProvider>
      )}
      </div>
  );
}

export default App;