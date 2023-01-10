import { TextInputProps } from './types';
import './styles.scss';

export default function TextInput(props: TextInputProps) {
  return (
    <input
      className="TextInput"
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}
