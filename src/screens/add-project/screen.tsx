import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Back from '../../components/back/component';
import Button from '../../components/button';
import TextInput from '../../components/text-input';
import { projectService } from '../../service/api';

import './styles.scss';
import Error from '../../components/error';

function AddProject({ isFirst = false }: { isFirst?: boolean }) {
  const [error, showError] = useState(false);
  const [formAddProject, setFormAddProject] = useState({
    name: '',
    location: '',
    landArea: 0,
    houseArea: 0,
    start_date: '',
    user_client: useSelector((state: any) => state.userInfo.id),
  });
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    let { id, value } = e.target;
    if (id === 'landArea' || id === 'houseArea') {
      value = parseInt(value);
    }
    setFormAddProject((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onAddProject = async () => {
    try {
      if (error) showError(false);
      await projectService.create(formAddProject);
      navigate('/projects');
    } catch (e) {
      showError(true);
      console.log(e);
    }
  };

  return (
    <div className="AddProject page content_center">
      {!isFirst ? <Back /> : null}
      <h1 className="center">
        {isFirst ? 'Créer votre premier projet' : 'Votre projet'}
      </h1>
      <form className="form">
        <TextInput
          id="name"
          onChange={handleChange}
          value={formAddProject.name}
          type="text"
          placeholder="Nom"
        />
        <TextInput
          id="location"
          onChange={handleChange}
          value={formAddProject.location}
          type="text"
          placeholder="Ville"
        />
        <TextInput
          id="landArea"
          onChange={handleChange}
          value={
            formAddProject.landArea === 0
              ? ''
              : formAddProject.landArea.toString()
          }
          type="number"
          placeholder="Superficie du terrain"
        />
        <TextInput
          id="houseArea"
          onChange={handleChange}
          value={
            formAddProject.houseArea === 0
              ? ''
              : formAddProject.houseArea.toString()
          }
          type="number"
          placeholder="Superficie de la maison"
        />
        <TextInput
          id="start_date"
          onChange={handleChange}
          value={formAddProject.start_date}
          type="date"
          placeholder="Date de début du projet"
        />
        <Button
          className="button_submit"
          text="Ajouter"
          type="primary"
          action={onAddProject}
        />
      </form>
      {error ? <Error /> : null}
    </div>
  );
}

export default AddProject;
