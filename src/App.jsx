import { useEffect, useState } from 'react';
import './App.css';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { UserContext } from './context/UserContext';
import { Dashboard } from './components/Dashboard/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setCurrentUser(user);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        handleLogin(parsedUser);
      } catch (error) {
        console.log(error);
      }
    }

  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <>
    <UserContext.Provider value={{ isLoggedIn, currentUser, handleLogin, handleLogout}}>
      <Header />
      <main>
        {isLoggedIn ? <Dashboard /> : <Form />}
      </main>
    </UserContext.Provider>
    </>
  )
}

export default App
