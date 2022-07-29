import React from "react";
import { Link } from "react-router-dom";
import "./Activities.css";

import done from "./icons/done.png";
import ongoing from "./icons/ongoing.png";
import gaveup from "./icons/gaveup.png";
import add from "./icons/add.png";

import { Newcard } from "../Newcard/Newcard.jsx";
import { Ongoingcard } from "../Ongoingcard/Ongoingcard.jsx";
import { Donecard } from "../Donecard/Donecard.jsx";
import { Gaveupcard } from "../Gaveupcard/Gaveupcard.jsx";

export function Activities(props) {

    // expected props ==> 
    const doneActivities = props.doneActivities || 0;
    const ongoingActivities = props.ongoingActivities || 0;
    const gaveupActivities = props.gaveupActivities || 0;

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
        <div className="Activities">
            <div className="date-container">
                <span>From : </span><input type="date"></input><span> To : </span><input type="date"></input>
            </div>
            <div className="summary-container">
                <img src={done} alt='done' />
                <div className="activities-result-box">
                    <h1>{doneActivities}</h1>
                    <span>Activities Done</span>
                </div>
                <img src={ongoing} alt='ongoing' />
                <div className="activities-result-box">
                    <h1>{ongoingActivities}</h1>
                    <span>Ongoing Activities</span>
                </div>
                <img src={gaveup} alt='gaveup' />
                <div className="activities-result-box">
                    <h1>{gaveupActivities}</h1>
                    <span>Gaveup Activities</span>
                </div>
            </div>
            <div className="filter-container">
                <button className="filter-all-button">All</button>
                <button className="filter-done-button">Done</button>
                <button className="filter-ongoing-button">Ongoing</button>
                <button className="filter-gaveup-button">Gaveup</button>
            </div>

            <button className="add-button"><img src={add} alt="add-button" /></button>

            <div className="activities-board">
                <Newcard />
                <Ongoingcard activity={ongoingActivityItem} />
                <Donecard activity={doneActivityItem} />
                <Gaveupcard activity={gaveupActivityItem} />
                <Newcard />
            </div>
        </div> 
    );
}