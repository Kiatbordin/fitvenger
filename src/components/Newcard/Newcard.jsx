import React from "react";
import "./Newcard.css";

import plus from "./icons/plus.png"

export function Newcard(props) {
    return (
        <div className="Newcard">
            <span>Just do it.</span>
            <img src={plus} alt="plus-button" />
        </div>
    );
}