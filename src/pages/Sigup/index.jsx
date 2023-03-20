import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.jpg';

import './sigin.css';

export default function SigUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log('Formulario Enviado');

    setName('');
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
          <h1>Cadastrar</h1>
          <input
            type='text'
            placeholder='Nome...'
            value={name || ''}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='email'
            placeholder='Email...'
            value={email || ''}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Senha...'
            value={password || ''}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Enviar</button>
        </form>
        <Link to='/'>Já tem uma conta? Login</Link>
      </div>
    </div>
  );
}
