import React from "react";
import "./Navbar.css";

export function Navbar(props) {

    const checkLogOut = (e) => {
        props.handleLogin(false);
    }

    return (
        <div className="Navbar">
            <h1>FIT-VENGER</h1>
            <div className="menu-container">
                <a href="#" id="home">Home</a>
                { props.isLogin && <a href="#" id="profile">Profile</a> }
                <a href="#" id="aboutus">About us</a>
                { props.isLogin && <a href="#" id="logout" onClick={checkLogOut}> Log Out</a> }
            </div>
        </div>
    );
}