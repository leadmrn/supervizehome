import { useNavigate, Outlet } from 'react-router-dom';

import LinkMenu from '../links/link-menu';
import Button from '../button';
import logo from '../../assets/global/logo.svg';

import './styles.scss';

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="NavBar">
        <img src={logo} alt="Logo" />
        <nav>
          <LinkMenu path="/dashboard" name="Dashboard" />
          <LinkMenu path="/guide" name="Guide de construction" />
          <Button
            action={() => {
              navigate('/login');
            }}
            text="Connexion"
            type="primary"
          />
          <Button
            action={() => {
              navigate('/register');
            }}
            text="Inscription"
            type="secondary"
          />
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
