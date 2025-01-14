import React, { useState } from 'react';
import './login.scss';

function Login() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group form-mail">
          <input
            placeholder='Adresse mail'
            type="text"
            id="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />
        </div>
        <div className="form-group form-password">
          <input
            placeholder='Mot de passe'
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="form-button-validate" type="submit">Me connecter</button>
        <a className="form-link form-bad-password" href="/register">Mot de passe oublié</a>
        <a className="form-link" href="/register">Je n'ai pas de compte</a>
      </form>
    </div>
  );
}

export default Login; 
