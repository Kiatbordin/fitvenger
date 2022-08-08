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
                            <label>Username :
                                <input
                                    type="text"
                                    name="username"
                                    value={inputs.username}
                                    onChange={handleChange} />
                            </label>
                            <label>Password :
                                <input
                                    type="password"
                                    name="password"
                                    value={inputs.password}
                                    onChange={handleChange} />
                            </label>
                        </div>
                        <div className='personalInfoBox'>
                            <h1>Personal Information</h1>
                            <div className='personalInfo'>
                                <div>
                                    <label htmlFor="name">Name:
                                        <input type="text" name="name" value={inputs.name} onChange={handleChange} />
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="height">Height:
                                        <input type="number" name="height" value={inputs.height} onChange={handleChange} />
                                    </label>
                                    <label htmlFor="weight">Weight:
                                        <input type="number" name="weight" value={inputs.weight} onChange={handleChange} />
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="age">Age:
                                        <input type="number" name="age" value={inputs.age} onChange={handleChange} />
                                    </label>
                                    <label>Gender:
                                        <select name="gender" value={inputs.gender} onChange={handleChange}>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="goal">Goal
                                        <textarea name="goal" value={inputs.goal} onChange={handleChange} cols="30" rows="10"></textarea>
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