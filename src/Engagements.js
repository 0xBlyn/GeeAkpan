import React from 'react'
import Engagement from './Engagement'

function Engagements() {
  return (
    <div className="community">
      <div className="head">
        <h1>My Engagements</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M11.6667 16.6665L20 24.9998L28.3333 16.6665H11.6667Z" fill="#238DDB"/>
        </svg>
      </div>
      <div className='econtainer'>
        <div className='erow'>
            <Engagement />
            <Engagement />
            <Engagement />
            <Engagement />
        </div>
        <div className='erow2'>
            <Engagement />
            <Engagement />
            <Engagement />
            <Engagement />
        </div>
        <div className='erow'>
            <Engagement />
            <Engagement />
            <Engagement />
            <Engagement />
        </div>
      </div>
    </div>
  )
}

export default Engagements
