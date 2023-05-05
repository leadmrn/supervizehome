import axios from 'axios';
import { useState } from 'react';
import Dropzone from 'react-dropzone';
import { store } from '../../redux/store';
import './styles.scss';
import Button from '../button';
import iconUploadFile from '../../assets/icons/download.png';

function ImageUploader(props: {
  onUploadFiles: (data: any) => void;
  text: string;
}) {
  const [files, setFiles] = useState([]);
  const [isUpload, setIsUpload] = useState<boolean>(false);
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

    await axios
      .post('https://fast-citadel-34836.herokuapp.com/api/upload', formData, {
        headers: {
          Authorization: `BEARER ${token}`,
        },
      })
      .then(async (resp) => {
        if (resp.data) {
          props.onUploadFiles(resp.data);
          setIsUpload(true);
        }
      })
      .catch(() => {
        throw new Error('Une erreur est survenue');
      });
  }

  return (
    <div className="ImageUploader">
      <div className="selector">
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <img className="iconUploadFile" src={iconUploadFile} alt="icon" />
              <p>{props.text}</p>
            </div>
          )}
        </Dropzone>
      </div>
      <div className="list">
        {files.map((file: any) => (
          <div key={file.name}>
            <p>{file.name}</p>
          </div>
        ))}
      </div>
      {!isUpload && files.length > 0 ? (
        <div className="buttons">
          <Button
            className="button_submit"
            text="Supprimer"
            type="destructive"
            action={() => setFiles([])}
          />
          <Button
            className="button_submit"
            text="Télécharger"
            type="secondary"
            action={handleSubmit}
          />
        </div>
      ) : null}
    </div>
  );
}

export default ImageUploader;
