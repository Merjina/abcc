import React from 'react';
import '../styles/Contact.css';
import Header from './Header';
import Footer from './Footer';

function ContactUs() {
  return (
    <>
      <Header />
      <div className="contact-page py-5">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold">Contact Us</h2>

          <div className="row g-4">
            {/* Contact Info */}
            <div className="col-md-6">
              <div className="contact-info">
                <h5 className="fw-bold mb-3">Reach Us</h5>
                <p>
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  D7, 7th Floor, Heavenly Plaza,<br />
                  Civil Line Road, Vazhakkala,<br />
                  Kakkanad, Ernakulam, Kerala, INDIA<br />
                  PIN: 682021
                </p>

                <h5 className="fw-bold mt-4">Mail Us</h5>
                <p>
                  <i className="bi bi-envelope-fill me-2"></i>
                  <a href="mailto:info@wahylabsolutions.com">info@wahylabsolutions.com</a>
                </p>

                <h5 className="fw-bold mt-4">Call Us</h5>
                <p>
                  <i className="bi bi-telephone-fill me-2"></i>
                  +91-974-777-6355<br />
                  <i className="bi bi-telephone-fill me-2"></i>
                  +91-80896-27761
                </p>
              </div>
            </div>

            {/* Map Embed */}
            <div className="col-md-6">
              <div className="map-responsive">
                <iframe
                  title="Company Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.1538878967476!2d76.33410307481664!3d9.975189273675267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d2b0f86b68f%3A0xc52bb20c282f63b0!2sHeavenly%20Plaza%2C%20Civil%20Line%20Rd%2C%20Padamughal%2C%20Kakkanad%2C%20Kochi%2C%20Kerala%20682021!5e0!3m2!1sen!2sin!4v1690231601815!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
