import React from 'react';
import './Engagements.css'
import tftf from './assets/8d1116e5-5898-4c8d-9815-accd4643d226 1.png'
import tftf1 from './assets/41eccd53-6197-4d76-81b6-a4b1ec8a8bc8 1.png'
import tftf3 from './assets/img_63_Original.png'
import flown from './assets/DONE_22 1.png'
import shardeum from './assets/shardeum.png'
import shardeum2 from './assets/shardeum2.png'
import chair from './assets/chair2.png'
import chair2 from './assets/chair.png'
import zeta from './assets/c45fc751a21bfc74dc6c7be52bd427aa.jpeg'
import zeta2 from './assets/zeta (1).png'
import ubm from './assets/ubm.png'
import ubp from './assets/ubp.png'
import jnac from './assets/DeFi_28_Original 1.png'
import jnac2 from './assets/jnac.png'
import htfc from './assets/jnac2.png'
import spce from './assets/spce.png'
import spce1 from './assets/spce1.png'
import spcc from './assets/spcc.png'
import spcc1 from './assets/spcc1.png'
import zcm from './assets/zcm.png'
import zcm1 from './assets/zcm1.png'
import ftt from './assets/ftt.png'
import ftt1 from './assets/ftt1.png'

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
          <div className='engagement'>
            <div className='photos'>
              <img className='img1' src={tftf} alt="event" />
              <img className='img2' src={tftf1} alt="event" />
            </div>
            <h3>Happy Teens For the Future Conference</h3>
          </div>
          <div className='elarge'>
          <div className='photos'>
              <img className='eimg1' src={htfc} alt="event" />
              <img style={{
                maxWidth: "60vw",
                marginLeft: "3%"
              }} className='eimg2' src={tftf3} alt="event" />
            </div>
          <h3>Happy Teens For the Future Conference</h3>
          </div>
          <div className='engagement'>
          <div className='photos'>
              <img className='img1' src={flown} alt="event" />
              <img className='img2' src={jnac2} alt="event" />
            </div>
          <h3>Flow Network, Uyo: Become a Web3 OG; The Benefits of Value Contribution</h3>
          </div>
          <div className='elarge'>
          <div className='photos'>
              <img style={{
                maxWidth: "30vw"
              }}  className='img1' src={spce} alt="event" />
              <img className='img2' src={spce1} alt="event" />
            </div>
          <h3>Shardeum Proof of Community Event, Port Harcourt</h3>
          </div>
          </div>
        <div className='erow2'>
        <div style={{
          minWidth: "70vw"
        }} className='engagement'>
            <div className='photos'>
              <img className='img1' src={shardeum} alt="event" />
            </div>
            <h3>Shardeum Proof of Community: Communication in Web3, The Bunker</h3>
          </div>
          <div style={{
          minWidth: "70vw"
        }}  className='engagement'>
          <div className='photos'>
              <img className='eimg1' src={shardeum2} alt="event" />
            </div>
          <h3>Shardeum Proof of Community Event, Abia State</h3>
          </div>
          <div className='engagement'>
          <div className='photos'>
              <img className='img1' src={chair} alt="event" />
              <img className='img2' src={chair2} alt="event" />
            </div>
          <h3>21st Century Tech Skills Conference with Assemblies of GOD Youths, Ikot Ekpene</h3>
          </div>
          <div className='elarge'>
          <div className='photos'>
              <img className='img1' src={zeta2} alt="event" />
              <img className='img2' src={zeta} alt="event" />
            </div>
          <h3>Zetachain Community Meetup, Uyo: Understanding Multichain</h3>
          </div>
          <div className='elarge'>
          <div className='photos'>
              <img style={{
                maxWidth: "30vw"
              }} className='img1' src={zcm} alt="event" />
              <img style={{
                maxWidth: "60vw",
                marginLeft: "3%"
              }} src={zcm1} alt="event" />
            </div>
          <h3>Blockchain Invasion: Akwa Ibom State University, Mkpat Enin</h3>
          </div>
        </div>
        <div className='erow'>
        <div style={{
          minWidth: "60vw"
        }} className='engagement'>
            <div className='photos'>
              <img className='img1' src={ubm} alt="event" />
            </div>
            <h3>Uyo Blockchain Meetup: Careers and Skills in the Web3 Ecosystem.</h3>
          </div>
          <div style={{
          minWidth: "60vw"
        }} className='engagement'>
          <div className='photos'>
              <img className='eimg1' src={ubp} alt="event" />
            </div>
          <h3>Uyo Blockchain Pizza Day: Way Ahead, Blockchain Tech.</h3>
          </div>
          <div className='engagement'>
          <div className='photos'>
              <img className='img1' src={jnac} alt="event" />
              <img className='img2' src={jnac2} alt="event" />
            </div>
          <h3>JNAC Blockchain Invasion.</h3>
          </div>
          <div className='elarge'>
          <div className='photos'>
              <img style={{
                maxWidth: "30vw"
              }}  className='img1' src={ftt} alt="event" />
              <img className='img2' src={ftt1} alt="event" />
            </div>
          <h3>FTT DAO Blockchain Event: Growing in the Web3 Ecosystem</h3>
          </div>
          <div className='elarge'>
          <div className='photos'>
              <img style={{
                maxWidth: "30vw"
              }}  className='img1' src={spcc1} alt="event" />
              <img className='img2' src={spcc} alt="event" />
            </div>
          <h3>Shardeum Proof of Community Event, Calabar South, Nigeria.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Engagements;
