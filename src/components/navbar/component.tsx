import { useNavigate, Outlet, useLocation, Link } from 'react-router-dom';

import Button from '../button';
import logo from '../../assets/global/logo.svg';

import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/userSlice';
import { useEffect } from 'react';

export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector((state: any) => state.token);

  const onLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  useEffect(() => {
    if (location.pathname === '/' && token) {
      navigate('/dashboard');
    } else if (location.pathname === '/' && !token) {
      navigate('/login');
    }
  }, [location.pathname, navigate, token]);

  return (
    <div>
      <div className="NavBar">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <nav>
          {!token ? (
            <div className="buttons">
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
            </div>
          ) : (
            <>
              <div className="buttons">
                <Button
                  action={onLogout}
                  text="Deconnexion"
                  type="destructive"
                />
              </div>
            </>
          )}
        </nav>
      </div>
      <Outlet />
    </div>
  );
}
