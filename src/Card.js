import React from 'react'
import './Card.css'
import pic from './assets/Rectangle 25.png'

function Card({image, title, sublet, button}) {
  return (
    <div className='card'>
        <img src={image} alt="event images" />
        <h2>{title}</h2>
        <h5>{sublet}</h5>
        <button>{button}</button>
    </div>
  )
}

export default Card 


export function Card1({photo, name, company, testimony}) {
  return(
    <div className='testimony'>
    <div className='tleft'>
      <img className='pic' src={pic} alt='human' />
      <h3>{name}</h3>
      <h4>Shardeum Co.</h4>
    </div>
    <div className='tright'>
      {testimony}
    </div>
  </div>
  )

}

export function YCard({ image, title, videoId }) {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const handleClick = () => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className='card'>
      <a href={videoUrl} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        <div className="thumbnail-container">
          <img src={image} alt="event" />
          <svg className="play-icon" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
            <g clip-path="url(#clip0_545_185)">
              <path d="M32.5 0C14.58 0 0 14.58 0 32.5S14.58 65 32.5 65 65 50.42 65 32.5 50.42 0 32.5 0zm15.62 32.5L20.77 54.85a2.5 2.5 0 0 1-3.77-2.12V12.27a2.5 2.5 0 0 1 3.77-2.12L48.12 32.5a2.5 2.5 0 0 1 0 3.62z" fill="#fff"/>
            </g>
            <defs>
              <clipPath id="clip0_545_185">
                <rect width="64" height="64" fill="white" transform="translate(0.981689 0.5)"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      </a>
      <h2>{title}</h2>
    </div>
  );
}
