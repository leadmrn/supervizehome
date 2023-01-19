import { Link } from 'react-router-dom';
import TextInput from '../../components/text-input';
import Button from '../../components/button';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';
import { userService } from '../../service/user';
import { useState } from 'react';

function Login() {
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
    userService.login(formLogin);
  };

  return (
    <div className="Login page">
      <h1 className="center">Connexion</h1>
      <form className="form">
        <TextInput
          id="identifier"
          type="email"
          placeholder="Email"
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
        <Button text="Se connecter" type="primary" action={onLogin} />
      </form>
      <Link to="/register">pas encore inscrit ?</Link>
    </div>
  );
}

export default Login;
