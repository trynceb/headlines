import React from 'react'
import { Link } from 'react-router-dom';

const Article = ({ article }) => {
    console.log(article);
    return (
        <>
            <div>
                <h3>{article.title}</h3>
                <p>Source: {article.source}</p>
                <p>Date: {article.pubDate}</p>
                <p>{article.description}</p>
                <button>Save</button>
                <Link to={`details/$articleId`}>
                    <button>Read More</button>
                </Link>
            </div>
        </>
    )
}

export default Article