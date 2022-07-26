import React from "react";
import "./Footer.css";
import hamburger from "./icons/hamburger.png";

export function Footer(props){

    const checkLogOut = (e) => {
        props.handleLogin(false);
    }

    return (
        <div className="Footer">
            {/* <div className="footer-menu-container">
                <a href="#" id="home">Home</a>
                { props.isLogin && <a href="#" id="profile">Profile</a> }
                <a href="#" id="aboutus">About us</a>
                { props.isLogin && <a href="#" id="logout" onClick={checkLogOut}> Log Out</a> }
            </div> */}
            <div className="hamburger-menu-button">
                <div className="footer-menu-container">
                    <a href="#" id="home">Home</a>
                    { props.isLogin && <a href="#" id="profile">Profile</a> }
                    <a href="#" id="aboutus">About us</a>
                    { props.isLogin && <a href="#" id="logout" onClick={checkLogOut}> Log Out</a> }
                </div>
                <img src={hamburger} alt="hamburger-menu" />
            </div>
        </div>
    );
}