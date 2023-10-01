import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.css';
import Footer from './Footer';
import AdminNav from './AdminNav';

function ViewFeedback() {
    const [feedback, setFeedbacks] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/ViewFeedback/')
        .then(result=> setFeedbacks(result.data))

        .catch(err=>console.log(err))

    },[])

    const handleDelete=(id)=>{
       axios.delete('http://localhost:3001/deletefeed/'+id)
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
                <table className='table table-hover feedtbl'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            feedback.map((feedback) => {
                                return <tr> 
                                    <td>{feedback.name}</td>
                                    <td>{feedback.email}</td>
                                    <td>{feedback.feedback}</td>
                                    <td>
                                        <button className='btn btn-danger' 
                                        onClick={(e)=>handleDelete(feedback._id)}><i className="bi bi-trash3-fill"></i></button>
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

export default ViewFeedback;