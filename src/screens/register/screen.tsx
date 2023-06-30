import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import TextInput from '../../components/text-input';
import { userService } from '../../service/api';

import './styles.scss';
import Error from '../../components/error';

function Register() {
  const navigate = useNavigate();
  const [error, showError] = useState(false);
  const [isArtisan, setIsArtisan] = useState(false);
  const [isClient, setIsClient] = useState(true);
  const [formRegister, setFormRegister] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    type: 'client',
    job: '',
    tel: '',
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
    setFormRegister((prevState) => ({ ...prevState, type: 'artisan' }));
  };

  const onClickClient = () => {
    if (isArtisan) setIsArtisan(false);
    setIsClient(true);
    setFormRegister((prevState) => ({ ...prevState, type: 'client' }));
  };

  const onRegister = async () => {
    try {
      if (error) showError(false);
      await userService.register(formRegister);
      navigate('/login');
    } catch (e) {
      showError(true);
      console.log(e);
    }
  };

  return (
    <div className="Register page content_center">
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
            id="firstName"
            type="text"
            placeholder="Prénom"
            value={formRegister.firstName}
            onChange={handleChange}
          />
          <TextInput
            id="lastName"
            type="text"
            placeholder="Nom"
            value={formRegister.lastName}
            onChange={handleChange}
          />
        </div>
        <TextInput
          id="username"
          type="text"
          placeholder="Identifiant"
          value={formRegister.username}
          onChange={handleChange}
        />
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
        <TextInput
          id="tel"
          type="tel"
          placeholder="N° de Téléphone"
          value={formRegister.tel}
          onChange={handleChange}
        />
        <div className={`input_job ${isArtisan ? 'show' : null}`}>
          <label htmlFor="job">Profession</label>
          <select name="job" id="job" required onChange={handleChange}>
            <option value="Coordinateur">Coordinateur</option>
            <option value="Peintre">Peintre</option>
            <option value="Serrurier">Serrurier</option>
            <option value="Chauffagiste">Chauffagiste</option>
            <option value="Couvreur">Couvreur</option>
            <option value="Maçon">Maçon</option>
            <option value="Plombier">Plombier</option>
            <option value="Electricien">Electricien</option>
            <option value="Architecte">Architecte</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        <Button
          className="button_submit"
          text="S'inscrire"
          type="primary"
          action={onRegister}
        />
      </form>
      <Link to="/login" className="link">
        déjà inscrit ?
      </Link>
      {error ? <Error /> : null}
    </div>
  );
}

export default Register;
