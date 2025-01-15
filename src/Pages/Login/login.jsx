import React, { useState } from 'react';
import './login.scss';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import Link from '../../Components/Link/Link';

function Login() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="title">Connexion</h1>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder='Adresse mail'
          type="email"
          id="mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          required
        />
        <Input
          placeholder='Mot de passe'
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button className="form-button-validate" type="submit">Se connecter</Button>
        <div className="form-links">
          <Link
            className="form-link"
            href="/forgot-password"
          >
            Mot de passe oublié
          </Link>
          <Link
            className="form-link"
            href="/register"
          >
            Je n'ai pas de compte
          </Link>
        </div>
      </form>
    </>
  );
}

export default Login; 
