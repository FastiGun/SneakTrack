import "./NavBar.scss"
import { useContext, useState, useEffect, useRef } from 'react';
//import logo from '../../img/logo-nu.png'
import { useNavigate } from 'react-router-dom';
import AccountContext from '../../Contexts/AccountContext';
import Button from "../Button/Button";

function NavBar() {

  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const context = useContext(AccountContext); // Stocker la valeur du contexte
  const account = context?.account; // Utiliser l'optional chaining

  const handleLogout = () => {
    context.logout();
    navigate('/home');
  }

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible]); // Ajoutez visible dans le tableau des dépendances

  return (
    <>
      <nav className='navbar'>
        <div className="navbar-gauche">
          <h1 className="logo" onClick={() => navigate('/')}>SneakTrack</h1>
          { account ? 
            <h3 onClick={() => navigate('/my-account') }>Mon compte</h3> 
            :
            <h3 onClick={() => navigate('/login') }>Me connecter</h3>
          }
          <h3 onClick={() => navigate('/our-journey') }>Notre histoire</h3>
        </div>
        {account ? 
          <div className="avatar" onClick={() => setVisible(visible ? false : true)}>
            <h1>
              {account.username[0].toUpperCase()}
            </h1>
          </div> : null}
      </nav>
      <div className={`modal ${visible && account ? 'visible' : 'invisible'}`} ref={modalRef}> 
        <Button className="premier" onClick={() => navigate('/my-account')}>Mon compte</Button>
        <Button onClick={() => navigate('/my-sneakers')}>Mes sneakers</Button> 
        <Button className='dernier' onClick={handleLogout}>Me déconnecter</Button> 
      </div>
    </>
    
  );
}

export default NavBar;