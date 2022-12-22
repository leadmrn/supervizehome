import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h1>Connexion</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <input type="submit" title="Se connecter" />
      </form>
      <Link to="/register">pas encore inscrit ?</Link>
    </div>
  );
}

export default Login;
