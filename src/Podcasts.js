import React from 'react'
import './Podcasts.css'
import Card from './Card'
import img1 from './assets/SHARDEUM_110_Original 1.png'
import img2 from './assets/SHARDEUM_110_Original.png'
import img3 from './assets/DigitalSkills.png'
import img4 from './assets/blockchain.png'

function Podcasts() {
  return (
    <div>
        <div className='headline'>
            <h1>VoG Podcasts</h1>
            <h4>See more<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 21C4.45 21 3.979 20.804 3.587 20.412C3.195 20.02 2.99934 19.5493 3 19V5C3 4.45 3.196 3.979 3.588 3.587C3.98 3.195 4.45067 2.99934 5 3H12V5H5V19H19V12H21V19C21 19.55 20.804 20.021 20.412 20.413C20.02 20.805 19.5493 21.0007 19 21H5ZM9.7 15.7L8.3 14.3L17.6 5H14V3H21V10H19V6.4L9.7 15.7Z" fill="#2C5D8C"/>
        </svg></h4>
        </div>
      <div className='cards'>
        <Card image={img1} title="Meet with Godswill Akpan. Introducing Me." button="Listen"/>
        <Card image={img2} title="The Power of Personal Branding in the Tech Space." button="Listen"/>
        <Card image={img3} title="Digital Skills in 2024: What You Should be Looking at." button="Listen"/>
        <Card image={img4} title="Blockchain & Cryptocurrencies: Why You Should Invest." button="Listen"/>
      </div>
    </div>
  )
}

export default Podcasts
