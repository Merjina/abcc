import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import '../../styles/admin/Career.css'

const isAdmin = true; // Toggle to false for user view

const initialOpenings = [
  "Software Quality Intern",
  "Flutter Developer Intern",
  "AI/ML/DL Intern",
  "Analytics Intern",
  "Java Programming Intern",
  "Python Programming Intern",
  "Cybersecurity Intern",
  "Digital Marketing Intern ",
  "Business Analyst Intern",
  "React.js Intern",
  "Telemarketing Executive",
  "Business Development Executive"
];

const Career = () => {
  const [openings, setOpenings] = useState(initialOpenings);
  const [formVisible, setFormVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState('');
  const [applications, setApplications] = useState([]);
  const [newOpening, setNewOpening] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // Dummy application data for admin
  useEffect(() => {
    if (isAdmin) {
      const dummyApplications = [
        {
          name: 'Merjina J M',
          email: 'merjina@example.com',
          phone: '9876543210',
          qualification: 'B.E. CSE',
          stream: 'Computer Science',
          year: '2023',
          post: 'React.js Intern',
          experienceYears: 0,
          experienceMonths: 6,
          message: 'I am passionate about frontend development.',
          resume: 'Merjina J M.pdf'
        }
      ];
      setApplications(dummyApplications);
    }
  }, []);

  const handleAddOpening = () => {
    if (newOpening.trim() !== '') {
      if (editIndex !== null) {
        const updated = [...openings];
        updated[editIndex] = newOpening;
        setOpenings(updated);
        setEditIndex(null);
      } else {
        setOpenings([...openings, newOpening]);
      }
      setNewOpening('');
    }
  };

  const handleEditOpening = (index) => {
    setNewOpening(openings[index]);
    setEditIndex(index);
  };

  const handleDeleteOpening = (index) => {
    const updated = openings.filter((_, i) => i !== index);
    setOpenings(updated);
    if (editIndex === index) {
      setEditIndex(null);
      setNewOpening('');
    }
  };

  const handleOpeningClick = (post) => {
    setSelectedPost(post);
    setFormVisible(true);
  };

  // ==================== Admin View ====================
  if (isAdmin) {
    return (
      <>
      <Sidebar />
      <div className="admin-career-page">
   <div className="typewriter-container">
  <h2 className="typewriter">MANAGE JOB OPENINGS</h2>
</div>
  <div className="add-opening-form">
    <input
      type="text"
      placeholder="Enter opening name"
      value={newOpening}
      onChange={(e) => setNewOpening(e.target.value)}
    />
    <button onClick={handleAddOpening}>
      {editIndex !== null ? 'Update' : 'Add'}
    </button>
  </div>

  <div className="openings-grid col-md-8">
    {openings.map((job, index) => (
      <div key={index} className="opening-item-admin">
        <span className="job-title">{job}</span>
        <div className="admin-btn-group">
          <button onClick={() => handleEditOpening(index)}>Edit</button>
          <button onClick={() => handleDeleteOpening(index)}>Delete</button>
        </div>
      </div>
    ))}
  </div>

        <hr />

     <h2>Received Applications</h2>
<div className="application-table-container">
  {applications.length === 0 ? (
    <p>No applications found.</p>
  ) : (
    <table className="application-table">
      <thead>
        <tr>
          <th>SL</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Post</th>
          <th>Qualification</th>
          <th>Stream</th>
          <th>Year</th>
          <th>Experience</th>
          <th>Message</th>
          <th>Resume</th>
        </tr>
      </thead>
      <tbody>
        {applications.map((app, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{app.name}</td>
            <td>{app.email}</td>
            <td>{app.phone}</td>
            <td>{app.post}</td>
            <td>{app.qualification}</td>
            <td>{app.stream}</td>
            <td>{app.year}</td>
            <td>{app.experienceYears} yr {app.experienceMonths} mo</td>
            <td>{app.message}</td>
            <td><a href={`/resumes/${app.resume}`} download>{app.resume}</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>
</div>
      </>
    );
  }

};

export default Career;
