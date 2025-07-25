import React from 'react';
import '../styles/Services.css';
import Header from './Header';
import Footer from './Footer';

const services = [
  {
    title: 'SEO & DIGITAL MARKETING',
    description: 'We are a leading Digital Marketing company in Kochi, offering services like SEO, SEM, AdWords, Email Marketing, and Social Media Promotion. Our expertise spans paid platforms such as Google AdWords, Facebook Ads, Twitter Ads, and LinkedIn Ads to boost visibility. We specialize in improving keyword rankings on search engines like Google, Bing, and Yahoo, driving organic traffic effectively. Our Email Marketing services utilize tools like Mailchimp, Sendgrid, and others to enhance audience engagement and conversion rates.',
    icon: 'bi-bullseye',
  },
  {
    title: 'ERP SOLUTIONS',
    description: 'Wahy Lab’s ERP ( Ready to use /Customized ) provide projects, and management function, and all business processes in one centralized, Windows (Desktop apps) or web-based system, delivered as an ongoing service. Most businesses start with an out-of-the-box CRM system, designed around a common principle: Keep track of contacts, customers, opportunities, and orders, and you’ll see sales increase.', icon: 'bi-gear',
  },
  {
    title: 'MOBILE APP DEVELOPMENT',
    description: 'Our app development team is one of the leading Mobile application development companies in Kerala. We have developed feature rich Android / BB / windows / Hybrid mobile apps used in such different fields as business, technology, healthcare, media and entertainment just to name a few.',
    icon: 'bi-phone',
  },
  {
    title: 'CRM DEVELOPMENT',
    description: 'Most businesses that use CRM software leverage it for sales and Services because it helps keep customer and potential customer contact information in one place. CRM also keeps records of sales, potential sales, Services, tasks and actions that require follow-up. Most sales reps live by their contact data it can be motivating with target goals and daily tasks, and keeps indispensable information handy to make sales. Most businesses begin with a standard CRM system to track contacts, customers, opportunities, and orders, boosting sales. If you’re considering CRM for a small business, take into account your plans for growth.',
    icon: 'bi-people',
  },
 
  {
    title: 'UI & UX DESIGN',
    description: 'Our specialist group brings digital thoughts in accordance with lifestyles together with fantastically executed, innovative design. Every industry experiences adjustments of vogue yet style based regarding something is popular. This is able to brand their firm and how that evolves during its history. Logo, brand name, taglines, User interface are designed with creative and effort.',
    icon: 'bi-vector-pen',
  },
  {
    title: 'WEB HOSTING & DOMAIN',
    description: 'Wahy Host is one of the leading providers of a wide spectrum of domain services. We have vast experience to our aid, which we leverage to provide worldclass services to help enterprises scale new heights. Our core competencies include domain name registration, website hosting, email hosting, VPS hosting and more. We also offer various value-added services, such as WHOIS, DNS management, and premium domain sales, apart from promising comprehensive assistance to our customers.',
    icon: 'bi-hdd-network',
  },
  {
    title: 'VOIP & IVR SERVICES',
    description: 'Voice over internet protocol (VoIP) technology continues to gain greater acceptance as a reliable communication solution that small and mid-sized enterprises (and even large corporations) rely upon. An IVR is a telephony menu system that allows segmentation and routing of callers to the most appropriate agents within your team. By recording customized welcome greetings you can provide a more personalized experience to your customers when they call on your business number.',
    icon: 'bi-headset',
  },
  {
    title: 'SOFTWARE TESTING',
    description: 'Software testing is the quality measures conducted to provide stakeholders with information about the quality of the product or service. Test techniques involve executing a program to identify software bugs and ensure its functionality.',
    icon: 'bi-bug',
  },
  {
    title: 'BULK SMS & EMAIL',
    description: 'We would like to introduce you our bulk SMS service, that helps you to expand your business’s ability across India. SMS Marketing Service delivers business news, promotions, and updates directly to your target customers.',
    icon: 'bi-envelope-paper',
  },
  {
    title: 'CLOUD SOLUTIONS',
    description: 'Wahy Lab Solutions can help organizations to map its digital future in the Cloud. More and more product applications and organizations are looking at their operations and solutions more holistically. Creating a game plan for using cloud computing to your advantage is a necessity now. A cloud platform presence underpins mobility, analytics and social media.',
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
                  <p className="mb-3" style={{textAlign:"justify"}}>{service.description}</p>
                  
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
