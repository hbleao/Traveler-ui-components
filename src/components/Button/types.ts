export type ButtonProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  type?: 'small' | 'medium';
  onClick?: () => void;
};