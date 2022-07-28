import React from "react";
import "./Gaveupcard.css"

import running from "./icons/running.png";
import walking from "./icons/walking.png";
import swimming from "./icons/swimming.png";
import hiking from "./icons/hiking.png";
import bicycling from "./icons/bicycling.png";
import deleteButton from "./icons/deleteButton.png";

export function Gaveupcard(props) {

    const activityItem = props.activity;

    const activityIconRender = (type) => {
        switch (type) {
            case "running" :
                return <img className="activity-icon" src={running} alt="activity-icon"/>;
            case "walking" :
                return <img className="activity-icon" src={walking} alt="activity-icon"/>;
            case "swimming" :
                return <img className="activity-icon" src={swimming} alt="activity-icon"/>;
            case "hiking" :
                return <img className="activity-icon" src={hiking} alt="activity-icon"/>;
            case "bicycling" :
                return <img className="activity-icon" src={bicycling} alt="activity-icon"/>;
        }
    }

    return (
        <div className="Gaveupcard">
            <div className="gaveup-card-info">

                <div className="activity-icon-box">
                    {/* <img src={running} alt="activity-icon" /> */}
                    {activityIconRender(activityItem.type)}
                </div>
    
                <div className="activity-details-box">
                    <h2>{activityItem.topic}</h2>
                    <span>Type: {activityItem.type}</span>
                    <span>Schedule: {activityItem.schedule}</span>
                    <span>Location: {activityItem.location}</span>
                    <span>Status: {activityItem.status}</span>
                    <span>Description: {activityItem.description}</span>
                </div>
            </div>
            {/* Waiting to confirm if we have to add some component here or not ? */}
            {/* <div className="gaveup-card-menu">
                <span>Rating Star Component</span>
            </div> */}
            <img className="delete-button" src={deleteButton} alt="delete-icon" />
        </div>
    );
}