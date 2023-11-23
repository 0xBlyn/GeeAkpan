import React, { useState } from 'react';
import './Header.css';
import logo from './assets/logowhite.png';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='header'>
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
      <div className='moreicon'>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
        >
          <DehazeIcon />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          style={{
            display: "flex",
            flexDirection: "column !important"
          }}
        >
          <MenuItem onClick={handleMenuClose}>Who Am I</MenuItem>
          <MenuItem onClick={handleMenuClose}>Events</MenuItem>
          <MenuItem onClick={handleMenuClose}>My Story</MenuItem>
          <MenuItem onClick={handleMenuClose}>Let's Innovate</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Header;