import React from 'react';

import './style.scss';

import { ButtonProps } from './types';

export const Button = ({
  id,
  className = '',
  type = 'small',
  onClick,
  children,
}: ButtonProps) => (
  <button
    type='button'
    id={id}
    className={`btn ${className} btn--${type}`}
    onClick={onClick}
  >
    {children}
  </button>
);
