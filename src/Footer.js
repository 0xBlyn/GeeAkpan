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
        <table>
            <tr className='th'>
                <td>Social</td>
                <td>Company</td>
                <td>Value Offers</td>
            </tr>
            <tr>
                <td><a target='blank' href="https://www.facebook.com/akpan.godswill.3956?mibextid=ZbWKwL">Facebook</a></td>
                <td>FTLD</td> 
                <td>Articles</td>
            </tr>
            <tr>
                <td><a target='blank' href="https://instagram.com/gee_akpan?igshid=OGQ5ZDc2ODk2ZA==">Instagram</a></td>
                <td>Holo Tees</td>
                <td>Podcasts</td>
            </tr>
            <tr>
                <td><a target='blank' href="https://ng.linkedin.com/in/geeakpan">Twitter</a></td>
                <td>Jara Stores</td>
                <td>Newsletter</td>
            </tr>
            <tr>
                <td><a target='blank' href="https://ng.linkedin.com/in/geeakpan">LinkedIn</a></td>
            </tr>
        </table>
        </div>
    </div>
  )
}

export default Footer
