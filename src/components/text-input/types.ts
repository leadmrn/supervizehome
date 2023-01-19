export interface TextInputProps {
  id: string;
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'date' | 'textarea';
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
}
