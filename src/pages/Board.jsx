import React from "react";
import { Activities } from "../components/Activities/Activities.jsx";

export function Board(props) {

    return (
        <div className="Board">
            <Activities doneActivities={100} ongoingActivities={300} gaveupActivities={200}/>
        </div>
    );
}