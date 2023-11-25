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

// YCard component
export function YCard({ image, title, videoId }) {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const handleClick = () => {
    window.open(videoUrl, '_blank');
  };
  return (
    <div className='card'>
      <a href={`videoUrl`} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        <img className='yimage' src={image} alt="event" />
      </a>
      <h2>{title}</h2>
    </div>
  );
}
