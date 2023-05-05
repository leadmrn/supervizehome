import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Back from '../../components/back/component';
import Button from '../../components/button';
import TextInput from '../../components/text-input';
import { reportsService } from '../../service/api';
import ImageUploader from '../../components/upload-files';

function AddReport() {
  const navigate = useNavigate();
  const idUser = useSelector((state: any) => state.userInfo.id);
  const idProject = useSelector((state: any) => state.idSelectedProject);
  const [formAddReport, setFormAddReport] = useState({
    name: '',
    description: '',
    start_date: '',
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

  const onUploadDocs = (data: any) => {
    let filesId: any = [];
    data.forEach((img: any) => filesId.push(img.id));
    setFormAddReport((prevState) => ({
      ...prevState,
      images: filesId,
    }));
  };

  return (
    <div className="AddReport page content_center">
      <Back />
      <h1 className="center">Mon rapport</h1>
      <form className="form">
        <TextInput
          id="name"
          onChange={handleChange}
          value={formAddReport.name}
          type="text"
          placeholder="Titre"
        />
        <TextInput
          id="start_date"
          onChange={handleChange}
          value={formAddReport.start_date}
          type="date"
          placeholder="Début des travaux"
        />
        {/* <TextInput
          id="step"
          onChange={handleChange}
          value={formAddReport.step}
          type="text"
          placeholder="Phase de construction"
        /> */}
        <TextInput
          id="description"
          onChange={handleChange}
          value={formAddReport.description}
          type="textarea"
          placeholder="Décriver les travaux de manière exhaustive"
        />
        <ImageUploader
          onUploadFiles={onUploadFiles}
          text="Sélectionnez ou déposez vos images"
        />
        <Button
          className="button_submit"
          text="Ajouter"
          type="primary"
          action={onAddReport}
        />
      </form>
    </div>
  );
}

export default AddReport;
