import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { EditProfileForm } from "../components/EditProfileForm/EditProfileForm.jsx";

export function EditProfile(props) {

    const { userId } = useParams();

    return (
        <div className="EditProfile">
            <EditProfileForm 
            userId={userId}
            />
        </div>
    );
}