import React from 'react';
import * as articlesAPI from '../../utilities/articles-api'
import Article from '../../components/Article/Article';

const SavedArticlesPage = ({ articles, setSavedArticles }) => {

  const handleRemove = async (e, articleId) => {
    console.log("%cRemove Button Clicked!", "color: red")
    e.preventDefault()
    console.log(articleId)
    const savedArticles = await articlesAPI.remove(articleId)
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