import React from "react";
import "./EditActivityForm.css";

import { Link } from "react-router-dom";

import { DateRangePicker } from "rsuite";

export function EditActivityForm(props) {

    const handleChallengeClick = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }

    return (
        <div className="EditActivityForm">
            <div className="activity-frame">

                <div className="activity-topic">
                    {/* WILL USE URL PARAM TO SELECT AGAIN */}
                    <h1>Edit your Activity</h1>
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
                                <DateRangePicker 
                                id="schedule" name="schedule"
                                placeholder="Select Date Range" 
                                format="yyyy-MM-dd HH:mm:ss" 
                                />
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

                    {/* Button Box */}
                    <div className="button-container">
                        <Link to="/">
                            <button type="submit" className="button-edit">Save</button>
                        </Link>
                        <Link to="/">
                            <button className="button-cancel">Cancel</button>
                        </Link>

                    </div>

                </form>
            </div>
        </div>
    )
}