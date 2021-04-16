import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import CardFlip from './Services2';
import ServicesBoble from './ServicesBoble';
const servicesData = [
    {
        name:"BirthDay Photos Shoot",
        price : "5",
        description : "Takimata rebum takimata labore eirmod sanctus clita no. Consetetur clita amet elitr duo justo. Dolor.",
        img :"https://preppykitchen.com/wp-content/uploads/2016/09/Chocolate-Peanut-Butter-Cake-recipe.jpg"  
    },
    {
        name:"Wedding Photos Shoot",
        price : "9",
        description : "Takimata rebum takimata labore eirmod sanctus clita no. Consetetur clita amet elitr duo justo. Dolor.",
        img :"https://imgmedia.lbb.in/media/2019/03/5c99cf00b07bd446014221b4_1553583872757.jpg"  
    },
    {
        name:"Pohela BaiShakh Photos Shoot",
        price : "8",
        description : "Takimata rebum takimata labore eirmod sanctus clita no. Consetetur clita amet elitr duo justo. Dolor.",
        img :"https://albangladesh.com/wp-content/uploads/2020/04/Pohela-Boishakh-2020-Picture-3.jpg"  
    },
    {
        name:"Couple Photos Shoot",
        price : "7",
        description : "Takimata rebum takimata labore eirmod sanctus clita no. Consetetur clita amet elitr duo justo. Dolor.",
        img :"https://image.winudf.com/v2/image1/Y29tLmNvdXBsZS5waWMuY291cGxlcGljLmNvdXBsZXBvc2UucGhvdG9zaGhvdC5jdXRlY291cGxlX3NjcmVlbl8wXzE1NjcyNzU0MjRfMDI0/screen-0.jpg?fakeurl=1&type=.jpg"  
    }
]

const Services = () => {
    const styles = {
        card: {
          border: '1px solid #eeeeee',
          borderRadius: '3px',
          padding: '15px',
          width: '250px'
        },
        image: {
          height: '200px',
          width: '220px'
        }
      };
    return (
        <div className = "mt-5">
            <div className ="text-center">
                <h2 style={{fontWeight: 'bold'}}>OUR SERVICES</h2>
            </div>
            <div className = "d-flex justify-content-around flex-wrap">
                {
                    servicesData.map(service => <ServicesBoble service = {service} ></ServicesBoble>)
                }
            </div>
        </div>
    );
};

export default Services;