import React, { useState,useId, } from "react";
import "./CreateActivityForm.css";

import { Link, useNavigate } from "react-router-dom";

import { DateRangePicker } from "rsuite";
import { useContext } from "react";
import {DataContext} from '../../App'
import axios from "axios";
import { API_URL,axiosInstance } from "../../util/activitiesWork";

export function CreateActivityForm(props) {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        topic:'',
        type:'running',
        start:'',
        end:'',
        location:'',
        description: '',
        status:'Ongoing',
        score: 0,
    })

    /* Challenge state */
    const [challengeMinutes,setChallengeMinutes] = useState(0);

    const context = useContext(DataContext)
    const {toggleRender,userInfo} = context

    const handleSubmit = async(event) =>{
        event.preventDefault();
        document.body.style.cursor = 'wait';
        /* move add challenge minutes here */
        const endDate = new Date(formData.end);
        const endDateAddTime = new Date(endDate.getTime() + (Number(challengeMinutes) * 60000));
        const timeChallenge = endDateAddTime.toISOString();

        await setFormData( prev => prev.end = timeChallenge );
        /* */

        try {
            // await axios.post(`${API_URL}/user/${userInfo._id}/activities`,formData)
            await axiosInstance.post(`/user/${userInfo._id}/activities`,formData)
            toggleRender()
            navigate('/home')
        } catch (error) {
            console.log(error.message)
        }
        document.body.style.cursor = 'default';
    }

    const handleChange = (event) => {
        setFormData({...formData,[event.target.name]:event.target.value})
    }
    // challenge
    const handleChallengeClick = async(e) => {
        e.preventDefault();
        await setChallengeMinutes(e.target.value);
    }
    // End challenge

    const handleDateRangePickerOnChange = (e) => {
        const startTime = e[0].toISOString();
        const endTime = e[1].toISOString();
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
                                format="yyyy-MM-dd HH:mm:ss" 
                                preventOverflow={true}
                                // showMeridian
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
                                    <option value="running">running</option>
                                    <option value="walking">walking</option>
                                    <option value="swimming">swimming</option>
                                    <option value="bicycling">bicycling</option>
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
                        
                        <Link to="/home">
                            <button className="button-cancel">Cancel</button>
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    )
}