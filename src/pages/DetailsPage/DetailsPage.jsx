import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import * as articlesAPI from '../../utilities/articles-api'

const DetailsPage = () => {
    const [article, setArticle] = useState()

    useEffect(function() {
        async function getArticle() {
            const articleById = await articlesAPI.getById(article)
            setArticle(articleById)
            console.log(article + "%cThis is after setArticle", "color: blue")
        }
        getArticle()
    }, [article])

    return (
        <div className="container my-5">
            <h1 className="text-center">Details Page</h1>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <h2 className="text-center">{article.title}</h2>
                    <p className="text-center">Source: {article.source}</p>
                    <img src={article.imageUrl} className="img-fluid mb-3" alt={article.title} />
                    <p>Published Date: {article.pubDate.toString()}</p>
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
