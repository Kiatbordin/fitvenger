import React,{useState,useEffect} from "react";
import "./Userinfo.css";

import { Link } from "react-router-dom";

import {getBMI} from "../../util/activitiesWork.js"


export function Userinfo(props) {

    const data = props.userInfo;
    data.bmi = getBMI(props.userInfo.weight, props.userInfo.height);

    return (
        <div className="Userinfo">
            <div className="profile-box">
                <div className="header-image-box">
                    <img src={data.img} alt={data.name} />
                    <h1>{data.name}</h1>
                </div>
                <Link to="/login">
                    <button>Log out</button>
                </Link>
            </div>
            <div className="bmi-box">
                    <h1><span>BMI: </span>{data.bmi}</h1>
            </div>  
        </div>
    );
}
