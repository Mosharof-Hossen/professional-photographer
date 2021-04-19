import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const AddReview = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [addedProduct, setAddSingleProduct] = useState(false)
    const onSubmit = data => {
        setAddSingleProduct(true)
        fetch("https://blooming-badlands-49598.herokuapp.com/addReview", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => console.log("server side response"))
    }
    return (
        <div className="d-flex">
            <div className="" style={{ width: "250px" }}>
                <Sidebar></Sidebar>
            </div>
            <div className="col-sm-10 m-0 p-0" style={{ height: "100vh", backgroundColor: "rgb(231, 208, 133)" }}>
                <div className="p-5 " style={{ width: "70%" }}>
                    <h1>Your Opinion</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control   {...register('name', { required: true })} placeholder="Enter Your name" name="name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Company Name Or Location</Form.Label>
                            <Form.Control placeholder="" name="from"{...register('from', { required: true })} />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Control as="textarea" rows={4} placeholder="Description" {...register('quote', { required: true })} label="Example file input" />
                        </Form.Group>


                        <Button variant="primary" type="submit">Submit</Button>
                    </form>
                    {
                        addedProduct && <h1>Your Review has been added  the Home page</h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default AddReview;