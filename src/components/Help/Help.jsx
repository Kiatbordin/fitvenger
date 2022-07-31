import React from "react";
import "./Help.css";

export function Help(props){
    return (
        <div className="Help">
            <div className="workout-box">
                <div className="tips-header">
                    <img src="https://cdn-icons-png.flaticon.com/512/38/38464.png" alt="dumbbell-icon"/>
                    <h3>Tips & Workout</h3>
                </div>
                <div className="tips-body">
                    <div>
                        <a href="https://www.youtube.com/results?search_query=workout" target="_blank">Need my help ?</a>
                        <img src="https://media.istockphoto.com/photos/sport-cat-is-going-to-do-exercise-with-weight-picture-id612403968?k=20&m=612403968&s=612x612&w=0&h=PU7JsNKFDmoDIBYNS1BKwpgCYcQqdxL0Yt_mfX3-ecY=" alt="cat-workout" />
                    </div>
                </div>
            </div>

            <div className="workout-music-box">
                <div className="workout-music-header">
                    <img src="https://cdn-icons-png.flaticon.com/128/461/461146.png" alt="musical-note" />
                    <h3>Workout Music</h3>
                </div>
                <div className="workout-music-body">
                    <div>
                        <a href="https://youtube.com/playlist?list=PLu0ocO48LFms5WsI1ipaeanxqRjn2fC_5" target="_blank">Workout Playlist Here.</a>
                        <img src="https://media.istockphoto.com/photos/sport-cat-is-going-to-do-exercise-with-weight-picture-id612403968?k=20&m=612403968&s=612x612&w=0&h=PU7JsNKFDmoDIBYNS1BKwpgCYcQqdxL0Yt_mfX3-ecY=" alt="cat-workout" />
                    </div>
                </div>
            </div>
        </div>
    );
}