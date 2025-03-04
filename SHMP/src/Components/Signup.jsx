import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Styles/Signup.css"

function Signup({ setUser, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate signup (replace with backend API call)
    if (username.trim() === '' || password.trim() === '') {
      setError("Username and password cannot be empty");
      return;
    }
    setUser(username);
    localStorage.setItem('user', username);
    navigate('/');
    onClose(); // Close the modal after successful signup
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Signup</h2>
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
          <button type="submit">Signup</button>
        </form>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Signup;