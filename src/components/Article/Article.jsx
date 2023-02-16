import { Link } from "react-router-dom";
import "./Article.css";

function Article({ article, savedArticles, handleSave, handleRemove }) {
  const date = new Date(article.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const isSaved = savedArticles.find(
    (savedArticle) => savedArticle._id === article._id
  );

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Source: {article.source.domain} | Date: {date}
        </h6>
        <p className="card-text">{article.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            {isSaved ? (
              <button
                className="btn btn-success save-remove-btns"
                onClick={(e) => handleRemove(e, article._id)}
              >
                Remove
              </button>
            ) : (
              <button
                className="btn btn-primary save-remove-btns"
                onClick={(e) => handleSave(e, article._id)}
              >
                Save
              </button>
            )}
          </div>
          <div>
            <Link to={`/headlines/${article._id}`}>
              <button className="btn read-more-btn">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
