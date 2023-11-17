import React from 'react'
import './Community.css'
import ftld from './assets/Bk4GSwKn_400x400-removebg-preview 1.png'
import team from './assets/IMG-20231107-WA0042-removebg-preview 1.png'

function Community() {
  return (
    <div className="community">
      <div className="head">
        <h1>Join My Community</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M11.6667 16.6665L20 24.9998L28.3333 16.6665H11.6667Z" fill="#238DDB"/>
        </svg>
      </div>
      <div className='comcard'>
        <div className='comimages'>
          <img className='comlogo' src={ftld} alt='ftld' />
          <img className='comteam' src={team} alt='ftld team members' />
        </div>
        <div className='comtext'>
          <h2>Join the FTLD Community to kickstart your tech journey!</h2>
          <div className='h4'>
            <h4>Interested in growing in the tech space, connecting with other tech enthusiasts that will keep you motivated in your tech journey?<br/></h4>
            <h4 className='comspan'>At FTLD (For The Love of Defi) , we are empowering our community members to embrace innovation using emerging tech skills!<br/></h4>
            <h4>Our platform is known to help over 3000 people transition into the tech space, find their paths and become Key Opinion Leaders in their tech tracks.</h4>
          </div>
          <button className='wbtn'>Join FTLD</button>
        </div>
      </div>
    </div>
  )
}

export default Community
