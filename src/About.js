import React from 'react'
import './About.css'
import geeAkpan from './assets/Godswill.png'

function About() {
  return (
    <div id="about" className='about'>
      <div className='about_img'>
        <img src={geeAkpan} alt='Godswill Akpan' />
      </div>
      <div className='about_txt'>
        <h1>Who Am I?</h1>
        <div>
            <h3>Hey there!</h3>
            <h3>I am GODSWILL Akpan, a tech enthusiast with a passion for all things innovation.</h3>
            <h3>I am on a mission to make the tech world a little more <span>welcoming</span>, <span>accessible</span>, and <span>inspiring</span> for everyone.</h3>
            <h3>By day, I'm your go-to tech guru, a business mogul in the making, always exploring the latest innovations. But by night (or whenever inspiration strikes), I'm a relentless advocate for purpose discovery, diving headfirst into the world of personal awareness to help you understand you, navigate through the seasons of your life, and thrive in the things you do.</h3>
            <h3> But that's not all! I'm a firm believer that faith and technology can coexist beautifully. I've made it my calling to bridge these worlds, showcasing the incredible potential that emerges when we blend innovation with unwavering principles. </h3>
            <h3> When I'm not diving into the tech universe or empowering the DeFi community, you can catch me in action as a public speaker, sharing insights on emerging technologies and leading mentorship sessions that aim to inspire and equip. I believe that together, we can embrace innovation, chase our dreams, and make a meaningful impact.</h3>
            <h3>So, if you're ready to explore the thrilling intersection of tech, faith, and innovation, you're in the right place. </h3>
            <h3>Join me on this exciting journey, and let's shape the future together!</h3>
        </div>
      </div>
    </div>
  )
}

export default About
