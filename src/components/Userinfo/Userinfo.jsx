import React,{useState,useEffect} from "react";
import "./Userinfo.css";
import { Link } from "react-router-dom";

import {axiosInstance, getBMI} from "../../util/activitiesWork.js"

import anonymous from "../../assets/icons/anonymous.png"
import { useContext } from "react";
import { DataContext } from "../../App";
import { AxiosInstance } from "axios";

export function Userinfo(props) {

    const context = useContext(DataContext)

    const data = props.userInfo;
    data.bmi = getBMI(props.userInfo.weight, props.userInfo.height);

    const handleLogout = async(e) => {
        /* Clear all states in App.jsx */
        // context.setUserInfo({});
        // context.setMyActivities([]);
        // context.setIsLogin(false);
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
        <div className="Userinfo">
            <div className="profile-box">
                <div className="header-image-box">
                    {data.img=="" && <img src={anonymous} alt="anonymous" /> }
                    {data.img!="" && <img src={data.img} alt={data.name} /> }
                    <h1>{data.name}</h1>
                </div>
                <Link to="/">
                    <button onClick={handleLogout}>Log out</button>
                </Link>
            </div>
            <div className="bmi-box">
                    <h1><span>BMI: </span>{data.bmi}</h1>
            </div>  
        </div>
    );
}
