import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { store } from '../../redux/store';

function ImageUploader() {
  const [files, setFiles] = useState([]);
  const token = store.getState().token;

  function handleDrop(acceptedFiles: any) {
    setFiles(acceptedFiles);
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    let formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file);
    });

    const upload_files = await axios.post(
      'https://fast-citadel-34836.herokuapp.com/api/upload',
      formData,
      {
        headers: {
          Authorization: `BEARER ${token}`,
        },
      }
    );

    console.log('test', upload_files);
  }

  return (
    <div>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
      {files.map((file: any) => (
        <div key={file.name}>
          <p>{file.name}</p>
        </div>
      ))}
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}

export default ImageUploader;
