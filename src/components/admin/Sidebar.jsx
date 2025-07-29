import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import '../../styles/admin/Sidebar.css';

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Handle save logic here (e.g., API call)
    console.log("Updated Profile:", profile);
    setShowModal(false);
  };

  return (
    <>
      <div className="sidebar">
        <h3 className="sidebar-title">Admin Panel</h3>
         {/* Edit Profile Modal Trigger */}
        <div className="edit-profile-link mt-auto p-3">
          <span className="edit-profile-nav" onClick={() => setShowModal(true)}>
            <FaUserEdit className="me-2" />
            Edit Profile
          </span>
        </div>
        <ul className="sidebar-nav">
          <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/admin/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/admin/internship">Internship</NavLink></li>
          <li><NavLink to="/admin/career">Career</NavLink></li>
          <li><NavLink to="/admin/services">Services</NavLink></li>
          <li><NavLink to="/admin/contact">Contact Info</NavLink></li>
          <li><NavLink to="/admin/applied-interns">Applied Interns</NavLink></li>
          
          <li><NavLink to="/">Logout</NavLink></li>
        </ul>

       
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content bg-white">
            <h4>Edit Admin Profile</h4>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={profile.name}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={profile.password}
              onChange={handleChange}
            />
           
            <div className="modal-buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
