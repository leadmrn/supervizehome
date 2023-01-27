import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Back from '../../components/back/component';
import Button from '../../components/button';
import TextInput from '../../components/text-input';
import { artisansService } from '../../service/api';
import './styles.scss';

function AddArtisan() {
  const [search, setSearch] = useState('');
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
    if (alreadyAdd === -1) {
      try {
        await artisansService.getByEmail(search);
        navigate('/dashboard');
      } catch (e) {
        console.log(e);
      }
    } else {
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
    </div>
  );
}

export default AddArtisan;
