import { useNavigate, Outlet } from 'react-router-dom';

import LinkMenu from '../links/link-menu';
import Button from '../button';
import logo from '../../assets/global/logo.svg';

import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { userService } from '../../service/user';
import { logout } from '../../redux/userSlice';

export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state: any) => state.token);
  const email = useSelector((state: any) => state.userInfo.role);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <div className="NavBar">
        <img className="logo" src={logo} alt="Logo" />
        <nav>
          <div className="links">
            <LinkMenu path="/dashboard" name="Dashboard" />
          </div>
          <div className="buttons">
            {!token ? (
              <>
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
              </>
            ) : (
              <Button action={onLogout} text="Deconnexion" type="destructive" />
            )}
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
