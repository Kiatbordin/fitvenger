import React,{useState} from "react";
import "./Activities.css";

import done from "../../assets/icons/done.png";
import ongoing from "../../assets/icons/ongoing.png";
import gaveup from "../../assets/icons/gaveup.png";
import add from "../../assets/icons/add.png";

import { Newcard } from "../Newcard/Newcard.jsx";
import { Ongoingcard } from "../Ongoingcard/Ongoingcard.jsx";
import { Donecard } from "../Donecard/Donecard.jsx";
import { Gaveupcard } from "../Gaveupcard/Gaveupcard.jsx";

import { DateRangePicker } from 'rsuite';

export function Activities(props) {

    // expected props ==> 

    // console.log("Activities Page Loaded.");
    // console.log(props.activities);

    const doneActivities = props.activities.filter( (activity) => activity.status === "Done" ).length || "Loading";
    const ongoingActivities = props.activities.filter( (activity) => activity.status === "Ongoing" ).length || "Loading";
    const gaveupActivities = props.activities.filter( (activity) => activity.status === "Gaveup" ).length || "Loading";

    props.activities.forEach( (activity)=> activity.display = true);

    const handleAllFilter = (e) => {
        alert('All');
        props.activities.forEach( (activity)=> activity.display = true);
        console.log(props.activities);
    };

    const handleDoneFilter = (e) => {
        alert('Done');
        props.activities.map( activity => {
            return activity.status==='Done' ? activity.display = true 
            : activity.display = false;
        });
        console.log(props.activities);
    };

    const handleOngoingFilter = (e) => {
        alert('Ongoing');
        props.activities.map( activity => {
            return activity.status==='Ongoing' ? activity.display = true 
            : activity.display = false;
        });
        console.log(props.activities);
    };

    const handleGaveupFilter = (e) => {
        alert('Gaveup');
        props.activities.map( activity => {
            return activity.status==='Gaveup' ? activity.display = true 
            : activity.display = false;
        });
        console.log(props.activities);
    };
    
    return (
        <div className="Activities">

            <DateRangePicker className="date-container" 
            size="lg" placeholder="Select Date Range"
            value={[new Date(),new Date()]}/>
            
            <div className="summary-container">
                <img src={done} alt='done' />
                <div className="activities-result-box">
                    <h6>{doneActivities}</h6>
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
                <button className="filter-all-button" onClick={handleAllFilter}>All</button>
                <button className="filter-done-button" onClick={handleDoneFilter}>Done</button>
                <button className="filter-ongoing-button" onClick={handleOngoingFilter}>Ongoing</button>
                <button className="filter-gaveup-button" onClick={handleGaveupFilter}>Gaveup</button>
            </div>

            {/* <button className="add-button"><img src={add} alt="add-button" /></button> */}

            <div className="activities-board">
                <Newcard />
                {/* {console.log('board:')}
                {console.log(props.activities)} */}

                { props.activities.length >=1 &&
                    
                    props.activities.map( activity => {
                        if(activity.status==="Ongoing") {
                            return <Ongoingcard activity={activity} key={activity.id} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
                        } else if (activity.status==="Done") {
                            return <Donecard activity={activity} key={activity.id} handleDelete={props.handleDelete}/>
                        } else if (activity.status==="Gaveup") {
                            return <Gaveupcard activity={activity} key={activity.id} handleDelete={props.handleDelete}/>
                        }
                    })

                }

            </div>
        </div> 
    );
}