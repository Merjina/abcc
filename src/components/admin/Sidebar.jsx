import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/admin/Sidebar.css'
const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
      <h3 className="sidebar-title">Admin Panel</h3>
      <ul className="sidebar-nav">
        <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/admin/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/admin/internship">Internship</NavLink></li>
        <li><NavLink to="/admin/career">Career</NavLink></li>
        <li><NavLink to="/admin/services">Services</NavLink></li>
        <li><NavLink to="/admin/contact">Contact Info</NavLink></li>
        <li><NavLink to="/admin/applied-interns">Applied Interns</NavLink></li>
      </ul>
    </div>
      
    </>
  );
};

export default Sidebar;
