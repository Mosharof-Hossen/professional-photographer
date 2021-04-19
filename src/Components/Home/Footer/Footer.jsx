import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import map from "../../../Images/map-pin-2-fill.png"
import facebook from "../../../Images/Vector.png"
import snap from "../../../Images/Vector-1.png"
import linkIn from "../../../Images/Vector-2.png"
import Youtube from "../../../Images/Vector-3.png"
const Footer = () => {
    return (
        <div className ="container mt-3 " style = {{backgroundColor:" rgb(231, 208, 133)"}}>
            <div className="row p-5 ">
                <div className="col-md-3 d-flex ">
                    {/* <FontAwesomeIcon className = "mr-3 mt-3" icon={faMapMarkedAlt} /> */}
                    <img className = "mr-3 mt-3" src={map} style = {{height : "30px"}} alt=""/>
                    <p><small>Nandail,Mymensingh <br/> Road#120 <br/> 2290</small></p>
                </div>
                <div className="col-md-3">
                    <h4>Company</h4>
                    <p><small>About <br/>Project <br/>Our Team <br/>Terms Conditions <br/>Submit Listing</small></p>
                </div>
                <div className="col-md-3">
                    <h4>Quick Links</h4>
                    <p><small>Quick Links <br/> Rentals <br/>Sales <br/>Contact <br/>Our Blog</small></p>
                </div>
                <div className="col-md-3">
                    <h4>About Us</h4>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas laudantium aliquam delectus nulla beatae.</small></p>
                    <img className = "mx-2" style = {{height : "30px"}} src={facebook} alt=""/>
                    <img className = "mx-2" style = {{height : "30px"}} src={snap} alt=""/>
                    <img className = "mx-2" style = {{height : "30px"}} src = {linkIn} alt=""/>
                    <img className = "mx-2" style = {{height : "30px"}} src= {Youtube} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Footer;