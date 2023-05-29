import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const handleClick = (sectionId) => {
    // Handle the click event here
    // You can use the sectionId to navigate to the specific section
    console.log(`Clicked on section: ${sectionId}`);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <h1 onClick={() => handleClick('about')} className="navbar-link">About Me</h1>
          </li>
          <li className="navbar-item">
            <h1 onClick={() => handleClick('experience')} className="navbar-link">Experience</h1>
          </li>
          <li className="navbar-item">
            <h1 onClick={() => handleClick('testimonies')} className="navbar-link">Testimonies</h1>
          </li>
          <li className="navbar-item">
            <h1 onClick={() => handleClick('hobbies')} className="navbar-link">Hobbies</h1>
          </li>
          <li className="navbar-item">
            <h1 onClick={() => handleClick('contact')} className="navbar-link">Contact Me</h1>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
