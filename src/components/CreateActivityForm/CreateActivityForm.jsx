import React from "react";
import "./CreateActivityForm.css";

import { Link } from "react-router-dom";

export function CreateActivityForm(props) {

    const handleChallengeClick = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }

    return (
        <div className="CreateActivityForm">
            <div className="activity-frame">

                <div className="activity-topic">
                    {/* WILL USE URL PARAM TO SELECT AGAIN */}
                    <h1>Create your Activity</h1>
                </div>

                <form className="form-container">

                    {/* Name Box */}
                    <div className="name-box">
                        <div className="name-label-box">
                            <label htmlFor="activityName" className="form-topic-size" >Activity name </label>
                        </div>
                        <div className="name-input-box">
                            <input type="text" id="activityName" name="topic" maxLength="80"/>
                        </div>
                    </div>
                    {/* Date and Sport Box */}
                    <div className="datetime-sport-container">
                        {/* Date Box */}
                        <div className="datetime-container">

                            <div className="schedule-label-box">
                                <label htmlFor="schedule" className="form-topic-size">Scheduling</label>
                            </div>
                            <div className="schedule-dateinput-box">
                                {/* Need datetime element that can set the start and end time */}
                                <input type="datetime-local" id="schedule" name="schedule" />
                            </div>
                        </div>
                        {/* Sport Box */}
                        <div className="sport-container">
                            <div className="sport-label-box">
                                <label htmlFor="sport-type" className="form-topic-size">Exercise Type</label>
                            </div>
                            <div className="sport-option-box">
                                <select id="sport-type" name="sport-type">
                                    <option value="run">running</option>
                                    <option value="walk">walking</option>
                                    <option value="swimming">swimming</option>
                                    <option value="ride a bike">bycycling</option>
                                    <option value="hiking">hiking</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* Location Box */}
                    <div className="location-container">
                        <div className="location-label-box">
                            <label htmlFor="" className="form-topic-size">Location</label>
                        </div>
                        <div className="location-input-box">
                            <input type="text" name="location" maxLength="80"/>
                        </div>
                    </div>
                    {/* Description Box */}
                    <div className="description-container">
                        <div className="description-label-box">
                            <label htmlFor="description" name="description" className="form-topic-size">
                                Description
                            </label>
                        </div>
                        <div className="description-input-box">
                            <textarea name="description" id="description" maxLength="150" ></textarea>
                        </div>
                    </div>

                    {/* Challenge Box */}
                    <div className="challenge-container">
                        <label className="form-topic-size">Want to challenge ? </label>
                        <button className="btn-15" value={15} onClick={handleChallengeClick}>+15 mins</button>
                        <button className="btn-30" value={30} onClick={handleChallengeClick}>+30 mins</button>
                    </div>


                    {/* Button Box */}
                    <div className="button-container">
                        <Link to="/">
                            <button type="submit" className="button-create">Create</button>
                        </Link>
                        <Link to="/">
                            <button className="button-cancel">Cancel</button>
                        </Link>
                        {/* <button type="submit" className="button-create">Create</button> */}
                        {/* <button className="button-cancel">Cancel</button> */}

                    </div>

                </form>
            </div>
        </div>
    )
}