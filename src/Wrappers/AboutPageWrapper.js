import React, {useState} from 'react';
import Navigation from '../Components/Navigation/Navigation';
function HomePageWrapper() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
      <div >
        <Navigation toggle={toggle} isOpen={isOpen}/>
      </div>
  );
}

export default HomePageWrapper;
