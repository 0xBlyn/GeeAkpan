import React from 'react'
import blog from './assets/SHARDEUM_110_Original 1.png'
import './Podcasts.css'
import Card from './Card'

function Youtube() {
  return (
    <div className='youtube'>
        <div className='headline'>
            <h1>Godswill Akpan on Youtube</h1>
            <h4>See more<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M5 21C4.45 21 3.979 20.804 3.587 20.412C3.195 20.02 2.99934 19.5493 3 19V5C3 4.45 3.196 3.979 3.588 3.587C3.98 3.195 4.45067 2.99934 5 3H12V5H5V19H19V12H21V19C21 19.55 20.804 20.021 20.412 20.413C20.02 20.805 19.5493 21.0007 19 21H5ZM9.7 15.7L8.3 14.3L17.6 5H14V3H21V10H19V6.4L9.7 15.7Z" fill="#2C5D8C"/>
        </svg></h4>
        </div>
      <div className='cards'>
        <Card title='Web2 vs Web3: Benefits of Web3' />
        <Card title="My Smart Contract Developer Journey at Web3"/>
        <Card title="Blockchain Vulnerabilities: The Delimitation of Web3 and Innovation."/>
        <Card title="Understanding DeFi Protocols and Infrastructures, a deep dive to blockchain usecases."/>
      </div>
      
    </div>
  )
}

export default Youtube
