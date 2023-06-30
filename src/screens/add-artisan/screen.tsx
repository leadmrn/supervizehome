import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Back from '../../components/back/component';
import Button from '../../components/button';
import TextInput from '../../components/text-input';
import { artisansService } from '../../service/api';
import './styles.scss';
import Error from '../../components/error';

function AddArtisan() {
  const [search, setSearch] = useState('');
  const [error, showError] = useState(false);
  const artisansProject = useSelector((state: any) => state.artisansProject);
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { value } = e.target;
    setSearch(value);
  };

  const onAddArtisan = async () => {
    const alreadyAdd = artisansProject.findIndex(
      (artisan: any) => artisan.email === search
    );
    if (error) showError(false);
    if (alreadyAdd === -1) {
      try {
        await artisansService.getByEmail(search);
        navigate('/dashboard');
      } catch (e) {
        showError(true);
        console.log(e);
      }
    } else {
      showError(true);
      console.log('Artisan déjà ajouté');
    }
  };

  return (
    <div className="AddArtisan page content_center">
      <Back />
      <h1 className="center">
        Renseignez l'email de l’artisan que vous souhaitez ajouter à votre
        projet
      </h1>
      <form className="form">
        <TextInput
          id="search"
          type="text"
          placeholder="email"
          value={search}
          onChange={handleChange}
        />
        <Button
          className="button_submit"
          text="Ajouter"
          type="primary"
          action={onAddArtisan}
        />
      </form>
      {error ? <Error /> : null}
    </div>
  );
}

export default AddArtisan;
