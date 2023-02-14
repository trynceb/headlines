import React from 'react';
import Article from '../../components/Article/Article';

const SavedArticlesPage = ({ articles }) => {
  return (
    <div className="d-flex justify-content-center news-feed-column">
      <div className="col-md-8 bg-white p-3">
          <h1>Saved Articles Page</h1>
          <ul className="articles">
            {articles.map((article, index) => (
              <li key={index} className="article">
                <Article article={article} />
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default SavedArticlesPage;
