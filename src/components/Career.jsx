import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Career.css';

function Career() {
  const openings = [
    "Software Quality Intern",
    "Flutter Developer Intern",
    "AI/ML/DL Intern",
    "Analytics Intern",
    "Java Programming Intern",
    "Python Programming Intern",
    "Cybersecurity Intern",
    "Digital Marketing Intern",
    "Business Analyst Intern",
    "React.js Intern",
    "Telemarketing Executive",
    "Business Development Executive",
    "Digital Marketing Analyst"
  ];

  const [selectedPost, setSelectedPost] = useState('');
  const [formVisible, setFormVisible] = useState(false);

  const handleOpeningClick = (post) => {
    setSelectedPost(post);
    setFormVisible(true);
  };

  const handleCloseModal = () => {
    setFormVisible(false);
    setSelectedPost('');
  };

  return (
    <>
      <Header />
      <div className="career-page ">
     <div className="typewriter-container">
  <h2 className="typewriter mt-5">CURRENT OPENINGS</h2>
</div>
   <div className="openings-list mt-5">
          {openings.map((job, index) => (
            <div
              key={index}
              className="opening-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="opening-icon">💼</span>
              <p className="opening-text">{job}</p>
              <button className="sparkle-button" style={{height:"40px", width:"150px"}} onClick={() => handleOpeningClick(job)}>
                Apply →<span className="stars">✨</span>
              </button>
              
            </div>
          ))}
        </div>

        {formVisible && (
          <div className="form-modal-overlay" onClick={handleCloseModal}>
            <div className="application-form" onClick={(e) => e.stopPropagation()}>
              <span className="close-btn" onClick={handleCloseModal}>×</span>
              <h2 className=''>Apply for: {selectedPost}</h2>
              <form className="form-grid">
                <div className="form-column">
                  {[
                    { label: 'Name', type: 'text', required: true },
                    { label: 'Email Address', type: 'email', required: true },
                    { label: 'Phone Number', type: 'tel', required: true },
                    { label: 'Qualification', type: 'text' },
                  ].map((field, i) => (
                    <div className="floating-label" key={i}>
                      <input type={field.type} placeholder=" " required={field.required} />
                      <label>{field.label}</label>
                    </div>
                  ))}

                  <div className="floating-label">
                    <textarea placeholder=" "></textarea>
                    <label>Message</label>
                  </div>
                </div>

                <div className="form-column">
                  {[
                    { label: 'Stream', type: 'text' },
                    { label: 'Year of Pass Out', type: 'text', required: true },
                  ].map((field, i) => (
                    <div className="floating-label" key={i}>
                      <input type={field.type} placeholder=" " required={field.required} />
                      <label>{field.label}</label>
                    </div>
                  ))}

                  <div className="floating-label">
                    <input type="text" value={selectedPost} readOnly placeholder=" " />
                    <label>Applied Post</label>
                  </div>

                  <div className="experience">
                    <label>Experience:</label>
                    <span>
                      <input type="number" min="0" placeholder="0" name="experienceYears" />
                      <small>years</small>
                    </span>
                    <span>
                      <input type="number" min="0" max="11" placeholder="0" name="experienceMonths" />
                      <small>months</small>
                    </span>
                  </div>


                  <div className="resume-upload">
                    <label>Upload Resume:</label>
                    <input type="file" accept=".pdf,.doc,.docx" />
                  </div>
                </div>

                <div className="submit-section ">
                  <button type="submit" className='sparkle-button'>Submit</button>
                </div>
              </form>

            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Career;
