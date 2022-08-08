import React, { useState } from 'react'

import './CreateProfileForm.css'
import { UploadImage } from '../UploadImage/UploadImage'

export function CreateProfileForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
    }

    return (
        <div className="createProfileForm">
            <div className="profileFrame">
                <div className="profileTopic">
                    <h1>Create your profile</h1>
                </div>
                <form onSubmit={handleSubmit} className="profileFormContainer">
                    <div className="profileBox">
                        <div className="profileDisplayImage">
                            <UploadImage />
                        </div>
                        <div className="usernameAndPassword">
                            <label htmlFor="usernameProfile">Username :
                                <input
                                    id="usernameProfile"
                                    type="text"
                                    name="username"
                                    value={inputs.username}
                                    onChange={handleChange}
                                    required />
                            </label>
                            <label htmlFor="passwordProfile">Password :
                                <input
                                    id="passwordProfile"
                                    type="password"
                                    name="password"
                                    value={inputs.password}
                                    onChange={handleChange}
                                    required />
                            </label>
                        </div>
                        <div className='personalInfoBox'>
                            <h1>Personal Information</h1>
                            <div className='personalInfo'>
                                <div className='personalInfoFirstRow'>
                                    <label htmlFor="nameProfile">Name:
                                        <input type="text"
                                            name="name"
                                            id="nameProfile"
                                            value={inputs.name}
                                            onChange={handleChange}
                                            required />
                                    </label>
                                </div>

                                <div className='personalInfoSecondRow'>
                                    <label htmlFor="heighProfilet">Height:
                                        <input type="number"
                                            id="heightProfile"
                                            name="height"
                                            value={inputs.height}
                                            onChange={handleChange}
                                            required />
                                    </label>
                                    <label htmlFor="weightProfile">Weight:
                                        <input type="number"
                                            id="weightProfile"
                                            name="weight"
                                            value={inputs.weight}
                                            onChange={handleChange}
                                            required />
                                    </label>
                                </div>

                                <div className='personalInfoThirdRow'>
                                    <label htmlFor="ageProfile">Age:
                                        <input type="number"
                                            id="ageProfile"
                                            name="age"
                                            value={inputs.age}
                                            onChange={handleChange}
                                            required />
                                    </label>
                                    <label>Gender:
                                        <select id="genderProfile" name="gender" value={inputs.gender} onChange={handleChange} required>
                                            <option value="M" selected>Male</option>
                                            <option value="F">Female</option>
                                        </select>
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="goalProfile">Goal
                                        <textarea id="goalProfile" name="goal" value={inputs.goal} onChange={handleChange} cols="30" rows="10" ></textarea>
                                    </label>
                                </div>
                            </div>

                            <input type="submit" value="Save" />
                            <input type="submit" value="Cancel" />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
} 