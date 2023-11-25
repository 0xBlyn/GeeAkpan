import React from 'react';
import './Sidebar.css';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Sidebar = ({ isOpen, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`open-sidebar ${isOpen ? 'show-sidebar' : ''}`}>
      <CloseIcon className='close-icon' onClick={handleClose} />
      <div className='sidebar'>
        <ul className='sidebar-lists'>
          <li><a href='/'>Who Am I</a></li>
          <li><a href='/'><h2>Events </h2><KeyboardArrowDownIcon /></a></li>
          <li><a href='/'>My Story <KeyboardArrowDownIcon /></a></li>
          <li><a href='/'>Let's Innovate <KeyboardArrowDownIcon /></a></li>
      </ul>
      </div>

    </div>
  );
};

export default Sidebar;
