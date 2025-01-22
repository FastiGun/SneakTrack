import React, { useState, useContext } from 'react';
import './Login.scss';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import Link from '../../Components/Link/Link';
import { useNavigate } from 'react-router-dom';
import AccountContext from '../../Contexts/AccountContext';

function Login() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const context = useContext(AccountContext); // Utilisation du context
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simule une requête d'authentification (remplacez par votre logique réelle)
    // Vous pouvez par exemple, utiliser l'API Fetch pour envoyer les informations de connexion à votre backend

    // En cas de succès de connexion
    const user = {
      username: mail, // Récupérez le nom d'utilisateur de votre backend
      email: mail,
      id: 123,
    };
    await context?.login(user);
    navigate('/my-account');

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
