import './styles.scss';
import { useNavigate } from 'react-router-dom';
import iconBack from '../../assets/icons/back.svg';

export default function Back() {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };

  return (
    <div onClick={onBack} className={`Back`}>
      <img src={iconBack} alt="Icon retour" />
      <p>Retour</p>
    </div>
  );
}
