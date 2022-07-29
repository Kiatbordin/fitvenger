import { ProfileCard } from "../ProfileCard/ProfileCard";
import "./CardContainer.css";

export function CardContainer() {
    return (
        <div className="cardContainer">
            <div className="card">
                <ProfileCard name="Supreme Cat"/>
            </div>
            <div className="card">
                <h1>title</h1>
            </div>
            <div className="card">
                <h1>title</h1>
            </div>
        </div>
    )
}