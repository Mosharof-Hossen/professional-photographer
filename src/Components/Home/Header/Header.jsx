import React from 'react';
import Banner from '../Banner/Banner';
import NavbarCreation from '../Navbar/Navbar';
import "./Header.css"

const Header = () => {
    return (
        <div  className = "header-style">
            <NavbarCreation></NavbarCreation>
            <Banner></Banner>
        </div>
    );
};

export default Header;