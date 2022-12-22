import { Link } from 'react-router-dom';

function Register() {
  return (
    <div>
      <h1>Inscription</h1>
      <form>
        <p>Je suis un :</p>
        <div>
          <div>
            <p>Constructeur / Client</p>
          </div>
          <div>
            <p>Artisan</p>
          </div>
        </div>
        <div>
          <input type="text" placeholder="Prénom" />
          <input type="text" placeholder="Nom" />
        </div>
        <input type="tel" placeholder="N° de Téléphone" />
        <input type="email" placeholder="Email" />
        <input type="email" placeholder="Confirmation de l'email" />
        <input type="password" placeholder="Mot de passe" />
        <input type="password" placeholder="Confirmation du mot de passe" />
        <input type="submit" title="S'inscrire" />
      </form>
      <Link to="/login">pas encore inscrit ?</Link>
    </div>
  );
}

export default Register;
