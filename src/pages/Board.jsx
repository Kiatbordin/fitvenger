import React, { useState,useEffect,useContext } from "react";
import { DataContext } from "../App";

import "./Board.css";
import { Activities } from "../components/Activities/Activities.jsx";
import { Userinfo } from "../components/Userinfo/Userinfo.jsx";
import {Stats} from "../components/Stats/Stats.jsx"
import { Help } from "../components/Help/Help.jsx";

import { getActivities } from "../util/activitiesWork.js";

export function Board(props) {

    const context = useContext(DataContext);

    // Board's component has to receive the user's information from App.jsx.
    const userId = props.userInfo.userId;

    const {myActivities,addActivities,deleteActivities,updateActivities} = context;

    return (
        <div className="Board" >
            <div className="userinfo-stat-tip-container">
                <Userinfo userInfo={props.userInfo}/>
                <Stats activities={myActivities} userInfo={props.userInfo}/>
                <Help />
            </div>  
            <Activities 
            activities={myActivities}
            handleUpdate={updateActivities} 
            handleDelete={deleteActivities}
            />
        </div>
    );
}