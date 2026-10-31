import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message);
        navigate("/home");
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
      <div className="rm">
        <h2>WELCOME TO OUR <br /><span id='yy'>HAPPY-SHOP</span></h2>
      </div>
      <form onSubmit={handleLogin} className="login-form">
        <h1>Please Login</h1>
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
        <Link to="/res"><p>Don't have an account? Register Here</p></Link>
        <button type="submit" className="btn btn-success ss">Login</button>
      </form>
    </div>
  );
};

export default Login;
