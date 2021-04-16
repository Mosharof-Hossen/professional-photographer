import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ServiceDetails = (props) => {
    const { name, description, price, img } = props.service
    return (
        <div className ="my-3">
            <Card style={{ width: '18rem' }} className = "shadow p-3 mb-5 bg-body rounded">
                <Card.Img variant="top" src={img} />
                <Card.Body className="text-center">
                    <Card.Title style = {{color:"#3A4256"}}>{name}</Card.Title>
                    <Card.Text>
                        <small className="text-secondary">{description}</small>
                    </Card.Text>
                    <h3 className ="mb-3">Price:{price}tk/<sub>photo</sub></h3>
                    <Button style = {{color:"#3A4256"}} variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetails;