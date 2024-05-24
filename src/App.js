import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import CreatorSection from './components/CreatorSection';
import VideoSection from './components/VideoSection';
import ServicesSection from './components/ServicesSection';
import ComingToursSection from './components/ComingToursSection';
import CertificateSection from './components/CertificateSection';
import ReviewsSection from './components/ReviewsSection';
import FooterSection from './components/FooterSection';
import ProductsSection from './components/ProductsSection';
import Cart from './components/Cart';
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";
import ScrollButton from './components/ScrollButton';
import Loader from './components/Loader';
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      gsap.fromTo(".Add", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "power.out" });
    }, 3000);
  
    // Replace the GSAP animation with ScrollTrigger
    gsap.fromTo(".All", {
      scale: 0,
      opacity: 0,
      scrollTrigger: {
        trigger: ".Add",
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
          <NavBar />
          <Cart />
        <div className="Add">
          <HeroSection />
          <CreatorSection />
          <VideoSection />
          <ServicesSection />
          <ComingToursSection />
          <ProductsSection />
          <CertificateSection />
          <ReviewsSection />
          <FooterSection />
          </div>
          <ScrollButton />
        </SnackbarProvider>
        )}
    </div>
  );
}

export default App;