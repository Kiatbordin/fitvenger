import React from "react";
import "./Ongoingcard.css"

import running from "./icons/running.png";
import walking from "./icons/walking.png";
import swimming from "./icons/swimming.png";
import hiking from "./icons/hiking.png";
import bicycling from "./icons/bicycling.png";
import deleteButton from "./icons/deleteButton.png";
import nextButton from "./icons/nextButton.png"

import { Link } from "react-router-dom";

import { DoneButton } from "../DoneButton/DoneButton.jsx";

export function Ongoingcard(props) {

    const activityItem = props.activity;

    const confirmDone = () => {
        let isDone = confirm("Have you finished this activity ?");
        console.log(isDone);
        if(isDone) {
            let score = prompt("Please rate your activity[ 1-5 ]: ", 1 );
            score = parseInt(score);

            if (score > 0 && score < 6) {
                alert("Thanks for rating.");
                // Then updating the backend work using the props receiving from parent component.
            } else {
                alert("Please rate between 1 to 5.")
            }
        } else {
            // Do nothing.
        };

        // Do backend work and re-render the main page.
    }

    const confirmGaveup = () => {
        let isGaveup = confirm("Do you want to give up ?");
        console.log(isGaveup);

        // Do backend work and refresh the main page.
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
        <div className="Ongoingcard">
            <div className="ongoing-card-info">

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
            <div className="ongoing-card-menu">
                {/* <button className="done-button" onClick={confirmDone}>Done</button> */}
                <DoneButton />
                <button className="gaveup-button" onClick={confirmGaveup}>Gave up</button>
            </div>
            <img className="delete-button" src={deleteButton} alt="delete-icon" />
            {/* <img className="next-button" src={nextButton} alt="delete-icon" /> */}

            <Link to="/edit">
                <img className="next-button" src={nextButton} alt="next-icon" />
            </Link>

        </div>
    );
}