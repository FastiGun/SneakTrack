import './App.scss';
import logo from './img/logo-nu.png'
import Login from './Pages/Login/login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/" className="logo"><img src={logo} alt="Logo de SneakTrack" /></a>
        <a href="/my-account"><h2>Mon compte</h2></a>
        <a href="/our-journey"><h2>Notre histoire</h2></a>
      </header>
      <Login/>
    </div>
  );
}

export default App;
