import "./NavBar.scss"
import logo from '../../img/logo-nu.png'

function NavBar() {
  return (
    <nav className='navbar'>
        <a href="/" className="logo"><img src={logo} alt="Logo de SneakTrack" /></a>
        <a href="/my-account"><h2>Mon compte</h2></a>
        <a href="/our-journey"><h2>Notre histoire</h2></a>
    </nav>
  );
}

export default NavBar;
