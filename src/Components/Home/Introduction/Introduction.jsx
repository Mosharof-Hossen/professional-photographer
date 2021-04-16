import React from 'react';
import intoImage from "../../../Images/introduction3.jpg"

const Introduction = () => {
    return (
        <main className="row d-flex align-items-center mx-0 my-5">
            <div className="col-md-4 offset-md-1 mt-3 p-md-0 p-5">
                <h1 style = {{color:"#3A4256"}}>Seeing the World ,<br/>Through the Eyes of <br/> My Lens</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa consectetur aperiam voluptatibus dolores laboriosam ad doloribus placeat, optio incidunt ea!</p>
                <button  style = {{color:"#3A4256"}}className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6 ">
                <img src={intoImage} className="img-fluid rounded" alt=""/>
            </div>
        </main>
    );
};

export default Introduction;