import React from 'react';
import Sidebar from './Sidebar';
import {
  FaUserGraduate,
  FaProjectDiagram,
  FaBriefcase,
  FaConciergeBell,
  FaEnvelope
} from 'react-icons/fa';
const AdminDash = () => {
  const dashboardStats = [
    { title: 'Portfolios', count: 12, icon: <FaProjectDiagram />, color: '#4e73df' },
    { title: 'Internships', count: 8, icon: <FaUserGraduate />, color: '#1cc88a' },
    { title: 'Careers', count: 5, icon: <FaBriefcase />, color: '#36b9cc' },
    { title: 'Services', count: 10, icon: <FaConciergeBell />, color: '#f6c23e' },
    { title: 'Messages', count: 20, icon: <FaEnvelope />, color: '#e74a3b' },
  ];

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
         <img src="/assets/logo.png" alt="Logo" height="70" width="100" className="" />
          
       <div className="typewriter-container">
  <h2 className="typewriter">DASHBOARD OVERVIEW</h2>
</div>  
        <div className="dashboard-cards mt-5">
          {dashboardStats.map((item, index) => (
            <div key={index} className="dashboard-card" style={{ backgroundColor: item.color }}>
              <div className="icon">{item.icon}</div>
              <div className="details">
                <h4>{item.title}</h4>
                <p>{item.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
