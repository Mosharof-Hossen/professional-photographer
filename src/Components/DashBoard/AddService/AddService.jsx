import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const [addedProduct, setAddSingleProduct] = useState(false)
    const onSubmit = data => {

        console.log(data)
        const eventData = {
            name: data.name,
            price: data.price,
            img: imageURL,
            description : data.description
        }
        setAddSingleProduct(true)
        fetch("https://blooming-badlands-49598.herokuapp.com/addService", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log("server side response"))
    };


    const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData()
        imageData.set("key", "ac749b44cc45f3257ae3139ede1cbada")
        imageData.append("image", event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="d-flex">
            <div className="" style={{ width: "250px" }}>
                <Sidebar></Sidebar>
            </div>
            <div className="col-sm-10 m-0 p-0" style={{ height: "100vh", backgroundColor: "rgb(231, 208, 133)" }}>
                <div className="p-5">
                    <h1>Add Services</h1>
                    {/* action="http://localhost:5000/addProduct" method="post" */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Service Name</Form.Label>
                            <Form.Control   {...register('name', { required: true })} placeholder="Service Name" name="name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Price</Form.Label>
                            <Form.Control placeholder="Price" name="price"{...register('price', { required: true })} />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                        <Form.Label>Product Description</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Description" {...register('description', { required: true })} label="Example file input" />
                        </Form.Group>


                        <Form.Group controlId="formBasicCheckbox">
                            <Form.File onChange={handleImageUpload} id="exampleFormControlFile1" label="Input Product Image" />
                        </Form.Group>


                        <Button variant="primary" type="submit">Submit</Button>
                    </form>
                    {
                        addedProduct && <h1>Your Product has been sent to the database</h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default AddService;