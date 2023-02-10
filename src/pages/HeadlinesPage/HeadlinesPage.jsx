import React, { useState, useEffect } from 'react'
import './HeadlinesPage.css'
import Article from '../../components/Article/Article'

const HeadlinesPage = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {

  }, [])


  return (
    <div className="d-flex justify-content-center news-feed-column">
      <div className="col-md-8 bg-white p-3">
        <h1 className="text-center">Headlines</h1>
        <ul>
          {articles.forEach(article => (
            <li key={article._id}>
                <Article article={article} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HeadlinesPage
