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
