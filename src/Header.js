import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from './assets/logowhite.png';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Sidebar from './Sidebar';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [show, handleShow] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  useEffect(() => {
    window.addEventListener('scroll', transitionHeader);
    return () => window.removeEventListener('scroll', transitionHeader);
  }, []);

  return (
    <div className={`header ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className='header_logo'>
        <img src={logo} alt="brand logo" />
      </div>
      <div className='header_links'>
        <ul>
          <a href='/'>Who Am I</a>
          <a href='/'>Events</a>
          <a href='/'>My Story</a>
          <a href='/'>Let's Innovate</a>
        </ul>
      </div>
      <div className='header_button'>
        <button>Book Me</button>
      </div>
      <div className='sidebar-trigger' onClick={handleIconClick}>
  {isSidebarOpen ? <CloseIcon className='close-icon' onClick={handleIconClick} /> : <DehazeIcon />}
  {isSidebarOpen && (
    <div className='open-sidebar'>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  )}
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
