import React from "react";
import { useState } from 'react'

import { Navbar } from "../components/Navbar/Navbar.jsx";
import { Activities } from "../components/Activities/Activities.jsx";
import { Footer } from "../components/Footer/Footer.jsx";

export function Board(props) {

    const [isLogin,setIsLogin] = useState(true);

    return (
        <div className="Board">
            <Navbar isLogin={isLogin}/>
            <Activities doneActivities={100} ongoingActivities={300} gaveupActivities={200}/>
            <Footer isLogin={isLogin}/>
        </div>
    );
}