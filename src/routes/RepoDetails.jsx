import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const RepoDetails = () => {
  const { state } = useLocation();
  const [repo, setRepo] = useState(state?.repo || {});

  return (
    <div className="container">
      <h1>{repo.name}</h1>
      <p className="details">{repo.description || "No description available"}</p>
      <p className="details">
        <strong>Language:</strong> {repo.language || "N/A"}
      </p>
      <p className="details">
        <strong>Forks:</strong> {repo.forks_count}
      </p>
      <p className="details">
        <strong>Open Issues:</strong> {repo.open_issues_count}
      </p>
      <p className="details">
        <strong>Watchers:</strong> {repo.watchers_count}
      </p>
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="back-link">
        View on GitHub
      </a>
      <br />
      <Link to="/" className="back-link">Back to List</Link>
    </div>
  );
};

export default RepoDetails;