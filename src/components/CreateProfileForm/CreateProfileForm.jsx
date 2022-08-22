import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import "./CreateProfileForm.css";

import axios from "axios";
import { API_URL } from "../../util/activitiesWork";

export function CreateProfileForm(props) {

    const navigate = useNavigate()

    const [registerData,setRegisterData] = useState({
        username: "",
        password: "",
        name : "",
        height : 1,
        weight: 1,
        gender : "M",
        age : 1,
        goal : "",
        img : "",
    });

    const [previewImage,setPreviewImage] = useState("");

    const viewImage = (e) => {
        const file = e.target.files[0];
        
        if(file) {
            /* Make sure `file.name` matches our extensions criteria */
            if(/\.(jpe?g|png|gif)$/i.test(file.name)) {

                /* createObjectURL creates a string containing a URL representing the file */
                const previewURL = URL.createObjectURL(file);
                setPreviewImage(previewURL);

                /* readAsDataURL represent the file's data as a base64 encoded string. */
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function() {
                    /* Keep Base64 encoded url in state as string */
                    // setRegisterData(prev => prev.img = reader.result);
                    setRegisterData({...registerData,img: reader.result})
                };
                reader.onerror = function() {
                    console.log('There are some problems.');
                };

            } else {
                alert("Please upload image file.");
                /* Clear input file */
                e.target.value = "";
            }
        }

    };

    const handleChange = (event) => {
        /* If height,weight and age change, convert to number type */
        if(event.target.name == "height" || event.target.name == "weight" || event.target.name == "age") {
            setRegisterData({...registerData,[event.target.name]:Number(event.target.value)})
        } else {
            setRegisterData({...registerData,[event.target.name]:event.target.value})
        }
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();
        try {
            const result = await axios.post(`${API_URL}/user`,registerData)
            if(result.data.includes("Users validation failed: username: Error, expected `username` to be unique.")) {
                alert("The username is already being used.");
            } else {
                alert("Your account has been created.");
                navigate('/')
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    const handleSubmit2 = async(event) =>{
        event.preventDefault();
        try {
            const result = await axios.post(`${API_URL}/user`,registerData)
            alert("Your account has been created.");
            navigate('/')

        } catch (err) {
            if(err.response.data.includes("Users validation failed: username: Error, expected `username` to be unique.")) {
                alert("The username is already being used.");
            } else {
                console.log(err.message);
            }
        }
    }

    return (
        <div className="CreateProfileForm">

            <div className="create-profile-frame">

                <div className="register-topic">
                    <h1>Create your Profile</h1>
                </div>

                <form onSubmit={handleSubmit2} className="register-form-container">

                    {/* Image box */}
                    <div className="image-container">

                        { previewImage!="" && <img src={previewImage} alt="preview-image"/> }

                        { previewImage=="" && <h2>Upload your image</h2> }
                        { previewImage=="" && <input type="file" onChange={viewImage}/> }
    
                    </div>

                    {/* Username box */}
                    <div className="username-container">
                        <div className="label-box">
                            <label htmlFor="username">Username:</label>
                        </div>
                        <div className="username-box">
                            <input id="username" placeholder="username"
                            name="username" onChange={handleChange}
                            minLength="8" maxLength="12" required></input>
                        </div>
                    </div>
                    {/* Password box */}
                    <div className="password-container">
                        <div className="label-box">
                            <label htmlFor="password">Password:</label>
                        </div>
                        <div className="password-box">
                            <input id="password" placeholder="password" type="password"
                            name="password" onChange={handleChange}
                            minLength="8" maxLength="12" required></input>
                        </div>
                    </div>
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
                                        <input id="name" placeholder="name" 
                                        name="name" onChange={handleChange}
                                        maxLength="50" required></input>
                                    </div>
                                </div>

                                <div className="gender-option-box">

                                    <div className="label-box">
                                        <label htmlFor="gender-type">Gender:</label>
                                    </div>
                                    <select id="gender-type" name="gender" onChange={handleChange}>
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
                                        <input id="height" type="number" 
                                        name="height" onChange={handleChange}
                                        min="1" required ></input>
                                    </div>
                                </div>

                                <div className="weight-container">
                                    <div className="label-box">
                                        <label htmlFor="weight">Weight:</label>
                                    </div>
                                    <div className="weight-box">
                                        <input id="weight" type="number"
                                        name="weight" onChange={handleChange}
                                        min="1" required></input>
                                    </div>
                                </div>

                                <div className="age-container">
                                    <div className="label-box">
                                        <label htmlFor="age">Age:</label>
                                    </div>
                                    <div className="age-box">
                                        <input id="age" type="number" 
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
                                            <textarea id="goal" 
                                            name="goal" onChange={handleChange}
                                            maxLength="240"></textarea>
                                        </div>
                                </div>
                            </div>

                            <div className="button-container">
                                <button  type="submit" className="button-create">
                                    Create
                                </button>
                                
                                <Link to="/">
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