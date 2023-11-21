import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Podcasts from './Podcasts';
import Medium from './Medium'
import Youtube from './Youtube';
import Community from './Community';
import Testimonials from './Testimonials';
import Engagements from './Engagements';
import Brands from './Brands';
import Newsletter from './Newsletter';
import Ebook from './Ebook';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <Intro />
      <Brands />
      <About />
      <Engagements />
      <Testimonials />
      <Ebook />
      <Community />
      <Podcasts />
      <Medium />
      <Youtube />
      <Newsletter />
      <Footer />
      {showScrollButton && (
        <button className="scrollbtn"
          onClick={scrollToTop}
        >
          <KeyboardArrowUpIcon />
        </button>
      )}
    </div>
  );
}

export default App;
