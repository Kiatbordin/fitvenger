import React, { useState } from "react";

export function UploadImage() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className="uploadImage">
            <div>
                <input type="file" onChange={handleChange} />
                <span>+</span>
                <span>Upload your Image</span>
            </div>

        </div>
    );
}
