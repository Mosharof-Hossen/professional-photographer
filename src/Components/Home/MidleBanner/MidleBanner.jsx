import React from 'react';
import intoImage from "../../../Images/introduction1.jpg"
const MidleBanner = () => {
    return (
        <main className="row d-flex align-items-center justify-content-center mx-0 my-5">
            <div className=" col-md-6 text-center">
                <img  style = {{height:"500px"}} src={intoImage} className="img-fluid rounded" alt=""/>
            </div>

            <div className="col-md-4 mt-3 p-md-0 p-5">
                <h1 style = {{color:"#3A4256"}}>“Photography is the story <br/> I fail to put into words.”</h1>
                <p className="text-secondary">“In photography there is a reality so subtle that it becomes more real than reality.” “There is one thing the photograph must contain, the humanity of the moment.” “Taking an image, freezing a moment, reveals how rich reality truly is.” “Photography is a way of feeling, of touching, of loving.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa consectetur aperiam voluptatibus dolores laboriosam ad doloribus placeat, optio incidunt ea!</p>
                <button  style = {{color:"#3A4256"}}className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            
        </main>
    );
};

export default MidleBanner;