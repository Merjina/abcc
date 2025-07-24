import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
function Footer() {
  return (
    <footer className="footer pt-4">
      <div className="container">
        <div className="row">

          {/* Logo & Address */}
          <div className="col-md-4 mb-4">
          <img src="/assets/logo.png" alt="Logo" height="60" width="100" className="mb-3" />
              <p className="small">
              D7, 7th Floor, Heavenly Plaza, Civil Line Road, Vazhakkala,<br />
              Kakkanad, Ernakulam, Kerala, INDIA PIN: 682021
            </p>
            <p className="small mb-1">📞 +91-974-777-6355, +91-80896-27761</p>
            <p className="small">📧 info@wahylab.com</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4 footer-nav">
            <h5 className="footer-title">QUICK LINKS</h5>
            <ul className="list-unstyled small">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">SERVICES</h5>
            <ul className="list-unstyled small">
              <li>ERP Solutions</li>
              <li>Mobile App Development</li>
              <li>CRM Development</li>
              <li>Web Development</li>
              <li>UI and UX Development</li>
              <li>Cloud Based Solutions</li>
              <li>Social Media Marketing</li>
              <li>Search Engine Optimisation</li>
            </ul>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="row border-top pt-3 mt-3 justify-content-between align-items-center">
          <div className="col-md-6 small mx-auto text-right">
            <p className="mb-0">ISO 9001:2015 Certified Company</p>
            <p className="mb-0">&copy; {new Date().getFullYear()} WAHY LAB SOLUTIONS</p>
          </div>

          <div className="col-md-6 text-end">
            <div className="social-icons">
              <i className="bi bi-facebook me-3"></i>
              <i className="bi bi-instagram me-3"></i>
              <i className="bi bi-linkedin me-3"></i>
              <i class="bi bi-youtube me-3"></i>
         
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
