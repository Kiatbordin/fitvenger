import React from "react";
import "./Help.css";

import dumbbell from "../../assets/icons/dumbbell.png"
import catworkout from "../../assets/icons/catworkout.jpeg"
import music from "../../assets/icons/music.png"

export function Help(props){
    return (
        <div className="Help">
            <div className="workout-box">
                <div className="tips-header">
                    <img src={dumbbell} alt="dumbbell-icon"/>
                    <h3>Tips & Workout</h3>
                </div>
                <div className="tips-body">
                    <div>
                        <a href="https://www.youtube.com/results?search_query=workout" target="_blank">Need my help ?</a>
                        <img src={catworkout} alt="cat-workout" />
                    </div>
                </div>
            </div>

            <div className="workout-music-box">
                <div className="workout-music-header">
                    <img src={music} alt="musical-note" />
                    <h3>Workout Music</h3>
                </div>
                <div className="workout-music-body">
                    <div>
                        <a href="https://youtube.com/playlist?list=PLu0ocO48LFms5WsI1ipaeanxqRjn2fC_5" target="_blank">Workout Playlist Here.</a>
                        <img src={catworkout} alt="cat-workout" />
                    </div>
                </div>
            </div>
        </div>
    );
}