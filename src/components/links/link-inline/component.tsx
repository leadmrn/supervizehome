import { Link } from 'react-router-dom';

import { LinkProps } from '../types';
import './styles.scss';

export default function LinkInline(props: LinkProps) {
  return (
    <div
      className={`LinkInline ${
        props.role === 'artisan' ? 'colorArtisan' : 'colorClient'
      }`}
    >
      <Link to={props.path}>{props.name}</Link>
    </div>
  );
}
