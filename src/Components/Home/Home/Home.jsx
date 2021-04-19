import React from 'react';
import Header from '../Header/Header';
import DemoCarousel from '../Carousel/CarouselDesign'
import CarouselDesign from '../Carousel/CarouselDesign';
import Introduction from '../Introduction/Introduction';
import Services from '../Services/Services';
import MidleBanner from '../MidleBanner/MidleBanner';
import Achivement from '../Achivement/Achivement';
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div className = "mb-3">
            <Header></Header>
            <Introduction></Introduction>
            <CarouselDesign></CarouselDesign>
            <Services></Services>
            <MidleBanner></MidleBanner>
            <Reviews></Reviews>
            <Achivement></Achivement>
            <Footer></Footer>
        </div>
    );
};

export default Home;