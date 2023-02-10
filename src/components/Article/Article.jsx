import React from 'react'

const Article = ({ article }) => {
    return (
        <div>
            <h3>{article.title}</h3>
            <p>Source: {article.source}</p>
            <p>Location: {article.location}</p>
            <p>Date: {article.date}</p>
            <p>{article.body}</p>
        </div>
    )
}

export default Article