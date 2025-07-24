import React from 'react';
import '../styles/PortFolio.css';
import Footer from './Footer';
import Header from './Header';

const projects = [
  {
    title: 'project title',
    description: 'description',
    image: '/images/ecommerce.png',
    link: '#',
  },
  {
    title: 'project title',
    description: 'description.',
    image: '/images/booking.png',
    link: '#',
  },
  {
    title: 'project title',
    description: 'description',
    image: '/images/freelance.png',
    link: '#',
  },
];

function Portfolio() {
  return (
   <>
   <Header />
    <div className="portfolio-container py-5" id="portfolio">
      <div className="typewriter-container">
  <h2 className="typewriter mt-5 mb-5">OUR PORTFOLIO</h2>
</div>
 <div className="row g-4 mt-3" style={{margin:"10px"}}>
        {projects.map((proj, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card h-100 shadow-sm portfolio-card">
              <img src={proj.image} className="card-img-top" alt="img" />
              <div className="card-body">
                <h5 className="card-title">{proj.title}</h5>
                <p className="card-text">{proj.description}</p>
                <a href={proj.link} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Portfolio;
