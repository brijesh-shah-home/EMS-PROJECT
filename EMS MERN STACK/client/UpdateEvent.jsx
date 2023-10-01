import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './assets/addevent.css';

function UpdateEvent() {
    const { id } = useParams();
    const [name, setName] = useState();
    const [venue, setVenue] = useState();
    const [date, setDate] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/getEvent/' + id)
            .then(result => {console.log(result)
                setName(result.data.name)
                setVenue(result.data.venue)
                setDate(result.data.date)
            })
            .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault()
        axios.put("http://localhost:3001/updateEvent/"+id, { name, venue, date })
            .then(result => {
                console.log(result)
                navigate('/Event')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center add">
            <div className="w-50 bg-white rounded p-5">
                <form onSubmit={Update}>
                    <h2>Update Event</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input
                            type="text"
                            placeholder="Enter event name"
                            className="form-control"
                            value={name} onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Venue</label>
                        <input
                            type="text"
                            placeholder="Enter event venue"
                            className="form-control"
                            value={venue} onChange={(e) => setVenue(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Date</label>
                        <input
                            type="text"
                            placeholder="Enter event date"
                            className="form-control"
                            value={date} onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success w-100">SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateEvent;
