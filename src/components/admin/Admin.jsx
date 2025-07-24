import React, { useState } from 'react';
import '../../styles/admin/Admin.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert(`Logging in with: ${username}, ${password}`);
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleSubmit}>
         <img src="/assets/logo.png" alt="Logo" height="70" width="100" className="me-2" />
          
        <div className="typewriter-container">
  <h2 className="typewriter">//Admin Login</h2>
</div>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control password-box"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-check keep-logged-in">
          <input
            type="checkbox"
            className="form-check-input"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <label className="form-check-label">Keep me logged in</label>
        </div>
        <button type="submit" className="btn btn-primary login-btn">
          Login
        </button>
        <p className="forgot-password">Lost your password?</p>
      </form>
    </div>
  );
}

export default AdminLogin;
