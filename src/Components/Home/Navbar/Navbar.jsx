import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import cameraLogo from '../../../Images/camera-logo.png'
import "./Navbar.css"
import { Link } from 'react-router-dom';
const NavbarCreation = () => {
    return (
            <Navbar style ={{backgroundColor:"rgba(0,0,0,.3)",color : "white"}}  expand="lg">
                <Navbar.Brand className="text-white" href="/home"><img  className = "camera-logo mr-1" src={cameraLogo} alt=""/> LenS</Navbar.Brand>
                <Navbar.Toggle style ={{color:"white"}} className="text-white"  aria-controls="basic-navbar-nav" ><span class="fas fa-bars navbar-icon"></span></Navbar.Toggle>
                <Navbar.Collapse className="text-white" id="basic-navbar-nav">
                    <Nav className="ml-auto text-white">
                        <Link className = "mx-2" to="/home"><Button style={{width:"100%"}} className = "header-btn text-white" variant="outline-primary">Home</Button></Link>
                        <Link className = "mx-2" to="/team"><Button style={{width:"100%"}} className = "header-btn text-white" variant="outline-primary">Our Team</Button></Link>
                        <Link className = "mx-2" to="/reviews"><Button style={{width:"100%"}} className = "header-btn text-white" variant="outline-primary">Reviews</Button></Link>
                        <Link className = "mx-2" to="/blog"><Button style={{width:"100%"}} className = "header-btn text-white" variant="outline-primary">Blog</Button></Link>
                        <Link className = "mx-2" to="/contact"><Button style={{width:"100%"}} className = "header-btn text-white" variant="outline-primary">Contact Us</Button></Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
    );
};

export default NavbarCreation;