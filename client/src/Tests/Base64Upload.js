import React from 'react'
import FileBase64 from 'react-file-base64';
import { useState } from 'react';

const Base64Upload = () => {

    const [files, setFiles] = useState([])
    const getFiles = e => {
        setFiles(e.target.f)
    }

  return (
    <div>Base64Upload</div>
  )
}

export default Base64Upload