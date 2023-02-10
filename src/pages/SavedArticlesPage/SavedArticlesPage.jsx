import React from 'react'
import { Link } from 'react-router-dom'

const SavedArticlesPage = () => {
  return (
    <div className="d-flex justify-content-center news-feed-column">
      <div className="col-md-8 bg-white p-3">
        <div className="articles-container">
          <h1>Saved Articles Page</h1>
          <div className="articles">
            <div className="article">
              <h2 className="article-title">Article Title</h2>
              <p className="article-desc">Article Description</p>
              <Link to="#" className="article-link">Read more</Link>
            </div>
            <div className="article">
              <h2 className="article-title">Article Title</h2>
              <p className="article-desc">Article Description</p>
              <Link to="#" className="article-link">Read more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SavedArticlesPage
