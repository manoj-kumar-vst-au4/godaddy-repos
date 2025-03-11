import { render, screen } from "@testing-library/react";
import RepoDetails from "../routes/RepoDetails";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "@testing-library/jest-dom";

describe("RepoDetails", () => {
  it("should render the repository details", async () => {
    const repo = {
      name: "test-repo",
      description: "A sample test repository",
      language: "JavaScript",
      forks_count: 10,
      open_issues_count: 5,
      watchers_count: 20,
      html_url: "https://github.com/test-repo",
    };

    render(
      <MemoryRouter initialEntries={[{ pathname: "/repo/test-repo", state: { repo } }]}>
        <Routes>
          <Route path="/repo/:repoName" element={<RepoDetails />} />
        </Routes>
      </MemoryRouter>
    );

    expect(await screen.findByText(repo.name)).toBeInTheDocument();
    expect(screen.getByText(repo.description)).toBeInTheDocument();
    expect(screen.getByText(repo.language)).toBeInTheDocument();
    expect(screen.getByText(repo.forks_count.toString())).toBeInTheDocument();
    expect(screen.getByText(repo.open_issues_count.toString())).toBeInTheDocument();
    expect(screen.getByText(repo.watchers_count.toString())).toBeInTheDocument();
  });
});