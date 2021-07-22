import React from 'react';

import './style.scss';

import { InputProps } from './types';

export const InputSignIn = ({ 
  id, 
  className = '',
  type, 
  name, 
  placeholder, 
  icon,
  borderRadius,
  onFocus
}: InputProps) => {

  return (
    <div 
      className={`input-container ${className}
      ${`input-container--radius-${borderRadius}`}`}
    >
      <input 
        id={id}
        name={name}
        className="input-container__input"
        type={type} 
        placeholder={placeholder}
        onFocus={onFocus}
      />
      {icon}
    </div>
  )
}
