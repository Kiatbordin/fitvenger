import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

import hamburger from "../../assets/icons/hamburger.png";

export function Footer(props){

    const checkLogOut = (e) => {
        props.handleLogin(false);
    }

    return (
        <div className="Footer">
            <div className="hamburger-menu-button">
                <div className="footer-menu-container">
                    <Link to="/">Home</Link>
                    { props.isLogin && <Link to="/profile">Profile</Link> }
                    <Link to="/about">About us</Link>
                    { props.isLogin && <Link to="/login" onClick={checkLogOut}>Log out</Link> }
                </div>
                <img src={hamburger} alt="hamburger-menu" />
            </div>
        </div>
    );
}