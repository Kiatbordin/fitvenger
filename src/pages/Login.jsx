import React,{useState} from "react";
import "./Login.css";

import { Link,useNavigate } from "react-router-dom";

import { useContext } from "react";
import { DataContext } from "../App";
import axios from "axios";
import { API_URL } from "../util/activitiesWork";

export function Login(props) {

    const context = useContext(DataContext)
    const {setUserInfo,userInfo,setIsLogin} = context

    let navigate = useNavigate();

    const [username,setUsername] = useState("");
    const handleChangeUsername = (e) => { setUsername(e.target.value); }

    const [password,setPassword] = useState("");
    const handleChangePassword = (e) => { setPassword(e.target.value)}

    const checkLogin = async(e) => {
        e.preventDefault();
        document.body.style.cursor = 'wait';
        try {
          const loginResult = await axios.post(`${API_URL}/login`,{
            username : username,
            password : password
          })
          if(loginResult.data) {
            setIsLogin(true);
            setUserInfo(loginResult.data);
            navigate("/home"); // redirect to home
          }
        } catch (err) {
          alert('Please check the username and password.');
          console.log(`checkLogin catch Error:${err.message}`);
        }
        document.body.style.cursor = 'default';
    }

    return (
      <div className="Login">
        <h3>Log-in</h3>
        <form className="input-container" onSubmit={checkLogin}>
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
            <Link to="/register">
              <button type="button">Register</button>
            </Link>

            <button type="submit" >Login</button>
          </div>
        </form>
      </div>
    );
}