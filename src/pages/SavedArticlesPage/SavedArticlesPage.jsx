import React from "react";
import Article from "../../components/Article/Article";
import './SavedArticlesPage.css'

const SavedArticlesPage = ({ articles, savedArticles, handleRemove }) => {
  return (
    <div className="d-flex justify-content-center news-feed-column">
      <div className="col-md-8 bg-white p-3">
        <h1 className="page-title">Saved Articles</h1>
        <ul className="articles">
          {articles.map((article, index) => (
            <li key={index} className="article">
              <Article
                article={article}
                savedArticles={savedArticles}
                handleRemove={handleRemove}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SavedArticlesPage;
