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

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App; 
