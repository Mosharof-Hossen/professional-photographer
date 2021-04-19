import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import OrderDetails from './OrderDetails';

const MiddleOrderList = () => {
    const [allOrder, setAllOrder] = useState([])

    useEffect(() => {
        fetch("https://blooming-badlands-49598.herokuapp.com/allOrder")
            .then(response => response.json())
            .then(ser => setAllOrder(ser))

    }, [])
    console.log(allOrder)
    return (
        <div className="p-5">
            <h1>Order List</h1>
            <Table hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Service</th>
                        <th>Pay With</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        allOrder?.map(order => <OrderDetails key={order._id} order={order}></OrderDetails>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MiddleOrderList;