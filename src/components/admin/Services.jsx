import React, { useState } from 'react';
import '../../styles/admin/Services.css'; // Optional: style it as needed
import Sidebar from './Sidebar';

const Services = () => {
  const [services, setServices] = useState([
    {
    title: 'SEO & DIGITAL MARKETING',
    description: 'SEO, SEM, email, and social media marketing using tools like Google Ads, Facebook Ads, Mailchimp, and more.',
    icon: 'bi-bullseye',
  },
  {
    title: 'ERP SOLUTIONS',
    description: 'Centralize your business functions via desktop or web-based ERP with CRM, project management, and more.',
    icon: 'bi-gear',
  },
  {
    title: 'MOBILE APP DEVELOPMENT',
    description: 'We develop feature-rich Android, iOS, and Hybrid apps for business, healthcare, media, and more.',
    icon: 'bi-phone',
  },
  {
    title: 'CRM DEVELOPMENT',
    description: 'Standard/custom CRM to track contacts, sales, tasks, and grow your business.',
    icon: 'bi-people',
  },
  {
    title: 'POS & INVENTORY',
    description: 'Complete POS systems with inventory, bulk SMS/Email, hosting, domain, and support.',
    icon: 'bi-receipt-cutoff',
  },
  {
    title: 'UI & UX DESIGN',
    description: 'Creative UI/UX, branding, logos, taglines, and responsive interfaces.',
    icon: 'bi-vector-pen',
  },
  {
    title: 'WEB HOSTING & DOMAIN',
    description: 'Domain registration, hosting, VPS, WHOIS, DNS management & more with Wahy Host.',
    icon: 'bi-hdd-network',
  },
  {
    title: 'VOIP & IVR SERVICES',
    description: 'VoIP systems and custom IVR menus to improve customer service and routing.',
    icon: 'bi-headset',
  },
  {
    title: 'SOFTWARE TESTING',
    description: 'Manual & automated testing to ensure quality and functionality.',
    icon: 'bi-bug',
  },
  {
    title: 'BULK SMS & EMAIL',
    description: 'Reach your audience with affordable bulk SMS and email marketing services.',
    icon: 'bi-envelope-paper',
  },
  {
    title: 'CLOUD SOLUTIONS',
    description: 'Cloud platforms that enable mobility, analytics, and social integration.',
    icon: 'bi-cloud-check',
  },
  ]);

  const [formData, setFormData] = useState({ title: '', description: '', icon: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddOrUpdate = () => {
    if (!formData.title || !formData.description || !formData.icon) return;
    
    if (editIndex !== null) {
      const updated = [...services];
      updated[editIndex] = formData;
      setServices(updated);
      setEditIndex(null);
    } else {
      setServices([...services, formData]);
    }

    setFormData({ title: '', description: '', icon: '' });
  };

  const handleEdit = (index) => {
    setFormData(services[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = services.filter((_, i) => i !== index);
    setServices(filtered);
    if (editIndex === index) {
      setEditIndex(null);
      setFormData({ title: '', description: '', icon: '' });
    }
  };

  return (
    <>
    <Sidebar />
    <div className="admin-service-page">
       <div className="typewriter-container">
  <h2 className="typewriter">MANAGE SERVICES</h2>
</div>
      <div className="service-form">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <input type="text" name="icon" placeholder="Icon class (e.g., bi-gear)" value={formData.icon} onChange={handleChange} />
        <button onClick={handleAddOrUpdate}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>

      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-card-admin">
            <div className="icon-preview"><i className={`bi ${service.icon}`}></i></div>
            <div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
            <div className="actions">
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

export default Services;
