import './CreateProfileForm.css'
import { UploadImage } from '../UploadImage/UploadImage'

export function CreateProFile() {
    return (
        <div className="createProfileForm">
            <div className="profileFrame">
                <div className="profileTopic">
                    <h1>Create your profile</h1>
                </div>
                <form action="" className="profileFormContainer">
                    <div className="profileBox">
                        <div className="profileDisplayImage">
                            <UploadImage />
                        </div>
                        <div className="usernameAndPassword">
                            <span>Username:</span>
                            <input type="text" name="" id="" />
                            <span>Password:</span>
                            <input type="password" name="" id="" />
                        </div>
                        <div className='personalInfo'>
                            <label for="">Personal Information</label>
                            <div>
                                <span>Name:</span>
                                <input type="text" name="" id="" />
                                <span>Height:</span>
                                <input type="number" name="" id="" />
                                <label>weight</label>
                                <input type="number" name="" id="" />
                                <label>Age: </label>
                                <input type="number" name="" id="" />
                                <label>Gender</label>
                                <input type="" /> 
                                <input type="number" name="" id="" />
                                <span>Goal</span>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                                <button type="submit">Save</button>
                                <button>Cancel</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
} 