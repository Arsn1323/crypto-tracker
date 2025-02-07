import React from 'react'
import "./style.css";
import SwipeableTemporaryDrawer from "./drawer.jsx";
import Button from '../Button/index.jsx';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='navbar'>
      <h1>
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
      <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">Watchlist</p>
        </Link>
        <Link to="/dashboard">
        <p className='link'>Dashboard</p>
         
        </Link>
      </div>
      <div className="drawer-component">
        <SwipeableTemporaryDrawer />
      </div>
    </div>
  )
}

export default Header;
