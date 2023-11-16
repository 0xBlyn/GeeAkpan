import React, { useState, useEffect } from 'react';
import brands from './assets/brands.png';
import './Brands.css';

function Brands() {
  const [numCopies, setNumCopies] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const numCopiesToShow = Math.ceil(window.innerWidth / 180);
      setNumCopies(numCopiesToShow);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="community brands">
      <div className="head">
        <h1 style={{ margin: '0 10%' }}>Brands I’ve Worked With Over The Years</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M11.6667 16.6665L20 24.9998L28.3333 16.6665H11.6667Z" fill="#238DDB" />
        </svg>
      </div>
      <div className='brand_logos'>
        <div className="image-container">
          {[...Array(numCopies * 2)].map((_, index) => (
            <img key={index} src={brands} alt={`companies worked with ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brands;
