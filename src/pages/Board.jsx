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
    console.log("context:",context);

    // Board's component has to receive the user's information from App.jsx.
    const userId = props.userInfo.userId;

    const {myActivities,addActivities,deleteActivities,updateActivities} = context;

    // Board's component will ask the user acitvities from backend using userId.
    // Assume that we have received the user activities as below.

    // const [myActivities,setMyActivities] = useState([]);

    // useEffect( () => {
    //     // Once this component rendered, It should request the user's information using userID
    //     // Then update the activities's state.
    //     // const userId = 50;  // assumming userId
    //     const updateActivities = [...getActivities(userId)];
    //     setMyActivities(updateActivities);
    // }, []);

    // const addActivities = (activity) => {
    //     // Check if we still need this method ? 
    //     // Or we can create new activity on Create activity form and re-render board page ?
    //     setMyActivities( prev => [...prev,activity]);
    // };

    // const deleteActivities = (activity) => {
    //     setMyActivities(myActivities.filter(remainActivity=>remainActivity.id !== activity.id));
    // };

    // const updateActivities = (editActivity) => {
    //     const foundIndex = myActivities.findIndex ( activity => activity.id===editActivity.id );

    //     if(foundIndex!==-1) {
    //         const { id,topic,start,end,location,status,description,score } = editActivity;

    //         setMyActivities( [...myActivities].map( activity => {
    //             if(activity.id === id) {
    //                 activity.id = id;
    //                 activity.topic = topic;
    //                 activity.start = start;
    //                 activity.end = end;
    //                 activity.location = location;
    //                 activity.status = status;
    //                 activity.description = description;
    //                 activity.score = score;
    //             } 
    //                 return activity;
    //         }));

    //         console.log("Activities Updated.");
    //         console.log(myActivities);
            
    //     } else {
    //         console.log(`updateActivities: Not found an activity id:${editActivity.id}`);
    //     }
    // };

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