import './App.css';
import { useState } from 'react';
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar'
import AuthPage from '../AuthPage/AuthPage';
import HeadlinesPage from '../HeadlinesPage/HeadlinesPage';
import SavedArticlesPage from '../SavedArticlesPage/SavedArticlesPage';

function App() {
  console.log(getUser())
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      <Header user={user} setUser={setUser} />
      {user ? (
        <>
          <div className='nav-container'>
            <NavBar />
          </div>
          <div className="main-content-container">
            <Routes>
              <Route path='/home' element={<HeadlinesPage />} />
              <Route path='/saved' element={<SavedArticlesPage />} />
            </Routes>
          </div>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
