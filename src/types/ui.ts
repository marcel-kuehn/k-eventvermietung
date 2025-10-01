export interface Image {
  filename: string;
  alt: string;
}

export interface Link {
  href: string;
  text: string;
  target: string;
  rel?: string;
}

export interface HiddenValueProps {
  name: string;
  value: string;
  _editable: string;
  component: string;
  _uid: string;
}

export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  name: string;
  placeholder?: string;
  label: string;
  className?: string;
  required?: boolean;
  minlength?: number;
  maxlength?: number;
  _editable: string;
  component: string;
  _uid: string;
}

export interface DividerProps {
  _editable?: string;
  component?: string;
  _uid?: string;
  className?: string;
}

export interface TextareaProps {
  label?: string;
  name?: string;
  placeholder?: string;
  rows?: number;
  className?: string;
  minlength?: number;
  maxlength?: number;
  required?: boolean;
  _editable: string;
  component: string;
  _uid: string;
}

export interface CheckboxProps {
  name?: string;
  label: string;
  required?: boolean;
  className?: string;
  _editable: string;
  component: string;
  _uid: string;
}

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  variant?: 'primary' | 'primary-contrast';
}

export interface TypographyProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'p1'
    | 'p2'
    | 'label'
    | 'h1-contrast'
    | 'h2-contrast'
    | 'h3-contrast'
    | 'p1-contrast'
    | 'p2-contrast';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'strong' | 'div';
  id?: string;
  className?: string;
}

export interface LinkButtonProps {
  href: string;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary' | 'primary-contrast';
  className?: string;
}

export interface IconProps {
  name: string;
  size?: number | string;
  class?: string;
}

export interface CardProps {
  className?: string;
  variant?: 'default' | 'default-contrast';
  as?: 'article' | 'div' | 'section';
}
