import React, { useState, useEffect } from 'react';
import * as articlesAPI from '../../utilities/articles-api'
import './HeadlinesPage.css';
import Article from '../../components/Article/Article';

const HeadlinesPage = ({ setSharedArticles, setSavedArticles }) => {
  const [articles, setArticles] = useState([]);

  useEffect(function() {
    async function getArticles() {
      const articles = await articlesAPI.getAll()
      setArticles(articles);
      setSharedArticles(articles)
      console.log(articles, "This is after setArtcles")
    }
    getArticles()

    async function getSaved() {
      const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
      setSavedArticles(savedArticles)
    }
    getSaved()
  }, []);
  
  
  const handleSave = async (e, article) => {
    e.preventDefault()
    await articlesAPI.save(article)
    setSavedArticles((prevArticles) => [...prevArticles, article])
  }

  const handleRemove = async (e, article) => {
    e.preventDefault()
    await articlesAPI.remove(article)
    setSavedArticles(prevArticles => prevArticles.filter(a => a._id !== article._id))

    const savedArticles = JSON.parse(localStorage.getItem("savedArticles")) || []
    const updatedList = savedArticles.filter(a => a._id !== article._id)
    localStorage.setItem("savedArticles", JSON.stringify(updatedList))

  }

  return (
    <div className="d-flex justify-content-center news-feed-column">
      <div className="col-md-8 bg-white p-3">
        <h1 className="text-center">Headlines Page</h1>
        <ul>
          {articles.reduce((prev, article, index) => {
            return [...prev, <li key={index}>
              <Article 
                article={article} 
                handleSave={(e) => handleSave(e, article)}
                handleRemove={(e) => handleRemove(e, article)} 
              /></li>];
          }, [])}
        </ul>
      </div>
    </div>
  );
};

export default HeadlinesPage;


