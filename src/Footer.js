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
                <td><a target='blank' href="https://ng.linkedin.com/company/fortheloveofdefi">FTLD</a></td> 
                <td><a target='blank' href="https://geeakpan.medium.com/">Articles</a></td>
            </tr>
            <tr>
                <td><a target='blank' href="https://instagram.com/gee_akpan?igshid=OGQ5ZDc2ODk2ZA==">Instagram</a></td>
                <td><a target='blank' href="https://www.instagram.com/p/Cz1CmFJsY9S/?igshid=MTc4MmM1YmI2Ng==">Holo Tees</a></td>
                <td>Podcasts</td>
            </tr>
            <tr>
                <td><a target='blank' href="https://twitter.com/GeeAkpan">Twitter</a></td>
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
