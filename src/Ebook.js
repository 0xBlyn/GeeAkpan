import React from 'react'
import './Ebook.css'
import ebook from './assets/Book 2.png'

function Ebook() {
  return (
    <div className='ebook'>
      <div className='ebook_left'>
        <h3>I have a special gift for you.</h3>
        <h1>Niching Down</h1>
        <h4>A free e-book to help guide you in the journey of discovering your path in the teeming tech world.</h4>
        <button className='wbtn'>Download now</button>
      </div>
      <div className='ebook_right'>
        <img src={ebook} alt='Book release' />
      </div>
    </div>
  )
}

export default Ebook
