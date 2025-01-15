import './App.scss';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import MyAccount from './Pages/MyAccount/MyAccount';
import AccountContext from './Contexts/AccountContext';
import Register from './Pages/Register/Register'

function App() {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    // Charger l'état de l'utilisateur depuis le localStorage
    const storedAccount = localStorage.getItem('userAccount');
    if (storedAccount) {
      setAccount(JSON.parse(storedAccount));
    }
  }, []);

  useEffect(() => {
    // Sauvegarder l'état de l'utilisateur dans le localStorage à chaque changement
    if(account) {
      localStorage.setItem('userAccount', JSON.stringify(account));
    }
    else {
        localStorage.removeItem('userAccount')
    }

  }, [account]);

  const login = (userAccount) => {
    setAccount(userAccount);
  };

  const logout = () => {
    setAccount(null);
  };

  const contextValue = {
    account,
    login,
    logout,
  };

  return (
    <AccountContext.Provider value={contextValue}>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <div className="content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </AccountContext.Provider>
  );
}

export default App;
