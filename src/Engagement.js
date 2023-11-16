import React from 'react'
import attend from './assets/8d1116e5-5898-4c8d-9815-accd4643d226 1.png'
import attend1 from './assets/41eccd53-6197-4d76-81b6-a4b1ec8a8bc8 1.png'
import './Engagements.css'

function Engagement({image, title}) {
  return (
    <div className='engagement'>
      <div className='photos'>
        <img className='img1' src={attend} alt="event" />
        <img className='img2' src={attend1} alt="event" />
      </div>
      <h3>Happy Teens For the Future Conference</h3>
    </div>
  )
}

export default Engagement
