import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import { UserContext } from '../../../../App';

const stripePromise = loadStripe('pk_test_51IeSJCAVu8QSwHkAOSeEOANrMNP3em7V83ZQZY8kP0odgAgnUuKwX2cxNYooZs0z99XXuotd1JCNcyQGx2F0JCVW00fIIVRgaI');
const Book = ({ name }) => {
    const [service, setService] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [addedProduct , setAddSingleProduct] = useState(false)

    useEffect(() => {
        fetch("https://blooming-badlands-49598.herokuapp.com/service/" + name)
            .then(res => res.json())
            .then(data => {

                const product = (data[0])
                const addPd = { ...product }
                addPd.email = loggedInUser.email
                addPd.userName = loggedInUser.name
                addPd.status = "Pending"
                setService(addPd)
            })
    }, [name])
    const handleCheckOut = () => {
        setAddSingleProduct(true)
        fetch("https://blooming-badlands-49598.herokuapp.com/addedSingleProduct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(service)
        })
    }



    return (
        <div className="m-0 p-0" style={{}}>
            <div className="p-5" style={{ width: "700px" }}>
                <h1>Book</h1>
                <Table striped bordered hover variant="dark">

                    <tbody>
                        <tr>
                            <td>User Name : {loggedInUser.name}</td>
                        </tr>
                        <tr>
                            <td>User Email : {loggedInUser.email}</td>
                        </tr>
                        <tr>
                            <td>Product Name : {name}</td>
                        </tr>
                        <tr>
                            <td>Product Price : {service?.price} tk/ <sub>Photo</sub></td>
                        </tr>
                    </tbody>
                </Table>
                <h3>Pay with</h3>
                <div className="bg-white p-5">
                    <Elements stripe={stripePromise}>
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': {
                                            color: '#aab7c4',
                                        },
                                    },
                                    invalid: {
                                        color: '#9e2146',
                                    },
                                },
                            }}
                        />
                    </Elements>
                    <button onClick={handleCheckOut} className="btn btn-primary mt-5">Submit</button>
                </div>
                {
                    addedProduct && <h1>Your Product is Selected</h1>
                }
            </div>
        </div>
    );
};

export default Book;