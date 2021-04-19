import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import NavbarCreation from '../../Home/Navbar/Navbar';
import MiddleOrderList from '../OrderList/MiddleOrderList';
import OrderDetails from '../OrderList/OrderDetails';
import OrderList from '../OrderList/OrderList';
import Book from './Book/Book';
import Sidebar from './Sidebar/Sidebar';

const DashBoard = () => {
    const [loggedInUser, setLoggedInUser ,admin , setAdmin] = useContext(UserContext)
    let {name} = useParams()
    return (
        <div className="d-flex">
            <div className = "" style = {{width : "250px"}}>
                <Sidebar></Sidebar>
            </div>
            <div className ="col-sm-10 m-0 p-0"style = {{height:"100vh",backgroundColor: "rgb(231, 208, 133)" }}>
                
                {
                    admin ? <MiddleOrderList></MiddleOrderList> :<Book name = {name}></Book>
                }
                
            </div>
        </div>
    );
};

export default DashBoard;