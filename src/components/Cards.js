import React, {useEffect, useState} from 'react';
import './Cards.css';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Card from 'react-bootstrap/Card';

function Cards() {
  const [destination, setDestination] = useState ([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
  fetch("https://tradvisor-app.herokuapp.com/")
    .then((response) => response.json())
    .then((data) => setDestination(data))
    .catch(console.log);
}, [setDestination]);

function handleClick (index){
  setCurrentIndex(index);
}

return (
  <>
    {destination.length && (
      <React.Fragment>
      <Card className = "destination-card" body>
      <h1>Take a look at these incredible destinations: </h1>
        <div>
          <div className="destination-info">
          <img src={destination[currentIndex].src} alt="destination"/>
            <div>
              <h4 className="bold-text">{destination[currentIndex].label}</h4>
            </div>
            <p className="p-text">{destination[currentIndex].text}</p>
          </div>
        </div>
        <div className="center-btn">
          <div className="left-btn" onClick={() => handleClick(currentIndex === 0 ? destination.length - 1 : currentIndex - 1)}>
            <HiChevronLeft />
          </div>
          <div className="right-btn" onClick={() => handleClick(currentIndex === destination.length - 1 ? 0 : currentIndex + 1)}>
            <HiChevronRight />
          </div>
        </div>
        </Card>
      </React.Fragment>
    )}
  </>
)}

export default Cards;