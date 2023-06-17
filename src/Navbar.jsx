import React, { useState, useEffect } from 'react'; // Import React and useState

import styles from './styles/navbar.module.css';
import Hamburger from 'hamburger-react';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [shouldShowHamburger, setShouldShowHamburger] = useState(window.innerWidth <= 768);
  
    const handleLinkClick = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    };
  
    useEffect(() => {
      const handleResize = () => {
        setShouldShowHamburger(window.innerWidth <= 450);
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <nav>
      <ul className={styles.navLinksStyle}>
        <li>
          <a href="#Home" className={styles.linkStyle} onClick={handleLinkClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#About" className={styles.linkStyle} onClick={handleLinkClick}>
            About
          </a>
        </li>
        <li>
          <a href="#Projects" className={styles.linkStyle} onClick={handleLinkClick}>
            Projects
          </a>
        </li>
        
        <li>
          <a href="#Contact" className={styles.linkStyle} onClick={handleLinkClick}>
            Contact
          </a>
        </li>
      </ul>
      {shouldShowHamburger && <Hamburger toggled={isOpen} toggle={setOpen} />}
    </nav>
  );
};

export default Navbar;
