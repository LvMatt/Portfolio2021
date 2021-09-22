import React, {useState} from 'react';
import HomePage from '../Pages/HomePage/HomePage';
import About from '../Pages/About/About';
import Portfolio from '../Pages/Portfolio/Portfolio';
import Contact from '../Pages/Contact/Contact';
import Navigation from '../Components/Navigation/Navigation';
function HomePageWrapper() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
      <div >
        <Navigation toggle={toggle} isOpen={isOpen}/>
        <HomePage/>
        <About/>
        <Portfolio/>
        <Contact/>
      </div>
  );
}

export default HomePageWrapper;
