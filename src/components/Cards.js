import React, {useEffect, useState} from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards(id) {
  const [destination, setDestination] = useState ([]);

  useEffect(() => {
  fetch("http://localhost:3000/destinations")
    .then((response) => response.json())
    .then((data) => setDestination(data))
    .catch(console.log);
}, [setDestination]);

const url = `/destination/destination-details/${id}`;

const destin = destination.map((d, id)=> {
  return <React.Fragment key={id}>
            <div>
                <CardItem  name={d.name} src={d.src} text={d.text} label={d.label} path = {url} >
                </CardItem>
            </div>
      </React.Fragment>
});

  return (
    <div className = "cards">
        <h1>Take a look at these incredible destinations: </h1>
        <div className = "cards__container">
            <div className = "cards__wrapper">
                <ul className = "cards__items"></ul>
              <div className = "card-holder">
                {destin}
              </div>
            </div>

        </div>
    </div>
  )
}

export default Cards;