import React from "react";
import "./Activities.css";

import done from "./icons/done.png";
import ongoing from "./icons/ongoing.png";
import gaveup from "./icons/gaveup.png";
import add from "./icons/add.png";

// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file

// import DateRangePicker from 'rsuite/DateRangePicker';
// import 'rsuite/DateRangePicker/styles/index.less';

export function Activities(props) {

    return (
        <div className="Activities">
            <div className="date-container">
                <span>From : </span><input type="date"></input><span> To : </span><input type="date"></input>
            </div>
            <div className="summary-container">
                <img src={done} alt='done' />
                <div className="activities-result-box">
                    <h1>100</h1>
                    <span>Activities Done</span>
                </div>
                <img src={ongoing} alt='ongoing' />
                <div className="activities-result-box">
                    <h1>300</h1>
                    <span>Ongoing Activities</span>
                </div>
                <img src={gaveup} alt='gaveup' />
                <div className="activities-result-box">
                    <h1>200</h1>
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
                Board
            </div>
        </div> 
    );
}