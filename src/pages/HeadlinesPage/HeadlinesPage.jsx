import React, { useState, useEffect } from 'react'
import './HeadlinesPage.css'
import Article from '../../components/Article/Article'


const HeadlinesPage = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchHeadlines = async () => {
      const res = await fetch(`https://api.goperigon.com/v1/headlines?apiKey=${process.env.REACT_APP_API_KEY}`)
      const json = await res.json()
      console.log(json)

      if ( res.ok) {
        console.log(json)
        setArticles(json.clusters)
      }
    }
    fetchHeadlines()
  }, [])

  const articlesArray = Object.values(articles)

  return (
    <div className="d-flex justify-content-center news-feed-column">
      <div className="col-md-8 bg-white p-3">
        <h1 className="text-center">Headlines Page</h1>
        <ul>
          {articlesArray.map(article => (
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
