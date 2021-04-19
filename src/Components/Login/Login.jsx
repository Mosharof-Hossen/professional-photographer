import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from "react-router";
import "./Login.css"
import NavbarCreation from '../Home/Navbar/Navbar';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}



const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };
    const handleLogin = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signInUser = {
                    name: displayName,
                    email: email
                }
                setLoggedInUser(signInUser)
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }


    return (
        <div>
            <NavbarCreation></NavbarCreation>
            <div className="container text-center mt-5 google">
                <Button onClick={handleLogin} variant="outline-primary">Google Sign in</Button>
            </div>
        </div>
    );
};

export default Login;