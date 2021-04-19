import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import logo from "../../../Images/delete.png"
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
const ManageServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [services, setServices] = useState()
    useEffect(() => {
        // fetch("https://mighty-scrubland-12520.herokuapp.com/bookings?email=" + loggedInUser.email)
        fetch("https://blooming-badlands-49598.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleDelete = (e ,name)=>{
        console.log(name)
        e.target.parentNode.parentNode.parentNode.parentNode.style.display = "none"
        fetch(`https://blooming-badlands-49598.herokuapp.com/delete/${name}`,{
            method : "DELETE"
        })
        .then(res => res.json())
        .then(result => {
            console.log("delete successfully")
        })
    }
    return (
        <div>
            <div className="d-flex">
            <div className="" style={{ width: "250px" }}>
                <Sidebar></Sidebar>
            </div>
            <div className="col-sm-10 m-0 p-0" style={{ height: "100vh", backgroundColor: "rgb(231, 208, 133)" }}>
                <div className="p-5 " style={{ width: "70%" , backgroundColor: "rgb(231, 208, 133)" }}>
                    <h1>Manage Services</h1>
                    <Table striped bordered hover className = "table" >
                        <thead>
                            <tr>
                                <th>Services Name</th>
                                <th>Price</th>
                                <th>Action(Delete)</th>
                            </tr>
                        </thead>
                        {
                            services?.map(book => 
                            <tbody key = {book._id}>
                                <tr>
                                    <td>{book.name}</td>
                                    <td>{book.price}</td>
                                    <td><Link to ="/manageServices" onClick = {(e)=>handleDelete(e,book.name)}><img   style ={{ width: "12%"}} src= {logo} alt=""></img></Link></td>
                                </tr>

                            </tbody>)
                        }
                        
                    </Table>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default ManageServices;