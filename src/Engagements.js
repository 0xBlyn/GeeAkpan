// Engagements.js
import React from 'react';
import Engagement from './Engagement'
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
          <Engagement title="Happy Teens For the Future Conference" image={tftf} image2={tftf1} />
          <Engagement title="Happy Teens For the Future Conference"  image={htfc} image2={tftf3} />
          <Engagement title="Flow Network, Uyo: Become a Web3 OG; The Benefits of Value Contribution" image={flown} image2={jnac} />
          <Engagement title="Shardeum Proof of Community Event, Port Harcourt" />
        </div>
        <div className='erow2'>
          <Engagement title="Shardeum Proof of Community: Communication in Web3, The Bunker" image={shardeum} /> 
          <Engagement title="Shardeum Proof of Community Event, Abia State" image={shardeum2} />
          <Engagement title="21st Century Tech Skills Conference with Assemblies of GOD Youths, Ikot Ekpene" image={chair} image2={chair2}  />
          <Engagement title="Zetachain Community Meetup, Uyo: Understanding Multichain" image={zeta2} image2={zeta}  />
        </div>
        <div className='erow'>
          <Engagement title="Uyo Blockchain Meetup: Careers and Skills in the Web3 Ecosystem." image={ubm} />
          <Engagement title="Uyo Blockchain Pizza Day: Way Ahead, Blockchain Tech." image={ubp} />
          <Engagement title="JNAC Blockchain Invasion." image={jnac} image2={jnac2}  />
        </div>
      </div>
    </div>
  );
}

export default Engagements;
