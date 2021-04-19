import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import MiddleOrderList from './MiddleOrderList';
import OrderDetails from './OrderDetails';

const OrderList = () => {
    
    return (
        <div className="d-flex">
            <div className="" style={{ width: "250px" }}>
                <Sidebar></Sidebar>
            </div>
            <div className="col-sm-10 m-0 p-0" style={{ height: "100vh", backgroundColor: "rgb(231, 208, 133)" }}>
                
                <MiddleOrderList></MiddleOrderList>
            </div>
        </div>
    );
};

export default OrderList;