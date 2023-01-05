import { Link } from 'react-router-dom';

import { LinkProps } from '../types';
import './styles.scss';

export default function LinkInline(props: LinkProps) {
  return (
    <div className="LinkInline">
      <Link to={props.path}>{props.name}</Link>
    </div>
  );
}
