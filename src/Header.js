import React from 'react'
import './Header.css'
import logo from './assets/logowhite.png'
import DehazeIcon from '@mui/icons-material/Dehaze';

function Header() {
  return (
    <div className='header'>
      <div className='header_logo'>
        <img src={logo} alt="brand logo" />
      </div>
      <div className='header_links'>
        <ul>
            <a href='/'>Who Am I</a>
            <a href='/'>Events
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4.66666 6.66666L8 9.99999L11.3333 6.66666H4.66666Z" fill="white"/>
            </svg></a>
            <a href='/'>My Story
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4.66666 6.66666L8 9.99999L11.3333 6.66666H4.66666Z" fill="white"/>
            </svg></a>
            <a href='/'>Let's Innovate
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4.66666 6.66666L8 9.99999L11.3333 6.66666H4.66666Z" fill="white"/>
            </svg></a>
        </ul>
      </div>
      <div className='header_button'>
        <button>Book Me</button>
      </div>
      <div className='moreicon'>
        <DehazeIcon />
      </div>
    </div>
  )
}

export default Header
