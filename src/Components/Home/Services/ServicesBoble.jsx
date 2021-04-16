import React from 'react';
import "./StyleBoble.css"
import { Button, Card } from 'react-bootstrap';

const ServicesBoble = (props) => {
    const { name, description, price, img } = props.service
    return (
        <div className="flip-card my-3">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <Card style={{ width: '18rem' }} className="shadow p-3 mb-5 bg-body rounded">
                        <Card.Img variant="top" src={img} />
                        <Card.Body className="text-center">
                            <Card.Title style={{fontWeight: 'bold'}}>{name}</Card.Title>
                            
                            <h3 className="mb-3"style={{ color: "#3A4256" }}>Price:{price}tk/<sub>photo</sub></h3>
                            
                        </Card.Body>
                    </Card>
                </div>
                <div className="flip-card-back text-dark p-4 align-self-center ">
                    <p  className = "mt-5" style={{fontWeight: 'bold'}}>{description}</p>
                    <Button variant="primary">Confirm Now</Button>
                </div>
            </div>

        </div>
    );
};

export default ServicesBoble;