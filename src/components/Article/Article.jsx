import React from 'react'


const Article = ({ article }) => {

    return (
        <>
            <div>
                <h3>{article.title}</h3>
                <p>Source: {article.source.domain}</p>
                <p>Date: {article.pubDate}</p>
                <p>{article.description}</p>
                <button>Save</button>
                <button>Read More</button>
            </div>
        </>
    )
}

export default Article