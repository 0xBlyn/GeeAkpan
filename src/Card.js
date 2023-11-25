import React from 'react'
import './Card.css'
import pic from './assets/Rectangle 25.png'

function Card({ image, title, sublet, button, link }) {
  return (
    <div className='card'>
      <img src={image} alt="event images" />
      <h2>{title}</h2>
      <h5>{sublet}</h5>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button>{button}</button>
      </a>
    </div>
  );
}

export default Card;


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
export function YCard({ image, title, videoUrl }) {
  return (
    <div className='card'>
      <a href={videoUrl} target="_blank">
        <img className='yimage' src={image} alt="event" />
      </a>
      <h2>{title}</h2>
    </div>
  );
}

