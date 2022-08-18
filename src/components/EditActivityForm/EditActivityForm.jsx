import React,{useState,useEffect} from "react";
import "./EditActivityForm.css";

import { Link, useNavigate } from "react-router-dom";

import { DateRangePicker } from "rsuite";

import { useContext } from "react";
import { DataContext } from "../../App";
import axios from "axios";
import { API_URL } from "../../util/activitiesWork";

export function EditActivityForm(props) {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({ });
    useEffect( ()=>{
        /* Get activity from userId and activityId from Backend and set State */
        (async() => {
            const queryString = `${API_URL}/user/${props.userId}/activities/${props.activityId}`;
            console.log(queryString);
            try {
                const response = await axios.get(queryString);
                /* convert start and end date from string to date type and setForm */
                response.data.start = new Date(response.data.start)
                response.data.end = new Date(response.data.end)
                setFormData(response.data);
            } catch (err) {
                console.log("getEditActivities Catch error" + err.message);
            }
        })();

    },[]);

    const context = useContext(DataContext)
    const {toggleRender,userInfo} = context

    const handleChange = (event) => {
        setFormData({...formData,[event.target.name]:event.target.value})
        // console.log(formData);
    }

    const handleDateRangePickerOnChange = (e) => {
        const startTime = e[0];
        const endTime = e[1];
        setFormData({...formData,start:startTime,end:endTime})
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();
        console.log("submit form");
        console.log(formData);

        try {
            const edit = await axios.put(`${API_URL}/user/${props.userId}/activities/${props.activityId}`,{...formData})
            toggleRender()
            navigate('/home')
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="EditActivityForm">
            <div className="activity-frame">

                <div className="activity-topic">
                    {/* WILL USE URL PARAM TO SELECT AGAIN */}
                    <h1>Edit your Activity</h1>
                </div>

                <form onSubmit={handleSubmit} className="form-container">

                    {/* Name Box */}
                    <div className="name-box">
                        <div className="name-label-box">
                            <label htmlFor="activityName" className="form-topic-size" >Activity name </label>
                        </div>
                        <div className="name-input-box">
                            <input type="text" id="activityName" name="topic" maxLength="80"
                            defaultValue={formData.topic} onChange={handleChange}
                            />
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
                                cleanable={false}
                                ranges={[]}
                                value={[formData.start,formData.end]}
                                onOk={handleDateRangePickerOnChange}
                                />
                            </div>
                        </div>
                        {/* Sport Box */}
                        <div className="sport-container">
                            <div className="sport-label-box">
                                <label htmlFor="sport-type" className="form-topic-size">Exercise Type</label>
                            </div>
                            <div className="sport-option-box">
                                <select id="sport-type" name="type" 
                                value={formData.type} onChange={handleChange}
                                >
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
                            <input type="text" name="location" maxLength="80"
                            defaultValue={formData.location} onChange={handleChange}
                            />
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
                            <textarea name="description" id="description" maxLength="150" 
                            value={formData.description} onChange={handleChange}
                            ></textarea>
                        </div>
                    </div>

                    {/* Button Box */}
                    <div className="button-container">
                        {/* <Link to="/"> */}
                            <button type="submit" className="button-edit">Save</button>
                        {/* </Link> */}
                        <Link to="/">
                            <button className="button-cancel">Cancel</button>
                        </Link>

                    </div>

                </form>
            </div>
        </div>
    )
}