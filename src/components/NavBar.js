import './NavBar.css';
import React, { useEffect, useState } from "react";
// React bootstrap component for the NavBar
import { Navbar, Nav, Container } from "react-bootstrap";
// Style the NavBar component
import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
// import NavBarProducts from "./NavBarProducts";

import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from './cartSlice';
import ModalNavBar from './ModalNavBar';
import logo from '../assets/logo.png';

function NavBar() {
  // Difine the state for the active links
  const [activeLink, setactiveLink] = useState("home");
  // Difine the state for the scroll position
  const [scrolled, setScrolled] = useState(false);
  // UseEffect to set Scrolled to true when the user scrolls down
  const [menuOpen, setMenuOpen] = useState(false);


  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }



  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();


  const handleOpenCart = (open) => {
      dispatch(toggleCart(open));
  };


  const cartQuantity = cartItems.length;



  const handleToggleClick = () => {
    setMenuOpen(!menuOpen);
  };



  
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    // when scrolling, set the state of the scrolled variable
    window.addEventListener("scroll", onScroll);
    return () => {
      // when the component is unmounted, remove the event listener
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  // Update the active link when the user clicks on a link
  const onUpdateActiveLink = (value) => {
    setactiveLink(value);
  };

  // And return the NavBar component with JSX
  return  <Navbar collapseOnSelect expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#hero-section">
          <img className='logo' src={logo} alt="Line" />
          </Navbar.Brand>
          <div
          title="Cart"
          className="shoppingIcon block"
          onClick={() => handleOpenCart(true)}
          >
            <img src="https://rafaelalucas.com/dailyui/12/assets/shopping-cart.svg" alt="bag-icon" />
            {cartQuantity > 0 && <span className="itemNumber">{cartQuantity}</span>}
          </div>
          {/* <Navbar.Toggle className="border-light text-light" aria-controls="basic-navbar-nav" onClick={handleToggleClick}> */}
          <Navbar.Toggle className={`icon nav-icon-1 ${menuOpen ? 'open' : ''}`} aria-controls="basic-navbar-nav" onClick={handleToggleClick}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
          {/* <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? "open" : ""}> */}
            <Nav className="me-auto">
              <Nav.Link
                href="#video-section"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Проект
              </Nav.Link>
              <Nav.Link
                href="#coming-tours-section"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Туры
              </Nav.Link>
              <Nav.Link
                href="#products-section"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Обучение
              </Nav.Link>
              <Nav.Link
                href="#footer-section"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Связь
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <span className="social-icons">
                {/* Github */}
                <a href="https://www.youtube.com/your_channel" target="_blank" rel="noopener noreferrer">
                  {/* <i className="bi bi-github"></i> */}
                  <FaYoutube className="github" />
                </a>
                {/* LinkedIn */}
                <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer">
                  {/* <i className="bi bi-linkedin"></i> */}
                  <FaFacebook />
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer">
                  {/* <i className="bi bi-instagram"></i> */}
                  <FaInstagram />
                </a>
              </span>
              <button
                className="vvd"
                onClick={openModal}
              >
                Забронировать
              </button>
            </span>
          </Navbar.Collapse>
          <div
          title="Cart"
          className="blockTwo shoppingIcon"
          onClick={() => handleOpenCart(true)}
          >
            <img src="https://rafaelalucas.com/dailyui/12/assets/shopping-cart.svg" alt="bag-icon" />
            {cartQuantity > 0 && <span className="itemNumber">{cartQuantity}</span>}
          </div>
          <ModalNavBar isOpen={modalIsOpen} onRequestClose={closeModal} />
          {/* <NavBarProducts/> */}
        </Container>
      </Navbar>
}

export default NavBar;