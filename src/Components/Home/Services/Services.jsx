import React, { useEffect, useState } from 'react';
import ServicesBoble from './ServicesBoble';


const Services = () => {

    const [data , setData ] = useState([])

    useEffect(() => {
        fetch("https://blooming-badlands-49598.herokuapp.com/services")
        .then(response => response.json())
        .then (ser => setData(ser))
        
    },[])
    // const handelAddData = () =>{
    //     fetch("http://localhost:5000/addProduct",{
    //         method : "POST",
    //         headers :{
    //             "Content-Type": "application/json"
    //         },
    //         body :JSON.stringify(data)
    //     })
    // }
    return (
        <div className = "mt-5">
            <div className ="text-center">
                <h2 style={{fontWeight: 'bold'}}>OUR SERVICES</h2>
                {/* <button onClick ={handelAddData}>add data</button> */}
            </div>
            <div className = "d-flex justify-content-around flex-wrap">
                {
                    data.map((service,i) => <ServicesBoble key = {service.name} service = {service} ></ServicesBoble>)
                }
            </div>
        </div>
    );
};

export default Services;