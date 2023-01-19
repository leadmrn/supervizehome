export interface ButtonProps {
  text: string;
  type: 'primary' | 'secondary' | 'destructive';
  action: () => void;
}
