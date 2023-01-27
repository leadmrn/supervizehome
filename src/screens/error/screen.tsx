import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import './styles.scss';

function ErrorPage() {
  const navigate = useNavigate();
  const token = useSelector((state: any) => state.token);

  const redirect = () => {
    if (token) {
      navigate('/dashboard');
    } else if (!token) {
      navigate('/login');
    }
  };

  return (
    <div className="ErrorPage page content_center">
      <h1>Oops!</h1>
      <p>Désolé, une erreur inattendue s'est produite.</p>
      <Button text="Revenir au site" type="primary" action={redirect} />
    </div>
  );
}

export default ErrorPage;
