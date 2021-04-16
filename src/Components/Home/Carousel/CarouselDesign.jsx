import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img2 from "../../../Images/img2.png"
import img3 from "../../../Images/img3.jpg"
import img4 from "../../../Images/img4.jpg"
import img5 from "../../../Images/img5.jpg"
import img6 from "../../../Images/img6.jpg"
import img7 from "../../../Images/img7.jpg"
import "./Carousel.css"

const CarouselDesign = () => {
    return (
        <section className ="pt-5 m-0 carousel rounded" >
            <div className = "text-center mb-3">
                <h1 style = {{color:"#3A4256",fontWeight: 'bold'}}>Gallery</h1>
            </div>
            <div className="d-flex justify-content-center row m-0">
                <div  className="text-center col-md-8 " >
                    <Carousel className="">
                        <div>
                            <img src={img7} />
                            <p className="legend">Wedding Photography</p>
                        </div>
                        <div>
                            <img src={img3} />
                            <p className="legend">BaterFly Photography</p>
                        </div>
                        <div>
                            <img src={img6} />
                            <p className="legend">BirthDay Photography</p>
                        </div>
                        <div>
                            <img src={img5} />
                            <p className="legend">Flowers Photography</p>
                        </div>
                        <div>
                            <img src={img4} />
                            <p className="legend">Natural Photography</p>
                        </div>
                        <div>
                            <img src={img2} />
                            <p className="legend">Tree Photography</p>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default CarouselDesign;
