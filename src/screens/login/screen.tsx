import { Link, useNavigate } from 'react-router-dom';
import TextInput from '../../components/text-input';
import Button from '../../components/button';
import { userService } from '../../service/api';
import { useState } from 'react';
import './styles.scss';
import Error from '../../components/error';

function Login() {
  const navigate = useNavigate();
  const [error, showError] = useState(false);
  const [formLogin, setFormLogin] = useState({
    identifier: '',
    password: '',
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormLogin((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const onLogin = async () => {
    try {
      if (error) showError(false);
      await userService.login(formLogin);
      navigate('/projects');
    } catch (e) {
      showError(true);
      console.log(e);
    }
  };

  return (
    <div className="Login page content_center">
      <h1 className="center">Connexion</h1>
      <form className="form">
        <TextInput
          id="identifier"
          type="email"
          placeholder="Email / Identifiant"
          value={formLogin.identifier}
          onChange={handleChange}
        />
        <TextInput
          id="password"
          type="password"
          placeholder="Mot de passe"
          value={formLogin.password}
          onChange={handleChange}
        />
        <Button
          className="button_submit"
          text="Se connecter"
          type="primary"
          action={onLogin}
        />
      </form>
      <Link className="link" to="/register">
        pas encore inscrit ?
      </Link>
      {error ? <Error /> : null}
    </div>
  );
}

export default Login;
