import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Internship from './components/Internship';
import Services from './components/Services';
import Career from './components/Career';
import Contact from './components/Contact';
import Portfolio from './components/PortFolio';
import Blog from './components/Blog';

// Admin Components
import Admin from './components/admin/Admin'; // Login Page
import AdminDash from './components/admin/AdminDash'; // Dashboard layout
import AdminInternship from './components/admin/Internship';
import AdminContact from './components/admin/Contact';
import AdminServices from './components/admin/Services';
import AdminCareer from './components/admin/Career';
import AdminPortFolio from './components/admin/AdminPortFolio';
import AppliedInterns from './components/admin/AppliedIntern';
import Logout from './components/admin/Logout';

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

        
  {/* Admin Login (No sidebar) */}
  <Route path="/admin" element={<Admin />} />

  {/* Admin Routes (with Sidebar + Layout like AdminDash) */}
  <Route path="/admin/dashboard" element={<AdminDash />} />
  <Route path="/admin/portfolio" element={<AdminPortFolio />} />
  <Route path="/admin/internship" element={<AdminInternship />} />
  <Route path="/admin/career" element={<AdminCareer />} />
  <Route path="/admin/services" element={<AdminServices />} />
  <Route path="/admin/contact" element={<AdminContact />} />
  <Route path="/admin/applied-interns" element={<AppliedInterns />} />
  
  <Route path="/" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
