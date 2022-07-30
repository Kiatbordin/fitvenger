import React from "react";
import "./Board.css";
import { Activities } from "../components/Activities/Activities.jsx";
import { Userinfo } from "../components/Userinfo/Userinfo.jsx";

export function Board(props) {

    const ongoingActivityItem = {
        id: 1,
        topic: "Fighting please!",
        type: "bicycling",
        schedule: "20 June 2022 at 17.00 - 23.59 AM.",
        location: "Chatuchak Park",
        status: "Ongoing",
        description: "I want to lose 5kg in 15 days.I want to lose 5kg in 15 days.I want to lose 5kg in 15 days.I want to lose 5kg in 15 days.",
        score: 0
    }

    const doneActivityItem = {
        id: 2,
        topic: "Losing 5 KG.!",
        type: "swimming",
        schedule: "10 June 2022 at 20.00 - 21.00 PM.",
        location: "Swimming pool",
        status: "Done",
        description: "Go swimming with my best friends.",
        score: 3
    }
    
    const gaveupActivityItem = {
        id: 3,
        topic: "Marathon 10 KM.!",
        type: "running",
        schedule: "5 June 2022 at 08.00 - 11.00 AM.",
        location: "Marathon Festival",
        status: "Gaveup",
        description: "First time 10 KM. marathon challenge.",
        score: 0
    }

    return (
        <div className="Board" >
            <div className="userinfo-stat-tip-container">
                <Userinfo />
                <Userinfo />
                <Userinfo />
            </div>  
            <Activities 
            doneActivities={100} 
            ongoingActivities={300} 
            gaveupActivities={200}
            ongoingActivityItem={ongoingActivityItem} 
            doneActivityItem={doneActivityItem} 
            gaveupActivityItem={gaveupActivityItem} 
            />
        </div>
    );
}