import React from 'react';
import * as articlesAPI from '../../utilities/articles-api'
import Article from '../../components/Article/Article';

const SavedArticlesPage = ({ articles, setSavedArticles }) => {

  const handleRemove = async (e, article) => {
    e.preventDefault()
    await articlesAPI.remove(article)
    console.log(articles, "%cAfter Remove", "color: green")
    setSavedArticles(prevArticles => prevArticles.filter(a => a._id !== article._id))

    const savedArticles = JSON.parse(localStorage.getItem(articles)) || []
    const updatedList = savedArticles.filter(a => a._id !== article._id)
    localStorage.setItem(savedArticles, JSON.stringify(updatedList))
    console.log(savedArticles, "%cAfter deleting!", "color: orange")
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