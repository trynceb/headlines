import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import HeadlinesPage from '../HeadlinesPage/HeadlinesPage';
import SavedArticlesPage from '../SavedArticlesPage/SavedArticlesPage';
import DetailsPage from '../DetailsPage/DetailsPage';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
  const [sharedArticles, setSharedArticles] = useState();
  const [savedArticles, setSavedArticles] = useState([]);

  return (
    <main className="App">
      <Header user={user} setUser={setUser} />
      {user ? (
        <>
          <div className="nav-container">
            <NavBar />
          </div>
          <div className="main-content-container">
            <Routes>
              <Route
                exact
                path="/headlines"
                element={
                  <HeadlinesPage
                    setSharedArticles={setSharedArticles}
                    setSavedArticles={setSavedArticles}
                  />
                }
              />
              <Route
                path="/saved"
                element={<SavedArticlesPage articles={savedArticles} />}
              />
              <Route
                exact
                path="/headlines/:id"
                element={<DetailsPage articles={sharedArticles} />}
              />
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
