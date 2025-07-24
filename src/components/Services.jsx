import React from 'react';
import '../styles/Services.css';
import Header from './Header';
import Footer from './Footer';

const services = [
  {
    title: 'SEO & DIGITAL MARKETING',
    description: 'SEO, SEM, email, and social media marketing using tools like Google Ads, Facebook Ads, Mailchimp, and more.',
    icon: 'bi-bullseye',
  },
  {
    title: 'ERP SOLUTIONS',
    description: 'Centralize your business functions via desktop or web-based ERP with CRM, project management, and more.',
    icon: 'bi-gear',
  },
  {
    title: 'MOBILE APP DEVELOPMENT',
    description: 'We develop feature-rich Android, iOS, and Hybrid apps for business, healthcare, media, and more.',
    icon: 'bi-phone',
  },
  {
    title: 'CRM DEVELOPMENT',
    description: 'Standard/custom CRM to track contacts, sales, tasks, and grow your business.',
    icon: 'bi-people',
  },
 
  {
    title: 'UI & UX DESIGN',
    description: 'Creative UI/UX, branding, logos, taglines, and responsive interfaces.',
    icon: 'bi-vector-pen',
  },
  {
    title: 'WEB HOSTING & DOMAIN',
    description: 'Domain registration, hosting, VPS, WHOIS, DNS management & more with Wahy Host.',
    icon: 'bi-hdd-network',
  },
  {
    title: 'VOIP & IVR SERVICES',
    description: 'VoIP systems and custom IVR menus to improve customer service and routing.',
    icon: 'bi-headset',
  },
  {
    title: 'SOFTWARE TESTING',
    description: 'Manual & automated testing to ensure quality and functionality.',
    icon: 'bi-bug',
  },
  {
    title: 'BULK SMS & EMAIL',
    description: 'Reach your audience with affordable bulk SMS and email marketing services.',
    icon: 'bi-envelope-paper',
  },
  {
    title: 'CLOUD SOLUTIONS',
    description: 'Cloud platforms that enable mobility, analytics, and social integration.',
    icon: 'bi-cloud-check',
  },
];

const Services = () => {
  return (
    <>
      <Header />

      <div className="container-fluid py-5 wow fadeInUp" style={{backgroundColor:"rgb(237, 242, 240)"}} data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: '700px' }}
          >
            <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
            {/* <h2 className="mt-5">Custom IT Solutions for Your Successful Business</h2> */}
      <div className="typewriter-container mt-5">
  <h2 className="typewriter">OUR CUSTOM IT SERVICES</h2>
</div>

          </div>

          <div className="row service-container g-4">
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="service-item bg-light rounded d-flex flex-column align-items-center text-center p-4 h-100 shadow-sm">
                  <div className="service-icon  mb-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', color:' rgb(100, 12, 93)'}}>
                    <i className={`bi ${service.icon} fs-4`}></i>
                  </div>
                  <h4 className="mb-2">{service.title}</h4>
                  <p className="mb-3">{service.description}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
