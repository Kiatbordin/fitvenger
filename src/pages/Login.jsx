import React,{useState} from "react";
import "./Login.css";

import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { DataContext } from "../App";
import axios from "axios";
import { API_URL } from "../util/activitiesWork";

export function Login(props) {

    const context = useContext(DataContext)
    const {setUserInfo,userInfo} = context

    let navigate = useNavigate();

    const [username,setUsername] = useState("");
    const handleChangeUsername = (e) => { setUsername(e.target.value); }

    const [password,setPassword] = useState("");
    const handleChangePassword = (e) => { setPassword(e.target.value)}

    const checkLogin = async(e) => {
        // // Temporary user information
        // // Temporary check username and password [T/F]
        // const tempUsername = 'myusername';
        // const tempPassword = 'mypassword';
        // if(username === tempUsername && password === tempPassword) {
        //     props.handleLogin(true);
        //     // alert("Login Successful");
        //     navigate("/"); // redirect to home
        // } else {
        //     alert("The username or password is incorrect");
        // }


        e.preventDefault();
        try {
          const loginResult = await axios.post(`${API_URL}/login`,{
            username : username,
            password : password
          })
          if(loginResult.data) {
            setUserInfo(loginResult.data);
            navigate("/home"); // redirect to home
          }
        } catch (err) {
          alert('Please check the username and password.');
          console.log(`checkLogin catch Error:${err.message}`);
        }

    }

    return (
      <div className="Login">
        <h3>Log-in</h3>
        <form className="input-container">
          <div>
            <label htmlFor="username">Username: </label>
            <input id="username" type="text" placeholder="username" onChange={handleChangeUsername}
            minLength="8" maxLength="12" required></input>
          </div>
          <div>
            <label htmlFor="password">Password : </label>
            <input id="password" type="password" placeholder="password" onChange={handleChangePassword}
            minLength="8" maxLength="16" required></input>
          </div>
          <div>
            <button>Register</button>
            <button onClick={checkLogin} >Login</button>
          </div>
        </form>
      </div>
    );
}