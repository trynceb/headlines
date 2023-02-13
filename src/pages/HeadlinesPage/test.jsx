import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HeadlinesPage.css';
import Article from '../../components/Article/Article';

const HeadlinesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const res = await axios.get(`https://api.goperigon.com/v1/headlines?apiKey=${process.env.REACT_APP_API_KEY}`);
        setArticles(Array.from(res.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchHeadlines();
  }, []);

  return (
    <div className="d-flex justify-content-center news-feed-column">
      <div className="col-md-8 bg-white p-3">
        <h1 className="text-center">Headlines Page</h1>
        <ul>
          {articles.map((article, index) => {
            return <li key={index}><Article article={article} /></li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeadlinesPage;
