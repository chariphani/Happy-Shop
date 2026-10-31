import React, { useState } from 'react';
import './Res.css';
import { Link, useNavigate } from 'react-router-dom';

const Res = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/res`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        navigate("/"); // Go to login page
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Something went wrong.");
      console.error(err);
    }
  };

  return (
    <div className="login-container lp">
      <form onSubmit={handleRegister} className="login-form">
        <h1>Please Register</h1>
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Link to="/"><p>Already have an account? Login Here</p></Link>
        <button type="submit" className="btn btn-success ss">Register</button>
      </form>
    </div>
  );
};

export default Res;
