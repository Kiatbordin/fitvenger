import React from "react";
import "./Donecard.css"

import running from "../../assets/icons/running.png"
import walking from "../../assets/icons/walking.png"
import swimming from "../../assets/icons/swimming.png"
import hiking from "../../assets/icons/hiking.png"
import bicycling from "../../assets/icons/bicycling.png"
import deleteButton from "../../assets/icons/deleteButton.png"

import { Rate } from 'rsuite';

export function Donecard(props) {
    
    const activityItem = props.activity;

    const handleDelete = (e) => {
        let isDelete = confirm("Do you want to delete this activity ?");
        if(isDelete) {
            props.handleDelete(activityItem);

            // Then updating the database.
        } 
    }

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
        <div className="Donecard">
            <div className="done-card-info">

                <div className="activity-icon-box">
                    {/* <img src={running} alt="activity-icon" /> */}
                    {activityIconRender(activityItem.type)}
                </div>
    
                <div className="activity-details-box">
                    <h2>{activityItem.topic}</h2>
                    <span>Type: {activityItem.type}</span>
                    <span>From: {activityItem.start}</span>
                    <span>To: {activityItem.end}</span>
                    <span>Location: {activityItem.location}</span>
                    <span>Status: {activityItem.status}</span>
                    <span>Description: {activityItem.description}</span>
                </div>
            </div>
            <div className="done-card-menu">
                <Rate readOnly defaultValue={activityItem.score} allowHalf />
            </div>
            <img className="delete-button" src={deleteButton} alt="delete-icon" onClick={handleDelete}/>
        </div>
    );
}