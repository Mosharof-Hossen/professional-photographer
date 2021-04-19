import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faPlus, faUserPlus, faUsers, faCartPlus, faShoppingBag, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "./Sidebar.css"
import { UserContext } from '../../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser ,admin , setAdmin] = useContext(UserContext)
    // const [admin, setAdmin] = useState()
    useEffect(() => {
        fetch("https://blooming-badlands-49598.herokuapp.com/admin?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [loggedInUser.email])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 m-0 py-5 px-4" style={{ height: "100vh", backgroundColor: "rgb(231, 208, 133)" }}>
            <ul className="list-unstyled">

                <li>
                    <Link to="/home" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                {admin ?


                    <div>
                        <li>
                            <Link to="/orderList" className="text-white">
                                <FontAwesomeIcon icon={faUsers} /> <span>Order List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService" className="text-white" >
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin" className="text-white" >
                                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageServices" className="text-white" >
                                <FontAwesomeIcon icon={faCog} /> <span>Manage Services</span>
                            </Link>
                        </li>
                    </div> :
                    <div>
                        <li>
                            <Link to="/dashboard" className="text-white">
                                <FontAwesomeIcon icon={faCartPlus} /> <span>Book</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/bookingList" className="text-white">
                                <FontAwesomeIcon icon={faShoppingBag} /> <span>Booking List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addReview" className="text-white">
                                <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                            </Link>
                        </li>
                    </div>
                }
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;