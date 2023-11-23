import React from 'react';
import './Sidebar.css';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = ({ isOpen, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`open-sidebar ${isOpen ? 'show-sidebar' : ''}`}>
      <CloseIcon className='close-icon' onClick={handleClose} />
      <ul className='sidebar-lists'>
        {/* <li><a href='/'>Who Am I</a></li>
        <li><a href='/'>Events</a></li>
        <li><a href='/'>My Story</a></li>
        <li><a href='/'>Let's Innovate</a></li> */}
        Work in Progress
      </ul>
    </div>
  );
};

export default Sidebar;
