import './App.css';
import { useState, useEffect } from 'react';
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import * as articlesAPI from "../../utilities/articles-api"
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar'
import AuthPage from '../AuthPage/AuthPage';
import HeadlinesPage from '../HeadlinesPage/HeadlinesPage';
import SavedArticlesPage from '../SavedArticlesPage/SavedArticlesPage';
import DetailsPage from '../DetailsPage/DetailsPage';

function App() {
  const [user, setUser] = useState(getUser())
  const [articles, setArticles] = useState()

  useEffect(function() {
    async function getArticles() {
      const articles = await articlesAPI.getAll()
      setArticles(articles);
      console.log(articles, "This is after setArtcles")
    }
    getArticles()
  }, []);

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
              <Route path='/headlines' element={<HeadlinesPage articles={articles} />} />
              <Route path='/saved' element={<SavedArticlesPage />} />
              <Route path='/headlines/:id' element={<DetailsPage articles={articles} />} />
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
