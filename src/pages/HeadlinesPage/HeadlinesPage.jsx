import "./HeadlinesPage.css";
import React, { useState, useEffect } from "react";
import * as articlesAPI from "../../utilities/articles-api";
import Article from "../../components/Article/Article";

const HeadlinesPage = ({
  savedArticles,
  setSharedArticles,
  setSavedArticles,
  handleRemove,
}) => {
  const [articles, setArticles] = useState([]);

  useEffect(function () {
    async function getArticles() {
      const articles = await articlesAPI.getAll();
      setArticles(articles);
      setSharedArticles(articles);
    }
    getArticles();
  }, []);

  const handleSave = async (e, articleId) => {
    e.preventDefault();
    const savedArticles = await articlesAPI.save(articleId);
    setSavedArticles(savedArticles);
  };

  return (
    <div className="d-flex justify-content-center news-feed-column">
      <div className="col-md-8 bg-white p-3">
        <h1 className="text-left">Headlines</h1>
        <ul>
          {articles.reduce((prev, article, index) => {
            return [
              ...prev,
              <li key={index}>
                <Article
                  article={article}
                  savedArticles={savedArticles}
                  handleSave={handleSave}
                  handleRemove={handleRemove}
                />
              </li>,
            ];
          }, [])}
        </ul>
      </div>
    </div>
  );
};

export default HeadlinesPage;
