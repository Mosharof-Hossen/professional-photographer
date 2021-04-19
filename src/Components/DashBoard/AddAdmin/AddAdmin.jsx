import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const AddAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [addedProduct, setAddSingleProduct] = useState(false)
    const onSubmit = data => {
        console.log(data)
        setAddSingleProduct(true)
        fetch("https://blooming-badlands-49598.herokuapp.com/addAdmin", {
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
                    <h1>Make Admin</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Admin Email</Form.Label>
                            <Form.Control   {...register('email', { required: true })} placeholder="xxxxxx@gmail.com" name="email" />
                        </Form.Group>

                        <Button variant="primary" type="submit">Submit</Button>

                    </form>
                    {
                        addedProduct && <h1>Selected Admin</h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;