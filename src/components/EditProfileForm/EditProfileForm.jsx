import React,{useState,useEffect} from "react";
import "./EditProfileForm.css";

import { Link, useNavigate } from "react-router-dom";
import anonymous from "../../assets/icons/anonymous.png"


import { useContext } from "react";
import { DataContext } from "../../App";
import axios from "axios";
import { API_URL } from "../../util/activitiesWork";

export function EditProfileForm(props) {

    const context = useContext(DataContext)
    const { toggleRender, userInfo , setUserInfo } = context
    const navigate = useNavigate()
    
    const [editProfileData,setEditProfileData] = useState({
        name : "",
        height : 1,
        weight: 1,
        gender : "M",
        age : 1,
        goal : "",
        img : "",
    });

    useEffect( () => {
        (async() => {
            const queryString = `${API_URL}/user/${props.userId}`
            try {
                const response = await axios.get(queryString)
                setEditProfileData(response.data)
            } catch (err) {
                console.log("getEditProfile Catch error" + err.message)
            }
        })()
    },[])
    
    const handleChange = (event) => {
        /* If height,weight and age change, convert to number type */
        if(event.target.name == "height" || event.target.name == "weight" || event.target.name == "age") {
            setEditProfileData({...editProfileData,[event.target.name]:Number(event.target.value)})
        } else {
            setEditProfileData({...editProfileData,[event.target.name]:event.target.value})
        }
    }
    const handleSubmit = async(event) =>{
        event.preventDefault();
        try {
            const result = await axios.put(`${API_URL}/user/${props.userId}`,editProfileData)
            setUserInfo({...userInfo,...editProfileData})
            toggleRender()
            navigate('/home')
        } catch (err) {
            console.log(err.message);
        }
    }
    
    return (
        <div className="EditProfileForm">

            <div className="create-profile-frame">

                <div className="register-topic">
                    <h1>Edit your Profile</h1>
                </div>

                <form onSubmit={handleSubmit} className="register-form-container">

                    {/* Image box */}
                    <div className="image-container">
                       {editProfileData.img=="" && <img src={anonymous} alt="anonymous" />}
                       {editProfileData.img!="" && <img src={editProfileData.img} alt="editProfileData" />}
                    </div>

                    {/* Username box */}
                   
                    {/* Personal Information box */}
                    <div className="personal-information-container">

                        <div className="personal-information-topic-box">
                            <h2>Personal Information</h2>
                        </div>

                        {/* Personal Information input box */}
                        <div className="personal-information-input-box">

                            <div className="name-gender-container">

                                <div className="name-container">
                                    <div className="label-box">
                                        <label htmlFor="name">Name:</label>
                                    </div>
                                    <div className="name-box">
                                        <input id="name" value={editProfileData.name} placeholder="name" 
                                        name="name" onChange={handleChange}
                                        maxLength="50" required></input>
                                    </div>
                                </div>

                                <div className="gender-option-box">

                                    <div className="label-box">
                                        <label htmlFor="gender-type">Gender:</label>
                                    </div>
                                    <select id="gender-type" value={editProfileData.gender} name="gender" onChange={handleChange}>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </select>

                                </div>

                            </div>

                            <div className="height-weight-age-container">

                                <div className="height-container">
                                    <div className="label-box">
                                        <label htmlFor="height">Height:</label>
                                    </div>
                                    <div className="height-box">
                                        <input id="height" value={editProfileData.height} type="number" 
                                        name="height" onChange={handleChange}
                                        min="1" required ></input>
                                    </div>
                                </div>

                                <div className="weight-container">
                                    <div className="label-box">
                                        <label htmlFor="weight">Weight:</label>
                                    </div>
                                    <div className="weight-box">
                                        <input id="weight" value={editProfileData.weight} type="number"
                                        name="weight" onChange={handleChange}
                                        min="1" required></input>
                                    </div>
                                </div>

                                <div className="age-container">
                                    <div className="label-box">
                                        <label htmlFor="age">Age:</label>
                                    </div>
                                    <div className="age-box">
                                        <input id="age" value={editProfileData.age} type="number" 
                                        name="age" onChange={handleChange}
                                        min="1" required></input>
                                    </div>
                                </div>

                            </div>

                            <div className="goal-container">
                                <div className="goal-container">
                                        <div className="label-box">
                                            <label htmlFor="goal">Goal:</label>
                                        </div>
                                        <div className="goal-box">
                                            <textarea id="goal" value={editProfileData.goal}
                                            name="goal" onChange={handleChange}
                                            maxLength="240"></textarea>
                                        </div>
                                </div>
                            </div>

                            <div className="button-container">
                                <button  type="submit" className="button-create">
                                    Save
                                </button>
                                
                                <Link to="/home">
                                    <button className="button-cancel">Cancel</button>
                                </Link>

                            </div>

                        </div>

                    </div>

                </form>

            </div>

        </div>
    );
}