import React from "react";

const DetailsPage = ({ article }) => {
    const { title, url, source, imageUrl, pubDate, content } = article
    return (
        <div>
            <h1>{title}</h1>
            <p>URL: {url}</p>
            <p>Source: {source.domain}</p>
            <p>Image URL: {imageUrl}</p>
            <p>Published Date: {pubDate.toString()}</p>
            <p>{content}</p>
        </div>
    )
}

export default DetailsPage
