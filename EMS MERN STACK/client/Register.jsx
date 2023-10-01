import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './assets/register.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Register() {
    const [fullname, setFullname] = useState()
    const [eventname, setEventname] = useState()
    const [ticket, setTicket] = useState()
    const [contact, setContact] = useState()
    const [city, setCity] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/Register', { fullname, eventname, ticket, contact, city })
            .then(result => {
                console.log(result)
                navigate('/Register')
                alert("Event Booked Successfully")
                window.location.reload()
            })
            .catch(err => console.log(err))
    }
    //     const [state, setState] = React.useState({
    //         fullname: "",
    //         eventname: "",
    //         ticket:"",
    //         contact: "",
    //         city: ""
    //     });

    //     function handleChange(evt) {
    //         const value = evt.target.value;
    //         setState({ ...state, [evt.target.name]: value });
    //     }

    //     function handleSubmit(evt) {
    //         evt.preventDefault();

    //         const message = `
    //             Full Name: ${state.fullname}
    //             Event Name: ${state.eventname}
    //             Number of Tickets: ${state.ticket}
    //             Contact No: ${state.contact}
    //             City: ${state.city}
    //             `;

    //         // Display the message in an confirm
    //         window.confirm(message);

return (
    <>
        <Navbar />
        <div className='back-regi'>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='w-50 bg-white rounded p-5'>
                    <h4>Event Registration</h4>
                    <form onSubmit={Submit}>
                        <label>Full Name:</label>
                        <input type="text" name="fullname" onChange={(e) => setFullname(e.target.value)} className='form-control' />
                        
                        <label>Event Name:</label>
                        <input type="text" name="eventname" onChange={(e) => setEventname(e.target.value)} className='form-control' />

                        <label>Number of Tickets:</label>
                        <input type="number" name="ticket" onChange={(e) => setTicket(e.target.value)} className='form-control' />

                        <label>Contact No:</label>
                        <input type="text" name='contact' onChange={(e) => setContact(e.target.value)} className='form-control' />

                        <label>City:</label>
                        <input type="text" name='city' onChange={(e) => setCity(e.target.value)} className='form-control' />
                        <br />
                        <button className='btn btn-success w-100' value="Submit" name='Submit'>BOOK NOW</button>

                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </>
);
}

export default Register;
