import './styles.scss';
import { BadgeProps } from './types';

export default function Badge(props: BadgeProps) {
  return <div className={`Badge`}>{props.job}</div>;
}
