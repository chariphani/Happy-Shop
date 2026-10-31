import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary lllo">
      <div className="container-fluid lp">
        <Link to="#" className="navbar-brand" style={{ color: 'white' }}>< EmojiEmotionsIcon/> HAPPY-SHOP</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ll">
            <li className="nav-item">
              <Link to="/home" className="nav-link active" style={{ color: 'white' }}>Home</Link>
            </li>
             <li className="nav-item">
              <Link to="/about" className="nav-link active" style={{ color: 'white' }}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link" style={{ color: 'white' }}>Style That Speaks For You 😎 </Link>
            </li>
             <li className="nav-item">
              <Link to="/conn" className="nav-link active" style={{ color: 'white' }}>Contact</Link>
            </li>
             <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: 'white' }}>Logout</Link>
            </li>
            
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

