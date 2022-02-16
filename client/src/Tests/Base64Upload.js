import React from 'react'
import FileBase64 from 'react-file-base64';
import { useState } from 'react';

const Base64Upload = () => {

    const [files, setFiles] = useState([])
    const [image, setImage] = useState("")

    const getFiles = (files) => {
        console.log(files[0].base64)
        setFiles({files: files})
        files[0].base64 && setImage(files[0].base64)
    }

    return (
        <div>
            <FileBase64 multiple={true} onDone={ getFiles} />
            { image && <img src={image} /> }
        </div>
    )
}

export default Base64Upload