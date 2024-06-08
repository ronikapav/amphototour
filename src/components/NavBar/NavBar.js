import "../NavBar/NavBar.css";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ModalNavBar from "../Modal/ModalNavBar";
import logo from "../../assets/logo.png";
import { toggleCart } from "../../redux/Cart/cartSlice";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
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

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#hero-section">
          <img title="Главная" className="logo" src={logo} alt="Line" />
        </Navbar.Brand>
        <div
          title="Cart"
          className="shoppingIcon block"
          onClick={() => handleOpenCart(true)}
        >
          <img
            src="https://rafaelalucas.com/dailyui/12/assets/shopping-cart.svg"
            alt="bag-icon"
          />
          {cartQuantity > 0 && (
            <span className="itemNumber">{cartQuantity}</span>
          )}
        </div>
        <Navbar.Toggle
          className={`icon nav-icon-1 ${menuOpen ? "open" : ""}`}
          aria-controls="basic-navbar-nav"
          onClick={handleToggleClick}
        >
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
          <Nav className="me-auto">
            <Nav.Link
              href="#video-section"
              className={
                activeLink === "Проект" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("Проект");
                handleLinkClick();
              }}
            >
              Проект
            </Nav.Link>
            <Nav.Link
              href="#coming-tours-section"
              className={
                activeLink === "Туры" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("Туры");
                handleLinkClick();
              }}
            >
              Туры
            </Nav.Link>
            <Nav.Link
              href="#products-section"
              className={
                activeLink === "Обучение" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("Обучение");
                handleLinkClick();
              }}
            >
              Обучение
            </Nav.Link>
            <Nav.Link
              href="#footer-section"
              className={
                activeLink === "Связь" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {
                onUpdateActiveLink("Связь");
                handleLinkClick();
              }}
            >
              Связь
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <span className="social-icons">
              <a
                href="https://www.youtube.com/your_channel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="github" />
              </a>
              <a
                href="https://www.facebook.com/your_username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/your_username"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </span>
            <button className="vvd" onClick={openModal}>
              Забронировать
            </button>
          </span>
        </Navbar.Collapse>
        <div
          title="Корзина"
          className="blockTwo shoppingIcon"
          onClick={() => handleOpenCart(true)}
        >
          <img
            src="https://rafaelalucas.com/dailyui/12/assets/shopping-cart.svg"
            alt="bag-icon"
          />
          {cartQuantity > 0 && (
            <span className="itemNumber">{cartQuantity}</span>
          )}
        </div>
        <ModalNavBar isOpen={modalIsOpen} onRequestClose={closeModal} />
      </Container>
    </Navbar>
  );
}

export default NavBar;