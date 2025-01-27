import React, { useState } from 'react';
import './Register.scss';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simule une requête de création de compte
    // Vérification de l'existence ou non du mail

    navigate('/login');
  };

  return (
    <>
      <h1 className="title">Création de mon compte</h1>
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
        <Input
          placeholder='Confirmation du mot de passe'
          type="password"
          id="repeat-password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          required
        />
        <Button className="form-button-validate" type="submit">Créer mon compte</Button>
      </form>
    </>
  );
}

export default Register;
