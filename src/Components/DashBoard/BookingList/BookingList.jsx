import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingDetails from '../BookingDetails/BookingDetails';
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser ,admin , setAdmin] = useContext(UserContext)
    const [bookings, setBookings] = useState()
    useEffect(() => {
        fetch("https://blooming-badlands-49598.herokuapp.com/bookings?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [loggedInUser.email])
    return (
        <div className="d-flex">
            <div className = "" style = {{width : "250px"}}>
                <Sidebar></Sidebar>
            </div>
            <div className ="col-sm-10 m-0 p-0"style = {{height:"100vh",backgroundColor: "rgb(231, 208, 133)" }}>
                <div className = " p-5">
                    <h1>Booking List</h1>
                    <div className = "d-flex justify-content-around flex-wrap">
                    {
                        bookings?.map((book => <BookingDetails book={book} key={book._id}></BookingDetails>))
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;