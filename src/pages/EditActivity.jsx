import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { EditActivityForm } from "../components/EditActivityForm/EditActivityForm.jsx";

export function EditActivity(props) {

    const { userId,activityId } = useParams();

    return (
        <div className="EditActivity">
            <EditActivityForm 
            userId={userId}
            activityId={activityId}
            />
        </div>
    );
}