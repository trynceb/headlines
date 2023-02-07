import './App.css';
import { useState } from 'react';
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import NavBar from '../../components/NavBar/NavBar';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

function App() {
  console.log(getUser())
  const [user, setUser] = useState(getUser())


  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} set={setUser} />
          <Routes>
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
          </Routes>
        </>
        : 
        <AuthPage setUser={setUser} />}
    </main>
  );
}

export default App;
