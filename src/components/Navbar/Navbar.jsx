import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

export function Navbar(props) {

    const checkLogOut = (e) => {
        // state setter for set logout.
        // props.handleLogin(false);
    }

    return (
        <div className="Navbar">
            <h2 className="desktop-header">FIT-VENGER</h2>
            <h2 className="mobile-header">FV</h2>
            <h3 className="mobile-header"> My Activity </h3>
            <div className="menu-container">
                <Link to="/" className="home-nav">Home</Link>
                { props.isLogin && <Link to="/profile" className="profile-nav">Profile</Link> }
                <Link to="/about" className="about-nav">About us</Link>
                { props.isLogin && <Link to="/login" className="logout-nav" onClick={checkLogOut}>Log out</Link> }
            </div>
        </div>
    );
}