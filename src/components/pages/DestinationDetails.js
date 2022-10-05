import React, {useState, useEffect} from 'react';
import '../Cards.css';
import CardItem from '../CardItem';
// import Card from 'react-bootstrap/Card';

export default function DestinationDetails(id) {
    const [destination, setDestination] = useState(null);
    const url = `/destination/destination-details/${id}`;

    useEffect(() => {
        fetch(`http://localhost:3000/destinations/${id}`)
        .then(response => response.json())
        .then(setDestination);
    }, [id]);

    const destin = destination.map((d, id)=> {
        return <React.Fragment key={id}>
            <div>
                <CardItem  name={d.name} src={d.src} text={d.text} label={d.label} path ={url} >
                </CardItem>
            </div>
        </React.Fragment>
    });

    // return { data: destination };

    return (
        <div className = "cards">
            <h1>Destination Information: </h1>
            <div className = "cards__container">
                <div className = "cards__wrapper">
                    <ul className = "cards__items"></ul>
                    {destin}
                </div>
    
            </div>
        </div>
    )
    // return (
    //     <React.Fragment>
    //         <div className='services'>
    //             <Card body className = "services-card">
    //                 <h1>Destination Information:</h1>
    //                 <p></p> <br />
    //             </Card>
    //         </div>
    //     </React.Fragment>
    //     )
}