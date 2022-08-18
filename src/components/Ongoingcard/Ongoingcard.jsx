import React from "react";
import "./Ongoingcard.css"

import running from "../../assets/icons/running.png"
import walking from "../../assets/icons/walking.png"
import swimming from "../../assets/icons/swimming.png"
import hiking from "../../assets/icons/hiking.png"
import bicycling from "../../assets/icons/bicycling.png"
import deleteButton from "../../assets/icons/deleteButton.png"
import nextButton from "../../assets/icons/nextButton.png"
import axios from 'axios'
import { useContext } from "react"
import {DataContext} from '../../App'

import { Link } from "react-router-dom";

import { DoneButton } from "../DoneButton/DoneButton.jsx";

import { API_URL } from "../../util/activitiesWork";

export function Ongoingcard(props) {

    const context = useContext(DataContext)
    const activityItem = props.activity;

    const handleDelete = async (e) => {
        let isDelete = confirm("Do you want to delete this activity ?");
        if(isDelete) {
            await axios.delete(`${API_URL}/user/${context.userInfo._id}/activities/${props.activity.id}`)
            context.toggleRender()
            // props.handleDelete(activityItem);

            // Then updating the database.
        } 
    }

    const confirmDone = async(score) => {
            if (typeof score ==='number' && score > 0 && score < 6) {
                alert("Thanks for rating.");
                // Remark requiring destructuring object to prevent status change before send to update function.
                const doneItem = {...activityItem};
                doneItem.status = "Done";
                doneItem.score = score;
                // props.handleUpdate(doneItem);  
                try {
                    // Do backend work and re-render the main page.
                    const edit = await axios.put(`${API_URL}/user/${context.userInfo._id}/activities/${props.activity.id}`,{...doneItem})
                    // (edit.status >= 200 && edit.status < 300) ? props.handleUpdate(doneItem) : alert("Failed to change activity status.")
                    context.toggleRender()
                } catch (err) {
                    alert("confirmDone catch error: "+ err.message)
                }
            } else {
                alert("Please rate between 1 to 5.")
            }
    }

    const confirmGaveup = async(e) => {
        let isGaveup = confirm("Do you want to give up ?");
        console.log(isGaveup);
        if(isGaveup) {
            // Remark requiring destructuring object to prevent status change before send to update function.
            const gaveupItem = {...activityItem};
            gaveupItem.status = "Gaveup";
            try {
                // Do backend work and refresh the main page.
                const edit = await axios.put(`${API_URL}/user/${context.userInfo._id}/activities/${props.activity.id}`,{...gaveupItem})
                context.toggleRender()
            } catch (err) {
                alert("confirmDone catch error: "+ err.message)
            }
        };
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
                    <span>From: {activityItem.start}</span>
                    <span>To: {activityItem.end}</span>
                    <span>Location: {activityItem.location}</span>
                    <span>Status: {activityItem.status}</span>
                    <span>Description: {activityItem.description}</span>
                </div>
            </div>
            <div className="ongoing-card-menu">
                {/* <button className="done-button" onClick={confirmDone}>Done</button> */}
                <DoneButton confirmDone={confirmDone}/>
                <button className="gaveup-button" onClick={confirmGaveup}>Gave up</button>
            </div>
            <img className="delete-button" src={deleteButton} alt="delete-icon" onClick={handleDelete}/>
            {/* <img className="next-button" src={nextButton} alt="delete-icon" /> */}

            <Link to={`/edit/${context.userInfo._id}/activities/${activityItem._id}`}>
                <img className="next-button" src={nextButton} alt="next-icon" />
            </Link>

        </div>
    );
}