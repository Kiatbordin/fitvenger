import React, { useState,useEffect } from "react";
import "./Board.css";
import { Activities } from "../components/Activities/Activities.jsx";
import { Userinfo } from "../components/Userinfo/Userinfo.jsx";
import {Stats} from "../components/Stats/Stats.jsx"
import { Help } from "../components/Help/Help.jsx";

import { getActivities } from "../util/activitiesWork.js";

export function Board(props) {

    // Board's component has to receive the user's information from App.jsx.
    const userId = props.userId;
    // Board's component will ask the user acitvities from backend using userId.
    // Assume that we have received the user activities as below.

    const [myActivities,setMyActivities] = useState([]);

    useEffect( () => {
        // Once this component rendered, It should request the user's information using userID
        // Then update the activities's state.
        const userId = 50;  // assumming userId
        const updateActivities = [...getActivities(userId)];
        setMyActivities(updateActivities);
    }, []);

    const addActivities = (activity) => {
        // Check if we still need this method ? 
        // Or we can create new activity on Create activity form and re-render board page ?
        setMyActivities( prev => [...prev,activity]);
    };

    const deleteActivities = (activity) => {
        setMyActivities(myActivities.filter(remainActivity=>remainActivity.id !== activity.id));
    };

    const updateActivities = (editActivity) => {
        foundIndex = myActivities.findIndex ( activity => activity.id===editActivity.id );
        if(foundIndex!==-1) {
            const { id,topic,start,end,location,status,description,score } = editActivity;
            setMyActivities( ...prev, 
                activity[foundIndex].id = id,
                activity[foundIndex].topic = topic,
                activity[foundIndex].start = start,
                activity[foundIndex].end = end,
                activity[foundIndex].location = location,
                activity[foundIndex].status = status,
                activity[foundIndex].description = description,
                activity[foundIndex].score = score,
                );
        } else {
            console.log(`updateActivities: Not found an activity id:${editActivity.id}`);
        }
    };

    return (
        <div className="Board" >
            <div className="userinfo-stat-tip-container">
                <Userinfo />
                <Stats activities={myActivities}/>
                <Help />
            </div>  
            <Activities 
            activities={myActivities}
            handleDelete={deleteActivities}
            />
        </div>
    );
}