import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Back from '../../components/back/component';
import Button from '../../components/button';
import TextInput from '../../components/text-input';
import { reportsService } from '../../service/api';
import ImageUploader from '../../components/upload-files';

import './styles.scss';

function AddReport() {
  const navigate = useNavigate();
  const idUser = useSelector((state: any) => state.userInfo.id);
  const idProject = useSelector((state: any) => state.idSelectedProject);
  const [formAddReport, setFormAddReport] = useState({
    name: '',
    description: '',
    start_date: '',
    step: '',
    images: [],
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormAddReport((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onAddReport = async () => {
    const dataReport = {
      ...formAddReport,
      user: {
        id: idUser,
      },
      project: {
        id: idProject,
      },
    };
    try {
      await reportsService.create(dataReport);
      navigate('/dashboard');
    } catch (e) {
      console.log(e);
    }
  };

  const onUploadFiles = (data: any) => {
    let filesId: any = [];
    data.forEach((img: any) => filesId.push(img.id));
    setFormAddReport((prevState) => ({
      ...prevState,
      images: filesId,
    }));
  };

  // const onUploadDocs = (data: any) => {
  //   let filesId: any = [];
  //   data.forEach((img: any) => filesId.push(img.id));
  //   setFormAddReport((prevState) => ({
  //     ...prevState,
  //     images: filesId,
  //   }));
  // };

  return (
    <div className="AddReport page content_center">
      <Back />
      <h1 className="center">Mon rapport</h1>
      <form className="form">
        <div className="div_input">
          <label htmlFor="start_date">Donnez un titre à votre rapport</label>
          <TextInput
            id="name"
            onChange={handleChange}
            value={formAddReport.name}
            type="text"
            placeholder="Titre"
          />
        </div>
        <div className="div_input">
          <label htmlFor="start_date">Date des travaux</label>
          <TextInput
            id="start_date"
            onChange={handleChange}
            value={formAddReport.start_date}
            type="date"
            placeholder="Date des travaux"
          />
        </div>
        <div className="div_input">
          <label htmlFor="start_date">Phase de construction</label>
          <select name="step" id="step" required onChange={handleChange}>
            <option value="Travaux de finition intérieure">
              Travaux de finition intérieure
            </option>
            <option value="Gros œuvre">Gros œuvre</option>
            <option value="Second œuvre">Second œuvre</option>
            <option value="Finition">Finition</option>
            <option value="Conception extérieure">Conception extérieure</option>
            <option value="Réception des clés">Réception des clés</option>
          </select>
        </div>
        <div className="div_input">
          <label htmlFor="start_date">Description</label>
          <TextInput
            id="description"
            onChange={handleChange}
            value={formAddReport.description}
            type="textarea"
            placeholder="Décrivez les travaux de manière exhaustive"
          />
        </div>
        <ImageUploader
          onUploadFiles={onUploadFiles}
          text="Sélectionnez ou déposez vos images"
        />
        <Button
          className="button_submit"
          text="Ajouter"
          type="secondary"
          action={onAddReport}
        />
      </form>
    </div>
  );
}

export default AddReport;
