import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

const AppliedInterns = () => {
  const [appliedInterns, setAppliedInterns] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('appliedInterns')) || [];
    setAppliedInterns(data);
  }, []);

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content p-4">
        <h2 className="text-center mb-4">Applied Interns</h2>
        {appliedInterns.length === 0 ? (
          <p>No interns have applied yet.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Pass Out Year</th>
                  <th>Applied Course</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {appliedInterns.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile}</td>
                    <td>{item.passedout}</td>
                    <td>{item.course}</td>
                    <td>{item.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppliedInterns;
