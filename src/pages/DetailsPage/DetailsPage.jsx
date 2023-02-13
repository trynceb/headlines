import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
// import * as articlesAPI from '../../utilities/articles-api'

const DetailsPage = ({ articles }) => {
    console.log(articles)
    const [article, setArticle] = useState({})
    const {id} = useParams()

    console.log(id)

    useEffect(() => getArticle(),[])

    function getArticle() {
        const currentArticle = articles.find(article => article._id === id)
        console.log(currentArticle)
        setArticle(currentArticle)
    }
    
    return (
        <div className="container my-5">
            <h1 className="text-center">Details Page</h1>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <h2 className="text-center">{article.title}</h2>
                    <img src={article.imageUrl} className="img-fluid mb-3" alt={article.title} />
                    <p>Published Date: {article.pubDate}</p>
                    <p>{article.content}</p>
                    <Link to="/headlines">
                        <button className="btn btn-primary">Back to Headlines</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage

