import React from 'react';
import * as articlesAPI from '../../utilities/articles-api'
import Article from '../../components/Article/Article';

const SavedArticlesPage = ({ articles, setSavedArticles }) => {

  const handleRemove = async (e, article) => {
    e.preventDefault()
    const savedArticles = await articlesAPI.remove(article)
    console.log(articles, "%cAfter Remove", "color: green")
    setSavedArticles(savedArticles)
  }

  return (
    <div className="d-flex justify-content-center news-feed-column">
      <div className="col-md-8 bg-white p-3">
          <h1>Saved Articles Page</h1>
          <ul className="articles">
            {articles.map((article, index) => (
              <li key={index} className="article">
                <Article 
                article={article}
                handleRemove={(e) => handleRemove(e, article)}
                />
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default SavedArticlesPage;