import { useState } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../components/text-input';

function Register() {
  const [isArtisan, setIsArtisan] = useState(false);

  return (
    <div className="Register page">
      <h1 className="center">Inscription</h1>
      {/* <form className="form">
        <p>Je suis un :</p>
        <div>
          <div onClick={() => setIsArtisan(false)}>
            <p>Constructeur / Client</p>
          </div>
          <div onClick={() => setIsArtisan(true)}>
            <p>Artisan</p>
          </div>
        </div>
        <div className="form_div2col">
          <TextInput type="text" placeholder="Prénom" />
          <TextInput type="text" placeholder="Nom" />
        </div>
        <TextInput type="tel" placeholder="N° de Téléphone" />
        {isArtisan ? <TextInput type="text" placeholder="Profession" /> : null}
        <TextInput type="email" placeholder="Email" />
        <TextInput type="email" placeholder="Confirmation de l'email" />
        <TextInput type="password" placeholder="Mot de passe" />
        <TextInput type="password" placeholder="Confirmation du mot de passe" />
        <input type="submit" title="S'inscrire" />
      </form> */}
      <Link to="/login">déjà inscrit ?</Link>
    </div>
  );
}

export default Register;
