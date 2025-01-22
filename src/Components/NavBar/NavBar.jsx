import "./NavBar.scss"
import { useContext, useState } from 'react';
//import logo from '../../img/logo-nu.png'
import { useNavigate } from 'react-router-dom';
import AccountContext from '../../Contexts/AccountContext';

function NavBar() {

  const [visible, setVisible] = useState(null);
  const navigate = useNavigate();
  const context = useContext(AccountContext); // Stocker la valeur du contexte
  const account = context?.account; // Utiliser l'optional chaining

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
          <div className="avatar" onClick={() => setVisible(true)}>
            <h1>
              {account.username[0].toUpperCase()}
            </h1>
          </div> : null}
      </nav>
      <div className="modal" visible={visible} onHide={() => setVisible(false)}>
          a
      </div>
    </>
    
  );
}

export default NavBar;
