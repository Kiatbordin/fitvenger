import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

import hamburger from "../../assets/icons/hamburger.png";
import { useContext } from "react";
import { DataContext } from "../../App";
import { axiosInstance } from "./util/activitiesWork"

export function Footer(props){

    const context = useContext(DataContext);

    const handleLogout = async(e) => {
        try {
            await axiosInstance.post("/logout");
            context.setUserInfo({});
            context.setMyActivities([]);
            context.setIsLogin(false);
        } catch (err) {
            console.log("handleLogout Catch:" + err.message)
        }
    }

    return (
        <div className="Footer">
            <div className="hamburger-menu-button">
                <div className="footer-menu-container">
                    { props.isLogin && <Link to="/home">Home</Link> }
                    { props.isLogin && <Link to={`/edit/${context.userInfo._id}`}>Profile</Link> }
                    {/* <Link to="/about">About us</Link> */}
                    { props.isLogin && <Link to="/" onClick={handleLogout}>Log out</Link> }
                </div>
                <img src={hamburger} alt="hamburger-menu" />
            </div>
        </div>
    );
}