import React, {useEffect, useState} from 'react';
// import CardItem from './CardItem';
import './Cards.css';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Card from 'react-bootstrap/Card';

function Cards() {
  const [destination, setDestination] = useState ([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
  fetch("http://localhost:3000/destinations")
    .then((response) => response.json())
    .then((data) => setDestination(data))
    .catch(console.log);
}, [setDestination]);

function handleClick (index){
  setCurrentIndex(index);
}

// function handleDetails(id){

// }

return (
  <>
    {destination.length && (
      <>
      <h1>Take a look at these incredible destinations: </h1>
      <Card className = "destination-card" body>
        <div>
          <img className = "img" src={destination[currentIndex].src} alt="destination"/>
          <div className="destination-info">
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
          {/* <button onClick = {()=> handleDetails(id)}>View Details</button> */}
        </div>
        </Card>
      </>
    )}
  </>
)}

// const url = `/destination/destination-details/${id}`;

// const destin = destination.map((d, id)=> {
//   return <React.Fragment key={id}>
//             <div>
//                 <CardItem  name={d.name} src={d.src} text={d.text} label={d.label} path = {url} >
//                 </CardItem>
//             </div>
//       </React.Fragment>
// });

  // return (
  //   <div className = "cards">
  //       <h1>Take a look at these incredible destinations: </h1>
  //       <div className = "cards__container">
  //           <div className = "cards__wrapper">
  //               <ul className = "cards__items">{destin}</ul>
  //             <div className ="card-holder">
  //               {/* {destin} */}
  //             </div>
  //           </div>

  //       </div>
  //   </div>
  // )}

export default Cards;