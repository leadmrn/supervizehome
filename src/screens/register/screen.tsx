import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button';
import TextInput from '../../components/text-input';

import './styles.scss';

function Register() {
  const [isArtisan, setIsArtisan] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [formRegister, setFormRegister] = useState({
    firstname: '',
    lastname: '',
    tel: '',
    job: '',
    email: '',
    password: '',
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormRegister((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onClickArtisan = () => {
    if (isClient) setIsClient(false);
    setIsArtisan(true);
  };

  const onClickClient = () => {
    if (isArtisan) setIsArtisan(false);
    setIsClient(true);
  };

  const onRegister = () => {
    console.log('prout');
  };

  return (
    <div className="Register page">
      <h1 className="center">Inscription</h1>
      <form className="form">
        <p>Je suis un :</p>
        <div className="checkboxs">
          <div onClick={onClickClient} className={isClient ? 'isCheck' : ''}>
            <p>Constructeur / Client</p>
          </div>
          <div onClick={onClickArtisan} className={isArtisan ? 'isCheck' : ''}>
            <p>Artisan</p>
          </div>
        </div>
        <div className="form_div2col">
          <TextInput
            id="firstname"
            type="text"
            placeholder="Prénom"
            value={formRegister.firstname}
            onChange={handleChange}
          />
          <TextInput
            id="lastname"
            type="text"
            placeholder="Nom"
            value={formRegister.lastname}
            onChange={handleChange}
          />
        </div>
        <TextInput
          id="tel"
          type="tel"
          placeholder="N° de Téléphone"
          value={formRegister.tel}
          onChange={handleChange}
        />
        {isArtisan ? (
          <TextInput
            id="job"
            type="text"
            placeholder="Profession"
            value={formRegister.job}
            onChange={handleChange}
          />
        ) : null}
        <TextInput
          id="email"
          type="email"
          placeholder="Email"
          value={formRegister.email}
          onChange={handleChange}
        />
        <TextInput
          id="password"
          type="password"
          placeholder="Mot de passe"
          value={formRegister.password}
          onChange={handleChange}
        />
        <Button text="S'inscrire" type="primary" action={onRegister} />
      </form>
      <Link to="/login" className="link">
        déjà inscrit ?
      </Link>
    </div>
  );
}

export default Register;
