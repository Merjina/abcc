import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import '../../styles/admin/AppliedIntern.css'
function AdminDashboard() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch('http://localhost/backend/getInternships.php')
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost/backend/deleteInternship.php?id=${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      setApplications(applications.filter((app) => app.id !== id));
    }
  };

  return (
    <div className="admin-dashboard-wrapper">
      <Sidebar />
      <div className="admin-dashboard-content">
        <div className="typewriter-container">
  <h2 className="typewriter">APPLICATIONS</h2>
</div>
        {applications.length === 0 ? (
          <p>No applications found.</p>
        ) : (
          <table className="">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Message</th>
                <th>Date Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr key={app.id}>
                  <td>{index + 1}</td>
                  <td>{app.name}</td>
                  <td>{app.email}</td>
                  <td>{app.mobile}</td>
                  <td>{app.message}</td>
                  <td>{new Date(app.datetime).toLocaleString()}</td>
                  <td>
                    <button className="delete-btn" onClick={() => handleDelete(app.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
