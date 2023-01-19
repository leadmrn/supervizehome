import { TextInputProps } from './types';
import './styles.scss';

export default function TextInput(props: TextInputProps) {
  return (
    <input
      id={props.id}
      className="TextInput"
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}
