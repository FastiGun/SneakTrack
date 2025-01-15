import './App.scss';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar'
import Login from './Pages/Login/login'

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <div className='content'>
        <Routes>
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
