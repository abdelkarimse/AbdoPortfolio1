import React, { useState } from 'react';
import "C:/Users/aselm/Downloads/Compressed/AbdoProtfolio-main/AbdoProtfolio-main/src/component/assets/css/steller.css";
import "C:/Users/aselm/Downloads/Compressed/AbdoProtfolio-main/AbdoProtfolio-main/src/component/assets/js/steller.js";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" data-spy="affix" data-offset-top="0">
      <div className="container">
        <a href="#" className="navbar-brand"  >ABDO</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarSupportedContent"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">Project</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Gallery">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
