import React, { useState, useEffect } from 'react';
import * as articlesAPI from '../../utilities/articles-api'
import './HeadlinesPage.css';
import Article from '../../components/Article/Article';

const HeadlinesPage = () => {
  const [articles, setArticles] = useState([]);
  // const [savedArticles, setSavedArticles] = useState([])

  useEffect(function() {
    async function getArticles() {
      const articles = await articlesAPI.getAll()
      setArticles(articles);
      console.log(articles, "This is after setArtcles")
    }
    getArticles()

    // async function getSaved() {
    //   const getSavedArticles = await articlesAPI.getSaved()
    //   setSavedArticles(getSavedArticles)
    // }
    // getSaved()
  }, []);

  // const handleSave = async (article) => {
  //   const save = await articlesAPI.save(article)
  //   setSavedArticles((prevArticles) => [...prevArticles, article])
  // }

  return (
    <div className="d-flex justify-content-center news-feed-column">
      <div className="col-md-8 bg-white p-3">
        <h1 className="text-center">Headlines Page</h1>
        <ul>
          {articles.reduce((prev, article, index) => {
            return [...prev, <li key={index}><Article article={article} /></li>];
          }, [])}
        </ul>
      </div>
    </div>
  );
};

export default HeadlinesPage;
