import React from "react";
import "./Navbar.css";

export function Navbar(props) {

    const checkLogOut = (e) => {
        props.handleLogin(false);
    }

    return (
        <div className="Navbar">
            <h1 className="desktop-header">FIT-VENGER</h1>
            <h1 className="mobile-header">FV</h1>
            <h2 className="mobile-header"> My Activity </h2>
            <div className="menu-container">
                <a href="#" id="home">Home</a>
                { props.isLogin && <a href="#" id="profile">Profile</a> }
                <a href="#" id="aboutus">About us</a>
                { props.isLogin && <a href="#" id="logout" onClick={checkLogOut}> Log Out</a> }
            </div>
        </div>
    );
}