import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchRepoDetails } from "../api";

const RepoDetails = () => {
  const { repoName } = useParams();
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRepoDetails(repoName)
      .then((data) => {
        setRepo(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [repoName]);

  if (loading) return <p className="container">Loading repository details...</p>;
  if (error) return <p className="container">Error: {error}</p>;

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