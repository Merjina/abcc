import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import '../styles/SkillsCarousel.css';
import Header from './Header';
import Footer from './Footer';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaChartLine, FaUsers, FaMobileAlt, FaPaintBrush,
  FaBug, FaSms, FaPhoneAlt, FaCloud
} from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Icons from './Icons';

import { useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();
  const domains = [
    "Businesses", "Social Networking", "Travel", "E-Commerce", "Education",
    "Real Estate", "Events & Tickets", "Advertising & Publishing", "Health"
  ];

  const courses = [
    { title: "SEO AND DIGITAL MARKETING", description: 'SEO, SEM, email, and social media marketing using tools like Google Ads, Facebook Ads, Mailchimp, and more.', icon: <FaChartLine /> },
    {
      title: "ERP SOLUTIONS", description: 'Centralize your business functions via desktop or web-based ERP with CRM, project management, and more.',
      icon: <FaUsers />
    },
    {
      title: "MOBILE APP DEVELOPMENT", description: 'We develop feature-rich Android, iOS, and Hybrid apps for business, healthcare, media, and more.',
      icon: <FaMobileAlt />
    },
    {
      title: "UI AND UX DEVELOPMENT", description: 'Creative UI/UX, branding, logos, taglines, and responsive interfaces.',
      icon: <FaPaintBrush />
    },
    {
      title: "WEB HOSTING AND DOMAIN SERVICES", description: 'Domain registration, hosting, VPS, WHOIS, DNS management & more with Wahy Host.',
      icon: <MdWeb />
    },
    {
      title: "SOFTWARE TESTING SERVICE", description: 'Manual & automated testing to ensure quality and functionality.',
      icon: <FaBug />
    },
    {
      title: "CRM DEVELOPMENT", description: 'Standard/custom CRM to track contacts, sales, tasks, and grow your business.',
      icon: <FaUsers />
    },

    
    {
      title: "CLOUD BASED SOLUTIONS", description: 'Cloud platforms that enable mobility, analytics, and social integration.',
      icon: <FaCloud />
    }, {
      title: "BULK SMS AND E-MAIL SERVICES", description: 'Reach your audience with affordable bulk SMS and email marketing services.',
      icon: <FaSms />
    },
  ];

  // Group courses into arrays of 3
  const groupedCourses = [];
  for (let i = 0; i < courses.length; i += 3) {
    groupedCourses.push(courses.slice(i, i + 3));
  }

  const imageList = [
    '/assets/3rd.jpg',
    '/assets/2nd.jpg',
    '/assets/7.jpg',
    '/assets/8.jpg',
    '/assets/9.webp',
    '/assets/6.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      <div className="home-page">
        <main className="main">

          {/* Hero / About Section */}
          <section id="about" className="about section py-5 position-relative text-white overflow-hidden">
            <div
              className="background-slideshow"
              style={{ backgroundImage: `url(${imageList[currentImage]})` }}
            ></div>
            <Icons />
            <div className="container position-relative text-dark" style={{ zIndex: 2 }}>
              <div className="row gy-4">
                <div className="col-lg-6"></div>
                <div className="col-lg-6 animate-fadeInUp text-white">
                  <h3>Why Choose Wahy Lab?</h3>
                  Wahy Lab Solutions is a leading IT company in Kerala. We build websites, mobile apps, and help businesses grow online through digital marketing. Our team uses the latest technologies to deliver creative and reliable solutions.
                  <br></br>
                  <br></br>
                  We lead the digital services by fulfilling client's requirements using innovative minds and emerging technologies to have a long term relationship.
                </div>
              </div>
            </div>
          </section>

          {/* Carousel Section */}
          <section className="py-5 text-center">
            <div className="typewriter-container">
              <h2 className="typewriter mt-3 mb-5">Explore Our Services</h2>
            </div>
            <p style={{ margin: "10px 20px 10px 20px" }}>Wahy Lab Solutions, a Kerala based one of the top website development company in Ernakulam, Kerala, India, providing web-based services at best prices. Our web-based sevices help our worldwide clients to gain strong digital visibility.</p>

            <div className="carousel-container mt-3">


              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                className="mySwiper"
              >
                {groupedCourses.map((group, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="row justify-content-center">
                      {group.map((course, index) => (
                        <div className="col-md-4 mb-3" key={index}>
                          <div className="p-4 shadow rounded service-home">
                            <h5>{course.title}</h5>
                            <div style={{ textAlign: "center" }}>
  <div className="service-icon">{course.icon}</div>

                           </div>
                            <p style={{ fontSize: "15px" }}>{course.description}</p>
                          {/* <button className="sparkle-button">
                              Read more → <span className="stars">✨</span>
                            </button>  */}
            
                          </div>
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          {/* Business Domains Section */}
          <section className="domains section py-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                  <div>
                    <h4 style={{ margin: "-20px 20px" }}> We empower companies across various industries with tailored solutions to meet their unique needs and goals.</h4>
                  </div>

                  <div className="container my-5">
                    <div className="row justify-content-center">
                      {domains.map((domain, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
                          <div className="domain-button">
                            <span>{domain}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="col-md-6 text-center">
                  <div className="domain-video-wrapper">
                    <video autoPlay muted loop playsInline>
                      <source src="/videos/domain.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Wahy Lab Section */}
          <div className="container my-5">
            <div className="typewriter-container">
              <h2 className="typewriter mb-5">WHY CHOOSE WAHY LAB?</h2>
            </div>

            <div className="row g-4">
              <div className="col-md-6 ">
                <div className="domain-button border-0 h-100 w-100 mt--5">
                  <div className="card-body" style={{marginTop:"-70px"}}>
                    <h5 className="card-title">Who We Are</h5>
                    <p className="card-text">
                      Wahy Lab Solutions is a leading IT company in Kerala. We build websites,
                      mobile apps, and help businesses grow online through digital marketing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="domain-button border-0 h-100 w-100">
                  <div className="card-body">
                    <h5 className="card-title mt-3">Internships & Training</h5>
                    <p className="card-text">
                      We offer online and offline internships with 100% placement support.
                      Interns work on live projects and get expert guidance, even without an IT background.
                    </p>
                    <ul>
                      <li>Job-oriented internships with certification</li>
                      <li>Real project experience with industry skills</li>
                      <li>Affordable training with expert mentors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Our Values Section */}
<div className="container my-5">
  <div className="text-center mb-5">
    <h2 className="typewriter">OUR VALUES</h2>
  </div>
  <div className="row g-4">
    {[
      {
        title: "Our Enthusiasm and Aim",
        text: "We are passionate about technology and focused on delivering real impact. Our aim is to empower learners and startups with future-ready digital solutions.",
        img: "https://cdn-icons-png.flaticon.com/512/3063/3063827.png",
      },
      {
        title: "Clarity and Fairness",
        text: "We believe in clear communication and honest collaboration. No hidden agendas—just transparency and trust in every partnership.",
      img: "https://cdn-icons-png.flaticon.com/512/190/190411.png"

      },
      {
        title: "Joyful Endeavor",
        text: "Work should be exciting! We build a culture where creativity, fun, and purpose meet. Every project is a journey we enjoy together.",
        img: "https://cdn-icons-png.flaticon.com/512/742/742751.png",
      },
    ].map((item, i) => (
      <div className="col-md-4"  key={i}>
        <div className="card h-100 border-0 shadow domain-button w-100 h-">
          <img
            src={item.img}
            alt={item.title}
            className="card-img-top p-3"
            style={{ height: "120px", objectFit: "contain" }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text" style={{fontSize:"15px"}}>{item.text}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        </main>
      </div>

      <Footer />
    </>
  );
};

export default Home;
