import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.css';
import Footer from './Footer';
import AdminNav from './AdminNav';

function ViewBooking() {
    const [regi, setRegis] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/ViewBooking/')
        .then(result=> setRegis(result.data))

        .catch(err=>console.log(err))

    },[])

    const handleDelete=(id)=>{
       axios.delete('http://localhost:3001/deleteregi/'+id)
        .then(res=>{
            console.log(res)
            window.location.reload()
        })
        .catch(errr => console.log(errr))
    }
    // const handleDelete=(id)=>{
    //     axios.delete('http://localhost:3001/deleteRegi/'+id)
    //     .then(res=>{console.log(res)
    //         window.location.reload()})
    //     .catch(errr => console.log(errr))
    // }

    return (
        <>
        <AdminNav/>
        <div className='d-flex vh-100 justify-content-center align-items-center feed-back'>
            <div className='w-70 bg-white rounded p-3'>
                <table className='table table-hover tbl'>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Event Name</th>
                            <th>Tickets</th>
                            <th>Contact</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            regi.map((regi) => {
                                return <tr> 
                                    <td>{regi.fullname}</td>
                                    <td>{regi.eventname}</td>
                                    <td>{regi.ticket}</td>
                                    <td>{regi.contact}</td>
                                    <td>{regi.city}</td>
                                    <td>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button className='btn btn-danger' 
                                        onClick={(e)=>handleDelete(regi._id)}><i className="bi bi-trash"></i></button>
                                    
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

export default ViewBooking;