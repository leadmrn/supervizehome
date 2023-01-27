import { TextInputProps } from './types';
import './styles.scss';

export default function TextInput(props: TextInputProps) {
  return props.type === 'textarea' ? (
    <textarea
      id={props.id}
      className="TextInput"
      rows={10}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    ></textarea>
  ) : (
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
