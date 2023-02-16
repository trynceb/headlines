import { Link } from 'react-router-dom';
import './Article.css';

function Article({ article, savedArticles, handleSave, handleRemove }) {
    const date = new Date(article.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const isSaved = savedArticles.find(savedArticle => savedArticle._id === article._id);

    return (
        <div className="article">
          <h3>{article.title}</h3>
          <p>Source: {article.source.domain}</p>
          <p>Date: {date}</p>
          <p>{article.description}</p>
          {isSaved
            ? <button className="btn btn-success" onClick={(e) => handleRemove(e, article._id)}>Remove</button>
            : <button className="btn btn-primary" onClick={(e) => handleSave(e, article._id)}>Save</button>
          }
          <Link to={`/headlines/${article._id}`}>
            <button className="btn btn-info">Read More</button>
          </Link>
        </div>
    )
}

export default Article;