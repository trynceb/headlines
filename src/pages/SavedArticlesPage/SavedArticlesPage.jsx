import React from 'react'
import Article from '../../components/Article/Article'

const SavedArticlesPage = ({articles}) => {

  return (
    <div className="d-flex justify-content-center news-feed-column">
      <div className="col-md-8 bg-white p-3">
        <div className="articles-container">
          <h1>Saved Articles Page</h1>
          {articles.map((article, index) => (
            <li key={index}><Article article={article} /></li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SavedArticlesPage
