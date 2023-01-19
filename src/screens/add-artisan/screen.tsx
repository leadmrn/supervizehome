import { useState } from 'react';
import Button from '../../components/button';
import TextInput from '../../components/text-input';
import './styles.scss';

function AddArtisan() {
  const [search, setSearch] = useState('');

  const handleChange = (e: any) => {
    const { value } = e.target;
    setSearch(value);
  };

  const onAddArtisan = () => {
    console.log(search);
  };

  return (
    <div className="AddArtisan page">
      <h1 className="center">
        Renseignez l'email de l’artisan que vous souhaitez ajouter à votre
        projet
      </h1>
      <form className="form">
        <TextInput
          id="search"
          type="text"
          placeholder="Rechercher"
          value={search}
          onChange={handleChange}
        />
        <Button text="Ajouter" type="primary" action={onAddArtisan} />
      </form>
    </div>
  );
}

export default AddArtisan;
