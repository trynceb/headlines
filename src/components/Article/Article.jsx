import React from 'react'
import { Link } from 'react-router-dom';

const Article = ({ article, handleSave }) => {
    console.log(article);
    return (
        <>
            <div>
                <h3>{article.title}</h3>
                <p>Source: {article.source.domain}</p>
                <p>Date: {article.pubDate}</p>
                <p>{article.description}</p>
                <button onClick={handleSave}>Save</button>
                <Link to={`/headlines/${article._id}`}>
                    <button>Read More</button>
                </Link>
            </div>
        </>
    )
}

export default Article