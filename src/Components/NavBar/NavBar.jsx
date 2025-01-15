import "./NavBar.scss"
import logo from '../../img/logo-nu.png'

function NavBar() {
  return (
    <nav className='navbar'>
        <a href="/" className="logo"><img src={logo} alt="Logo de SneakTrack" /></a>
        <a href="/my-account"><h3>Mon compte</h3></a>
        <a href="/our-journey"><h3>Notre histoire</h3></a>
    </nav>
  );
}

export default NavBar;
