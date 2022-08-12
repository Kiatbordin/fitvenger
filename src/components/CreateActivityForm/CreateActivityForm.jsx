import React, { useState,useId, } from "react";
import "./CreateActivityForm.css";

import { Link, useNavigate } from "react-router-dom";

import { DateRangePicker } from "rsuite";
import { useContext } from "react";
import {DataContext} from '../../App'

export function CreateActivityForm(props) {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        id: useId(),        //  Unique ID should be update by the value return from mongoDB after done POST request.
        topic:'',
        type:'running',
        start:'',
        end:'',
        location:'',
        description: ''
    })

    /* Challenge state */
    const [challengeMinutes,setChallengeMinutes] = useState(0);

    const context = useContext(DataContext)
    const {createActivities} = context

    const handleSubmit = async(event) =>{
        event.preventDefault();

        /* move add challenge minutes here */
        const endDate = new Date(formData.end);
        const endDateAddTime = new Date(endDate.getTime() + (Number(challengeMinutes) * 60000));
        const timeChallenge = endDateAddTime.toLocaleString();
        await setFormData( prev => prev.end = timeChallenge );
        console.log("setFormData:");
        console.log(formData);
        /* */

        createActivities(formData)
        navigate('/')
    }

    const handleChange = (event) => {
        setFormData({...formData,[event.target.name]:event.target.value})
    }
    // challenge
    const handleChallengeClick = async(e) => {
        e.preventDefault();

        console.log("value:" + e.target.value);
        await setChallengeMinutes(e.target.value);
        console.log("challengeMinutes:" + challengeMinutes);
    }
    // End challenge

    const handleDateRangePickerOnChange = (e) => {
        // console.log(e);
        const startTime = e[0].toLocaleString();
        const endTime = e[1].toLocaleString();
        setFormData({...formData,start:startTime,end:endTime})
    }
// console.log(formData)
    return (
        <div className="CreateActivityForm">
            <div className="activity-frame">

                <div className="activity-topic">
                    {/* WILL USE URL PARAM TO SELECT AGAIN */}
                    <h1>Create your Activity</h1>
                </div>

                <form onSubmit={handleSubmit} className="form-container">

                    {/* Name Box */}
                    <div className="name-box">
                        <div className="name-label-box">
                            <label htmlFor="activityName" className="form-topic-size" >Activity name </label>
                        </div>
                        <div className="name-input-box">
                            <input onChange={handleChange} type="text" id="activityName" name="topic" maxLength="80" required/>
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
                                <DateRangePicker 
                                id="schedule" name="schedule"
                                placeholder="Select Date Range" 
                                format="yyyy-MM-dd hh:mm aa" 
                                preventOverflow={true}
                                showMeridian
                                ranges={[]}
                                disabledDate={DateRangePicker.beforeToday()}
                                onOk={handleDateRangePickerOnChange} /> 
                            </div>
                        </div>
                        {/* Sport Box */}
                        <div className="sport-container">
                            <div className="sport-label-box">
                                <label htmlFor="sport-type" className="form-topic-size">Exercise Type</label>
                            </div>
                            <div className="sport-option-box">
                                <select onChange={handleChange}  id="sport-type" name="type">
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
                            <input onChange={handleChange}  type="text" name="location" maxLength="80"/>
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
                            <textarea onChange={handleChange}  name="description" id="description" maxLength="150" ></textarea>
                        </div>
                    </div>

                    {/* Challenge Box */}
                    <div className="challenge-container">
                        <label className="form-topic-size">Want to challenge ? </label>
                        <button className="btn-15" value={15} onClick={handleChallengeClick} disabled={formData.start === ''?true:false}>+15 mins</button>
                        <button className="btn-30" value={30} onClick={handleChallengeClick} disabled={formData.start === ''?true:false}>+30 mins</button>
                    </div>


                    {/* Button Box */}
                    <div className="button-container">
                       
                            <button  type="submit" className="button-create" 
                            disabled={(formData.start === '')?true:false}>Create</button>
                        
                        <Link to="/">
                            <button className="button-cancel">Cancel</button>
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    )
}