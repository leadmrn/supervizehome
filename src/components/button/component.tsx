import { ButtonProps } from './types';
import './styles.scss';

export default function Button(props: ButtonProps) {
  return (
    <div
      onClick={props.action}
      className={`Button ${props.type} ${props.className}`}
    >
      {props.text}
    </div>
  );
}
