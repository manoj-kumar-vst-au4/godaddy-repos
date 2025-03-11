import { render, screen } from '@testing-library/react';
import RepoDetails from '../routes/RepoDetails';    
import { fetchRepoDetails } from '../api';
import { vi } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';
vi.mock('../api', () => ({
    fetchRepoDetails: vi.fn(),
}));        

describe('RepoDetails', () => {

    it('should render the repository details', async () => {
        const repo = {
            name: 'repo1',
            description: 'This is a sample repository',
            language: 'JavaScript',
            forks_count: 10,
        };
        fetchRepoDetails.mockResolvedValue(repo);

        render(<MemoryRouter><RepoDetails /></MemoryRouter>);

        const repoName = await screen.findByText(repo.name);
        const description = await screen.findByText(repo.description);
        const language = await screen.findByText(repo.language);
        const forks = await screen.findByText(repo.forks_count);    

        expect(repoName).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(language).toBeInTheDocument();
        expect(forks).toBeInTheDocument();
    });
})

