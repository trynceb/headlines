import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailsPage.css";

const DetailsPage = ({ articles }) => {
  const [article, setArticle] = useState({});
  const { id } = useParams();

  useEffect(() => getArticle(), []);

  function getArticle() {
    const currentArticle = articles.find((article) => article._id === id);
    setArticle(currentArticle);
  }

  const date = new Date(article.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card">
            {article.imageUrl && (
              <img
                src={article.imageUrl}
                className="card-img-top"
                alt={article.title}
              />
            )}
            <div className="card-body">
              <h2 className="card-title">{article.title}</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  Source: {article.source && article.source.domain}
                </li>
                <li className="list-group-item">Published Date: {date}</li>
              </ul>
              <p className="card-text">{article.content}</p>
            </div>
            <div className="card-body">
              <Link to="/headlines" className="card-link">
                Back to Headlines
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
