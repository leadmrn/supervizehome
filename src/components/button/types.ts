export interface ButtonProps {
  text: string;
  type: 'primary' | 'secondary';
  action: () => void;
}
