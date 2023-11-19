import React from 'react';
import './Engagements.css';

function Engagement({ image, title, image2 }) {
  return (
    <div className='engagement'>
      <div className='photos'>
        {image && <img className='img1' src={image} alt="event" />}
        {image2 && <img className='img2' src={image2} alt="event" />}
      </div>
      <h3>{title}</h3>
    </div>
  );
}

export default Engagement;
