import React, { useState, useEffect } from 'react'
import './HeadlinesPage.css'
import Article from '../../components/Article/Article'


const HeadlinesPage = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const fetchHeadlines = async () => {
      const res = await fetch(`https://api.goperigon.com/v1/headlines?apiKey=${process.env.REACT_APP_API_KEY}`)
      const json = await res.json()
      console.log(articles + "This is just articles")

      if ( res.ok) {
        setArticles(json)
      }
    }
    fetchHeadlines()
  }, [])

  console.log(articles + "THIS")
  const articlesArray = Object.values(articles)
  console.log(articlesArray + "this is articlesArray")

  return (
    <div className="d-flex justify-content-center news-feed-column">
      <div className="col-md-8 bg-white p-3">
        <h1 className="text-center">Headlines Page</h1>
        <ul>
          {articlesArray.map((article, index) => (
            <li key={index}>
                <Article article={article} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HeadlinesPage
