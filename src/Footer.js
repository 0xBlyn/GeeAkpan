import React from 'react'
import logo from './assets/logowhite2.png'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='left_side'>
            <img src={logo} alt="brand logo" />
        </div>
        <div className='right_side'>
        <table className='font-normal lg:font-medium text-sm lg:text-xl'>
            <tr className='lg:font-bold font-semibold'>
                <td>Social</td>
                <td>Company</td>
                <td>Value Offers</td>
            </tr>
            <tr>
                <td>Facebook</td>
                <td>FTLD</td> 
                <td>Articles</td>
            </tr>
            <tr>
                <td>Instagram</td>
                <td>Holo Tees</td>
                <td>Podcasts</td>
            </tr>
            <tr>
                <td>Twitter</td>
                <td>Jara Stores</td>
                <td>Newsletter</td>
            </tr>
            <tr>
                <td>LinkedIn</td>
            </tr>
        </table>
        </div>
    </div>
  )
}

export default Footer
