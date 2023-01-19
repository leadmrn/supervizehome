import { Link } from 'react-router-dom';
import './styles.scss';
import iconAddOrange from '../../assets/icons/add-orange.svg';
import iconAddGreen from '../../assets/icons/add-green.svg';

export default function Add(props: {
  role: 'client' | 'artisan';
  routeToGo: string;
  text: string;
}) {
  return (
    <div className="Add">
      <Link to={props.routeToGo}>
        <div>
          <img
            src={props.role === 'artisan' ? iconAddGreen : iconAddOrange}
            alt="Icon ajouter"
          />
          <p>{props.text}</p>
        </div>
      </Link>
    </div>
  );
}
