import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../styles/Header.css';

function Header() {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate('/contact');
  };

  return (
    <header>
      {/* Top Blue Bar */}
      <div className="top-bar d-flex justify-content-between align-items-center px-3">
        <div className="contact-info d-flex align-items-center">
          <span className="mx-3"><i className="bi bi-envelope"></i> www.wahylab.com</span>
          <span><i className="bi bi-telephone"></i> 6383370277 / 836573555363</span>
          <span><i className="bi bi-clock"></i> Mon - Fri: 9:00 - 5:45</span>
        </div>
        <div className="social-icons">
          <span>Follow Us: </span>
          <a href="#"><i className="bi bi-facebook"></i></a>
          <a href="#"><i className="bi bi-instagram"></i></a>
          <a href="#"><i className="bi bi-linkedin"></i></a>
          <a href="#"><i class="bi bi-youtube"></i></a>
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
          </svg></a>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar expand="lg" className="main-navbar shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/"> 
            <img src="/assets/logo.png" alt="Logo" height="70" width="100" className="me-2" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/">HOME</Nav.Link>
              <Nav.Link as={Link} to="/about">OUR STORY</Nav.Link>
              <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
              <Nav.Link as={Link} to="/internship">INTERNSHIP</Nav.Link>
              <Nav.Link as={Link} to="/portfolio">PORTFOLIO</Nav.Link>
              <Nav.Link as={Link} to="/career">CAREER</Nav.Link>
              <Nav.Link as={Link} to="/blog">BLOG</Nav.Link>
            </Nav>

            <div className="d-flex align-items-center ms-3">
              <i className="bi bi-search search-icon me-3"></i>
              <button className="sparkle-button" onClick={handleclick}>
                CONTACT US →
                <span className="stars">✨</span>
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
