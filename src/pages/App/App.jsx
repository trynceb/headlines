import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import HeadlinesPage from "../HeadlinesPage/HeadlinesPage";
import SavedArticlesPage from "../SavedArticlesPage/SavedArticlesPage";
import DetailsPage from "../DetailsPage/DetailsPage";
import * as articlesAPI from "../../utilities/articles-api";
import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());
  const [sharedArticles, setSharedArticles] = useState();
  const [savedArticles, setSavedArticles] = useState([]);

  const handleRemove = async (e, articleId) => {
    e.preventDefault();
    const savedArticles = await articlesAPI.remove(articleId);
    setSavedArticles(savedArticles);
  };

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
                    savedArticles={savedArticles}
                    sharedArticles={sharedArticles}
                    setSharedArticles={setSharedArticles}
                    setSavedArticles={setSavedArticles}
                    handleRemove={handleRemove}
                  />
                }
              />
              <Route
                path="/saved"
                element={
                  <SavedArticlesPage
                    articles={savedArticles}
                    savedArticles={savedArticles}
                    setSavedArticles={setSavedArticles}
                    handleRemove={handleRemove}
                  />
                }
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
