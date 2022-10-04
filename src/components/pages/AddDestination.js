import React, {useState} from 'react';
import '../../App.css';

function AddDestination() {
    const [newData, setNewData] = useState({
        name: "",
        src: "",
        text: "",
        label: ""
    });

    function handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:3000/destinations", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
        });
    }

    function handleChange(event){
        setNewData({
            ...newData,
            [event.target.id]: event.target.value
        })
    }

    return (
        <React.Fragment>
            <div className = "message-input">
                <h4>Kindly fill in the form below:</h4>
                <form id="messageForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input onChange={handleChange} value={newData.name}  type="text" className="form-control" id="name" aria-describedby="itemName"/>
                    </div>
                    <div className="form-group">
                        <label  className="form-label">Image Source</label>
                        <input onChange={handleChange} value={newData.src} type="text" className="form-control" id="src" aria-describedby="src"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Text</label>
                        <textarea onChange={handleChange} value={newData.text} className="form-control" id="text" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Label</label>
                        <input onChange={handleChange} value={newData.label} type="number" min="0" className="form-control" id="label" aria-describedby="label"/>
                    </div>
                    
                    <button type="submit" id = "messageButton" className="btn btn-primary">Add Destination</button>
                </form>
            </div>
            
        </React.Fragment>
    )
}

export default AddDestination;