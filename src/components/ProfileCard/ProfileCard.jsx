import './ProfileCard.css';

import Sample1 from "./image/Sample1.jpg"

export function ProfileCard({name}) {
    return (
        <div className="profileCard">
            <div className="profile">
                <div className="profileFirstPart">
                    <div>
                        <img src={Sample1} alt="" />
                    </div>
                    <div>
                        <p>{name}</p>
                    </div>
                </div>
                <hr/>
                <div>
                    <p>log out</p>
                </div>
            </div>
            <div>
                <p><span>BMI :</span> 21.6</p>
            </div>
        </div>
    )
}