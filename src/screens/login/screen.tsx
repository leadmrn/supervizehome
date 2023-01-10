import { Link } from 'react-router-dom';
import TextInput from '../../components/text-input';

function Login() {
  return (
    <div className="Login page">
      <h1 className="center">Connexion</h1>
      <form className="form">
        <TextInput type="email" placeholder="Email" />
        <TextInput type="password" placeholder="Mot de passe" />
        <input type="submit" title="Se connecter" />
      </form>
      <Link to="/register">pas encore inscrit ?</Link>
    </div>
  );
}

export default Login;
