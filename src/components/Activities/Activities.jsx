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

import { DateRangePicker } from 'rsuite';

export function Activities(props) {

    // expected props ==> 
    const doneActivities = props.doneActivities || 0;
    const ongoingActivities = props.ongoingActivities || 0;
    const gaveupActivities = props.gaveupActivities || 0;

    const ongoingActivityItem = props.ongoingActivityItem;
    const doneActivityItem = props.doneActivityItem;
    const gaveupActivityItem = props.gaveupActivityItem;

    return (
        <div className="Activities">
            {/* <div className="date-container">
                <span>From : </span><input type="date"></input><span> To : </span><input type="date"></input>
            </div> */}
            <DateRangePicker className="date-container" size="lg" placeholder="Select Date Range"/>
            <div className="summary-container">
                <img src={done} alt='done' />
                <div className="activities-result-box">
                    <h6 className="testh2">{doneActivities}</h6>
                    <span>Activities Done</span>
                </div>
                <img src={ongoing} alt='ongoing' />
                <div className="activities-result-box">
                    <h6>{ongoingActivities}</h6>
                    <span>Ongoing Activities</span>
                </div>
                <img src={gaveup} alt='gaveup' />
                <div className="activities-result-box">
                    <h6>{gaveupActivities}</h6>
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