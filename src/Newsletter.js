import React from 'react'
import envelope from './assets/envelope.png'
import './Newsletter.css'
import vector from './assets/Vector 1.png'

function Newsletter() {
  return (
    <div id="newsletter"  className='newsletter'>
      <div>
        <img className='env' src={envelope} alt='envelope' />
        <h3>Subscribe to My Newsletter</h3>
        <h4>Get the latest news from the tech ecosystem, purpose drivers, and success tips</h4>
        <form>
            <input type='email' placeholder='Email Address' />
            <button type="submit">Subscribe</button>
        </form>
      </div> 
      <img className='vector' src={vector} alt='vector' />
    </div>
  )
}

export default Newsletter
