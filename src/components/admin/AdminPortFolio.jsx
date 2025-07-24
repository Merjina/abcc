import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../../styles/admin/PortFolio.css'; // Create this

const AdminPortFolio = () => {
  const [projects, setProjects] = useState([
    { id: 1, title: 'Project A', description: 'Description A', image: '/images/ecommerce.png' },
    { id: 2, title: 'Project B', description: 'Description B', image: '/images/booking.png' }
  ]);
  const [formData, setFormData] = useState({ title: '', description: '', image: '' });
  const [editId, setEditId] = useState(null);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (editId !== null) {
      setProjects(projects.map(p => (p.id === editId ? { ...formData, id: editId } : p)));
      setEditId(null);
    } else {
      setProjects([...projects, { ...formData, id: Date.now() }]);
    }
    setFormData({ title: '', description: '', image: '' });
  };

  const handleEdit = project => {
    setFormData(project);
    setEditId(project.id);
  };

  const handleDelete = id => setProjects(projects.filter(p => p.id !== id));

  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content portfolio-admin mt-5">
        <div className="typewriter-container">
  <h2 className="typewriter port-head">MANAGE PORTFOLIO </h2>
</div>
        {/* Form */}
        <form onSubmit={handleSubmit} className="portfolio-form">
          <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
          <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
          <button type="submit">{editId !== null ? 'Update' : 'Add'} Project</button>
        </form>

        {/* List */}
        <div className="portfolio-list">
          {projects.map((proj) => (
            <div key={proj.id} className="portfolio-item">
              <img src={proj.image} alt={proj.title} />
              <div>
                <h5>{proj.title}</h5>
                <p>{proj.description}</p>
                <button onClick={() => handleEdit(proj)}>Edit</button>
                <button onClick={() => handleDelete(proj.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPortFolio;
