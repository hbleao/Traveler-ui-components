import React from 'react';

import './style.scss';

export type CheckboxProps = {
  id?: string;
  className?: string;
  name?: string;
  isChecked?: boolean;
  labelText: string;
  onClick?: () => void;
}

export const Checkbox = ({
  id, 
  name, 
  className = '',
  isChecked, 
  labelText, 
  onClick 
}: CheckboxProps) => {

  return (
    <label 
      id={id} 
      htmlFor={name}
      className={`checkbox-container ${className}`}
      onClick={onClick}
    > 
      <div 
        className={`checkbox-container__button ${isChecked ?
          'checkbox-container__button--isChecked' : '' }`}
      />
        {labelText}
    </label>
  )
}