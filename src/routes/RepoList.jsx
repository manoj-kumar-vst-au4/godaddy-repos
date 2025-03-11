import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchRepos } from "../api";

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  const getData =()=>{
    fetchRepos()
    .then((data) => {
      setRepos(data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  }
  useEffect(() => {
    getData();
  }, []);

  if (loading) return <p className='container'>Loading repositories...</p>;
  if (error) return <p className='container'>Error: {error}</p>;

  return (
    <div className="container">
      <h1>GoDaddy Repositories</h1>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link to={`/repo/${repo.name}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;

