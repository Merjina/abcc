import React, { useState } from 'react';
import '../../styles/admin/Internship.css'
import Sidebar from './Sidebar';

const AdminInternships = () => {
  const [internships, setInternships] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '', image: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAdd = () => {
    setInternships([...internships, formData]);
    setFormData({ title: '', description: '', image: '' });
  };

  const handleDelete = (index) => {
    setInternships(internships.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const updated = internships[index];
    setFormData(updated);
    handleDelete(index);
  };

  return (
    <>
<Sidebar />

   
    <div className="admin-internships">
          
     <div className="typewriter-container">
  <h2 className="" style={{marginRight:"20rem"}}>MANAGE INTERNSHIP</h2>
</div>
 <div className="form-section">
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange}></textarea>
        <input name="image" placeholder="Image filename (e.g., java.jpg)" value={formData.image} onChange={handleChange} />
        <button onClick={handleAdd}>Add Internship</button>
      </div>

      <div className="internship-list">
        {internships.map((item, index) => (
          <div className="internship-card" key={index}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <img src={`/assets/${item.image}`} alt={item.title} width="120" />
            <div>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
   
    </>
  );
};

export default AdminInternships;
