export type InputProps = {
  id?: string;
  name: string;
  type?: 'text' | 'password' | 'email'
  className?: string;
  placeholder?: string;
  icon?: JSX.Element;
  borderRadius?: 'top' | 'bottom' | 'all' | 'none';
  onFocus?: () => void;
}