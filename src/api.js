import axios from "axios";

const BASE_URL = "https://api.github.com/orgs/godaddy/repos";

export const fetchRepos = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch repositories");
  }
};

export const fetchRepoDetails = async (repoName) => {
  try {
    const response = await axios.get(`https://api.github.com/repos/godaddy/${repoName}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch repository details");
  }
};