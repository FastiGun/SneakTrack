import "./NavBar.scss"
import logo from '../../img/logo-nu.png'
import { useNavigate } from 'react-router-dom';

function NavBar() {

  const navigate = useNavigate();

  return (
    <nav className='navbar'>
        <img onClick={() => navigate('/')} src={logo} alt="Logo de SneakTrack" />
        <h3 onClick={() => navigate('/my-account') }>Mon compte</h3>
        <h3 onClick={() => navigate('/our-journey') }>Notre histoire</h3>
    </nav>
  );
}

export default NavBar;
