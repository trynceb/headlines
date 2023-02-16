import { Link } from 'react-router-dom';
import './Article.css';

function Article({ article, handleSave, handleRemove }) {
    const date = new Date(article.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="article">
          <h3>{article.title}</h3>
          <p>Source: {article.source.domain}</p>
          <p>Date: {date}</p>
          <p>{article.description}</p>
          <button className="btn btn-primary" onClick={(e) => handleSave(e, article._id)}>Save</button>
          <button className="btn btn-success" onClick={(e) => handleRemove(e, article._id)}>Remove</button>
          <Link to={`/headlines/${article._id}`}>
            <button className="btn btn-info">Read More</button>
          </Link>
        </div>
    )
}

export default Article;