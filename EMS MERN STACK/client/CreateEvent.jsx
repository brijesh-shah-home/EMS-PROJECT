import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './assets/addevent.css';
import Navbar from './Navbar';
import Footer from './Footer';

function CreateEvent() {
    const [name, setName] = useState()
    const [venue, setVenue] = useState()
    const [date, setDate] = useState()
    const navigate=useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/createEvent', { name, venue, date })
            .then(result => {
                console.log(result)
                navigate('/Event')
            })
            .catch(err => console.log(err))
    }

    return (
        <>
        <Navbar/>
        <div className='d-flex vh-100 justify-content-center align-items-center add'>
            <div className='w-50 bg-white rounded p-5'>
                <form onSubmit={Submit} >
                    <h2>Add Event</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter event name' className='form-control'
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Venue</label>
                        <input type="text" placeholder='Enter event venue' className='form-control'
                            onChange={(e) => setVenue(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Date</label>
                        <input type="text" placeholder='Enter event date' className='form-control'
                            onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <button className='btn btn-success w-100'>SUBMIT</button>

                </form>

            </div>
        </div>
        <Footer/>
        </>
    )
}

export default CreateEvent;