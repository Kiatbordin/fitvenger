import React from "react";
import "./Newcard.css";

import { Link } from "react-router-dom";

import plus from "../../assets/icons/plus.png";

export function Newcard(props) {
    return (
        <div className="Newcard">
            <span>Just do it.</span>
            <Link to="/create">
                <img src={plus} alt="plus-button" />
            </Link>
        </div>
    );
}