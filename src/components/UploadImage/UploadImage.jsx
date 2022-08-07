import React, { useState } from "react";

import './UploadImage.css'

export function UploadImage() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="uploadImage">
            <div className="uploadImageContent">
                <span>+</span>
                <span>Upload your Image</span>
                <input type="file" name="" onChange={handleChange} className="uploadImageProfileButton" />
            </div>
        </div>
    );
}
