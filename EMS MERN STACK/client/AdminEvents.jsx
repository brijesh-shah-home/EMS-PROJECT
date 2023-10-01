import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './assets/event.css';
import Footer from './Footer';
import AdminNav from './AdminNav';

function AdminEvents() {
    const [events, setEvents] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(result=> setEvents(result.data))
        .catch(err=>console.log(err))

    },[])

    const handleDelete=(id)=>{
        axios.delete('http://localhost:3001/deleteEvent/'+id)
        .then(res=>{console.log(res)
            window.location.reload()})
        .catch(errr => console.log(errr))
    }

    return (
        <>
        <AdminNav/>
        <div className='d-flex vh-100 justify-content-center align-items-center eventhome'>
            <div className='w-70 bg-white rounded p-3'>
                <Link to="/createEvent" className='btn btn-success'><i className="bi bi-plus-lg"></i> New Event</Link><br/><br/>
                <table className='table table-striped evttbl'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Venue</th>
                            <th>Date</th>
                            <th rowSpan={2}>Actions</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            events.map((event) => {
                                return <tr>
                                    <td>{event.name}</td>
                                    <td>{event.venue}</td>
                                    <td>{event.date}</td>
                                    <td>
                                    &nbsp;  <Link to={`/updateEvent/${event._id}`} className='btn btn-warning'><i className="bi bi-pencil-square"></i></Link>
                                    </td>
                                    <td>
                                    &nbsp;
                                        <button className='btn btn-danger' 
                                        onClick={(e)=>handleDelete(event._id)}><i className="bi bi-trash3"></i></button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default AdminEvents;