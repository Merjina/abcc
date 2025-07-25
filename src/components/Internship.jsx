import React, { useState, useEffect } from 'react';
import '../styles/Internship.css';
import Header from './Header';
import Footer from './Footer';

const internships = [
  {
    title: 'DATA ANALYST',
    description:
      "Learn Excel, SQL, Power BI, and Tableau to clean, analyze, and visualize data. This internship also covers basic statistics and real-time projects using datasets from different fields.",image: 'data.jpg',
  },
  {
    title: 'DATA SCIENTIST',
    description:
      'Get in-depth training in Python, data preprocessing, and model building. You’ll explore libraries like Pandas, NumPy, Scikit-learn, and Matplotlib. Real-time projects help you apply AI and ML techniques effectively.',
    image: 'dataa.jpg',
  },
  {
    title: 'BUSINESS ANALYST',
    description:
      'Learn business analysis fundamentals including requirement gathering, documentation, and stakeholder communication. You’ll use Excel, Power BI, and SQL to analyze trends and processes.',
    image: 'business.jpg',
  },
  {
    title: 'CYBERSECURITY',
    description:
      'Understand the core concepts of cybersecurity including ethical hacking, network security, and data protection. You’ll get exposure to tools used for penetration testing and risk analysis.',
    image: 'cyber.jpg',
  },
  {
    title: 'DIGITAL MARKETING',
    description:
      'Explore modern marketing strategies including SEO, SEM, email marketing, and content creation. You’ll manage campaigns on platforms like Google Ads and Meta.',
    image: 'digital.jpg',
  },
  {
    title: 'FLUTTER',
    description:
      'Build beautiful, cross-platform apps using Flutter and Dart. Learn to implement responsive UI and integrate APIs. You’ll be part of real app development cycles.',
    image: 'flutter.jpg',
  },
  {
    title: 'JAVA',
    description:
      'Deepen your Java skills through hands-on backend development. Learn object-oriented programming, exception handling, and collections. Work on projects with JDBC and Spring Boot.',
    image: 'java.jpg',
  },
  {
    title: 'PYTHON',
    description:
      'Master Python programming with an emphasis on automation and web development. You’ll build applications using Django and Flask frameworks. Learn to manipulate data with Pandas.',
    image: 'python.jpg',
  },
  {
    title: 'SOFTWARE TESTING',
    description:
      'Learn manual testing techniques and get started with automation tools like Selenium. You’ll write test cases, conduct bug tracking, and work in QA processes.',
    image: 'testing.jpg',
  },
  {
    title: 'REACT JS',
    description:
      'Get trained in React and build dynamic frontend applications. You’ll work with components, props, state, and hooks. Understand routing and integrate external APIs.',
    image: 'react.jpg',
  },
];

function Internship() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    passedout: '',
    course: '',
    message: '',
  });

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setFormData({
      name: '',
      email: '',
      mobile: '',
      passedout: '',
      course: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted:\n' + JSON.stringify(formData, null, 2));
    closeModal();
  };

  useEffect(() => {
    if (showModal) {
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  }, [showModal]);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const target = document.getElementById(id);
      if (target) {
        setTimeout(() => {
          const yOffset = -100; // adjust this based on fixed nav height
          const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100); // slight delay to allow DOM to fully render
      }
    }
  }, []);


  return (
    <>
      <Header />
      <div className="internship-page py-5" style={{ backgroundColor: 'rgb(237, 242, 240)' }}>
        <div className="container">
          <div className="typewriter-container">
            <h2 className="typewriter">INTERNSHIP PROGRAMS</h2>
          </div>

          <div className="internship-grid col-md-12">
            {internships.map((item, index) => (
              <div
                className="internship-card"
                key={index}
                id={item.title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")}
              >
                <img src={`/assets/${item.image}`} alt={item.title} className='internship-image' />
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <button className="sparkle-button" onClick={openModal}>
                  Join Us → <span className="stars">✨</span>
                </button>
              </div>
            ))}
          </div>


          <div className="text-center mt-5">
            <h4 className="fw-bold mb-3">Website Design & Development Is Our Passion!</h4>
            <p className="lead">We are developers by choice!</p>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content bg-white">
            <button className="modal-close text-dark" onClick={closeModal}>
              ×
            </button>
            <h4 className="text-center mb-3 bg-white">Internship Application</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="passedout"
                placeholder="Pass Out Year"
                value={formData.passedout}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="course"
                placeholder="Applied Internship"
                value={formData.course}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" style={{ height: '40px', width: '150px' }} className="submit-btn sparkle-button">
                Submit <span className="stars">✨</span>
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Internship;
