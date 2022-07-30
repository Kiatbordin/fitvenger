import React,{useState} from "react";
import "./Login.css";

import { useNavigate } from "react-router-dom";

export function Login(props) {

    let navigate = useNavigate();

    const [username,setUsername] = useState("");
    const handleChangeUsername = (e) => { setUsername(e.target.value); }

    const [password,setPassword] = useState("");
    const handleChangePassword = (e) => { setPassword(e.target.value)}

    const checkLogin = (e) => {

        // Checking the username and password from somewhere..
        // Temporary user information
        const tempUsername = 'myusername';
        const tempPassword = 'mypassword';
        // Temporary check username and password [T/F]

        if(username === tempUsername && password === tempPassword) {
            props.handleLogin(true);
            // alert("Login Successful");
            navigate("/"); // redirect to home
        } else {
            alert("The username or password is incorrect");
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
            minLength="8" maxLength="12" required></input>
          </div>
          <div>
            <button>Register</button>
            <button onClick={checkLogin} >Login</button>
          </div>
        </form>
      </div>
    );
}