import './App.scss';
import NavBar from './Components/NavBar/NavBar'
import Login from './Pages/Login/login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <Login/>
    </div>
  );
}

export default App;
