// src/Pages/MyAccount/MyAccount.jsx
import './MyAccount.scss'
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountContext from '../../Contexts/AccountContext';

const MyAccount = () => {

  const navigate = useNavigate();
  const context = useContext(AccountContext); // Stocker la valeur du contexte
  const account = context?.account; // Utiliser l'optional chaining

  useEffect(() => {
    if (!account) {
      navigate('/login');
    }
  }, [account, navigate]);


  const handleLogout = () => {
    context.logout();
    navigate('/login');
  }

  return (
    <>
      <h1>Mon compte</h1>
      {account && <p>Bonjour {account.username} !</p>}
      <button onClick={handleLogout}>Déconnexion</button>
    </>
  );
};

export default MyAccount;