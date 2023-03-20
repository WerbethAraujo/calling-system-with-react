import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.jpg';

import './sigin.css';

export default function SigIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log('Formulario Enviado');

    setEmail('');
    setPassword('');
  }

  return (
    <div className='container__login'>
      <div className='login'>
        <div className='logo-login'>
          <img src={Logo} alt='logo do sistema' />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Entrar</h1>
          <input
            type='email'
            placeholder='Digite seu email...'
            value={email || ''}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Digite sua senha...'
            value={password || ''}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Acessar</button>
        </form>
        <Link to='./register'>Criar Conta</Link>
      </div>
    </div>
  );
}
