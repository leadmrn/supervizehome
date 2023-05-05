export interface ButtonProps {
  text: string;
  type: 'primary' | 'secondary' | 'destructive';
  action: (() => void) | ((e: any) => Promise<void>);
  className?: string;
}
