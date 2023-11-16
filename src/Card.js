import React from 'react'
import blog from './assets/SHARDEUM_110_Original 1.png'
import './Card.css'
import pic from './assets/Rectangle 25.png'

function Card({image, title, sublet, button}) {
  return (
    <div className='card'>
        <img src={blog} alt="Blog" />
        <h2>{title}</h2>
        <button>{button}</button>
    </div>
  )
}

export default Card 


export function Card1({photo, name, company, testimony}) {
  return(
    <div className='testimony'>
    <div className='tleft'>
      <img src={pic} alt='human' />
      <h3>{name}</h3>
      <h4>Shardeum Co.</h4>
    </div>
    <div className='tright'>
      {testimony}
    </div>
  </div>
  )

}