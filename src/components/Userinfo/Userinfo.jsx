import React from "react";
import "./Userinfo.css";

import { Link } from "react-router-dom";

export function Userinfo(props) {

    // expected props
    const data = {
        name: "Thomas Alva Edison", 
        // name: "Very very very very long name. Very very very very long name. Very very very very long name. Very very very very long name. Very very very very long name. Very very very very long name.",
        age: 29, 
        height:170, 
        weight:70, 
        bmi: 21.6, 
        totalDuration: 60, 
        calories: 106, 
        img:"https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg"
    };

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
