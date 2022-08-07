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
                        <div className='personalInfo'>
                            <h1>Personal Information </h1>
                            <div>
                                <label htmlFor="name">Name: </label>
                                <input type="text" name="name" value={inputs.name} onChange={handleChange} />
                                <label htmlFor="height">Height: </label>
                                <input type="number" name="height" value={inputs.height} onChange={handleChange} />
                                <label htmlFor="weight">Weight: </label>
                                <input type="number" name="weight" value={inputs.weight} onChange={handleChange}/>
                                <label htmlFor="age">Age: </label>
                                <input type="number" name="age" value={inputs.age} onChange={handleChange}/>
                                <label>Gender</label>
                                <select name="gender" value={inputs.gender} onChange={handleChange}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <span>Goal</span>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <input type="submit" value="Save" />
                            <button>Cancel</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
} 