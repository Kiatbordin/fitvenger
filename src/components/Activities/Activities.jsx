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
    const [filterAll,setFilterAll] = useState(true);
    const [filterDone,setFilterDone] = useState(false);
    const [filterOngoing,setFilterOngoing] = useState(false);
    const [filterGaveup,setFilterGaveup] = useState(false);

    // console.log("Activities Page Loaded.");
    // console.log(props.activities);

    const doneActivities = props.activities.filter( (activity) => activity.status === "Done" ).length || "Loading";
    const ongoingActivities = props.activities.filter( (activity) => activity.status === "Ongoing" ).length || "Loading";
    const gaveupActivities = props.activities.filter( (activity) => activity.status === "Gaveup" ).length || "Loading";

    const handleAllFilter = (e) => {
        setFilterAll(true);
        setFilterDone(false);
        setFilterOngoing(false);
        setFilterGaveup(false);
    };

    const handleDoneFilter = (e) => {
        setFilterAll(false);
        setFilterDone(true);
        setFilterOngoing(false);
        setFilterGaveup(false);
    };

    const handleOngoingFilter = (e) => {
        setFilterAll(false);
        setFilterDone(false);
        setFilterOngoing(true);
        setFilterGaveup(false);
    };

    const handleGaveupFilter = (e) => {
        setFilterAll(false);
        setFilterDone(false);
        setFilterOngoing(false);
        setFilterGaveup(true);
    };

    const handleDateOK = (e) => {
        console.log(e);
        console.log("OK Press");
    }
    
    return (
        <div className="Activities">

            <DateRangePicker className="date-container" 
            size="lg" placeholder="Select Date Range"
            // value={[new Date(),new Date()]}/>
            onOk={handleDateOK}
            />
            
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

                {/* Filtering and condition rendering card */}
                <Newcard />
                { props.activities.length >=1 &&
                    
                    props.activities.map( activity => {

                        if(filterAll) {
                            if(activity.status==="Ongoing") {
                                return <Ongoingcard activity={activity} key={activity.id} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
                            } else if (activity.status==="Done") {
                                return <Donecard activity={activity} key={activity.id} handleDelete={props.handleDelete}/>
                            } else if (activity.status==="Gaveup") {
                                return <Gaveupcard activity={activity} key={activity.id} handleDelete={props.handleDelete}/>
                            }
                        } else if(filterDone) {
                            if (activity.status==="Done") {
                                return <Donecard activity={activity} key={activity.id} handleDelete={props.handleDelete}/>
                            } 
                        } else if(filterOngoing) {
                            if(activity.status==="Ongoing") {
                                return <Ongoingcard activity={activity} key={activity.id} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
                            }
                        } else if(filterGaveup) {
                            if (activity.status==="Gaveup") {
                                return <Gaveupcard activity={activity} key={activity.id} handleDelete={props.handleDelete}/>
                            }
                        }

                    })
                }

            </div>
        </div> 
    );
}