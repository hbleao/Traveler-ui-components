import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { HiOutlineMail } from 'react-icons/hi';

import { Button } from '@/components/Button';
import { InputSignIn } from '@/components/InputSignIn';
import { Checkbox } from '@/components/Checkbox';

import './styles/global.scss';
import './styles/theme.scss';
import './components/App/style.scss';

export const App = () => {
  const [isChecked, setIsCheked] = useState(false);

  return (
  <div className="app">
    <div className="app__title">
      <h1>MicroFrontend Traveler - UI Components</h1>
    </div>

    <div className="app__subtitle">
      <h2>Buttons</h2>

      <div className="divisor">
        <Button type="small">Button small</Button>
      </div>

      <div className="divisor">
        <Button type="medium">Button Medium</Button>
      </div>
    </div>

    <br />
    <br />

    <div className="app__subtitle">
      <h2>Inputs</h2>

      <div className="divisor">
        <InputSignIn
          type="email"
          name="login-email" 
          placeholder="E-mail"
          borderRadius="all"
          icon={
            <HiOutlineMail 
              color='#A0ACB2' 
              fontSize={25} 
            />
          }
        />
      </div>
      <div className="divisor">
        <InputSignIn
          type="email"
          name="login-email" 
          placeholder="E-mail"
          borderRadius="top"
          icon={
            <HiOutlineMail 
              color='#A0ACB2' 
              fontSize={25} 
            />
          }
        />
      </div>
      <div className="divisor">
        <InputSignIn 
          type="email"
          name="login-password"
          placeholder="Senha"
          borderRadius="bottom"
          icon={
            <IoMdEyeOff  
            color='#A0ACB2' 
            fontSize={25} 
            />
          } 
        />
      </div>
      <div className="divisor">
        <InputSignIn 
          type="password"
          name="login-password"
          placeholder="Senha"
          borderRadius="none"
          icon={
            <IoMdEyeOff  
            color='#A0ACB2' 
            fontSize={25} 
            />
          } 
        />
      </div>
    </div>
    <br />
    <div className="app__subtitle">
      <Checkbox 
        labelText="Aceito os termos de uso" 
        onClick={() => setIsCheked(!isChecked)} 
        isChecked={isChecked} 
      />
    </div>
  </div>
)};
