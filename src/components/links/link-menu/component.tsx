import { Link } from 'react-router-dom';

import { LinkProps } from '../types';
import './styles.scss';

export default function LinkMenu(props: LinkProps) {
  return (
    <div className={`LinkMenu ${props.role}`}>
      <Link to={props.path}>{props.name}</Link>
    </div>
  );
}
