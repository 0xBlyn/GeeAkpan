import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from './assets/logowhite.png';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Sidebar from './Sidebar';
import CloseIcon from '@mui/icons-material/Close';
import dropdown from './assets/gridicons_dropdown.png';

function Header() {
  const [show, handleShow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const transitionHeader = () => {
    if (window.scrollY > 120) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const handleIconClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionHeader);
    return () => window.removeEventListener('scroll', transitionHeader);
  }, []);

  return (
    <div className={`header ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className='header_logo'>
        <a href='/'>
          <img src={logo} alt="brand logo" />
        </a>
      </div>
      <div className='header_links'>
        <ul>
          <li>
            <a href='#about'>Who Am I</a>
          </li>
          <li
            className="dropdown"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <h4 className='dropdown-trigger'>Events<img src={dropdown} alt="dropdown icon" /></h4>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <a href='/'>Public Speaking</a>
                <a href='/'>Mentorship Session</a>
                <a href='/'>Tech Career Discovery</a>
              </div>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <h4 className='dropdown-trigger'>My Story <img src={dropdown} alt="dropdown icon" /></h4>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <a target='blank' href="https://geeakpan.medium.com/" alt="youtube channel">My Blog</a>
                <a href="#ebooks">My Books</a>
                <a href="#podcasts">VoG Podcast</a>
              </div>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <h4 className='dropdown-trigger'>Let's Innovate <img src={dropdown} alt="dropdown icon" /></h4>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <a target='blank' href="https://ng.linkedin.com/company/fortheloveofdefi">FTLD</a>
                <a href='/'>Aubrey Marketing</a>
                <a target='blank' href="https://www.instagram.com/p/Cz1CmFJsY9S/?igshid=MTc4MmM1YmI2Ng==">Holo Tees</a>
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className='header_button'>
        <button><a href= "https://form.jotform.com/233187296457569">Book Me</a> </button>
      </div>
      <div className='sidebar-trigger' onClick={handleIconClick}>
        {isSidebarOpen ? <CloseIcon className='close-icon' onClick={handleIconClick} /> : <DehazeIcon />}
      </div>
      {isSidebarOpen && (
        <div className='open-sidebar'>
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default Header;
