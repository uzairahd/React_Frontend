import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/Login.css'; // Create Login.css for styling

function Login({ setUser, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication (replace with backend API call)
    if (username === 'user1' && password === 'password') {
      setUser(username);
      localStorage.setItem('user', username);
      navigate('/');
      onClose(); // Close the modal after successful login
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Login;