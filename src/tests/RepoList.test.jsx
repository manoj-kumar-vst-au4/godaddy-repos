import { render, screen } from '@testing-library/react';
import RepoList from '../routes/RepoList';  
import { fetchRepos } from '../api';
import { vi } from 'vitest';
import { MemoryRouter } from "react-router-dom"; 

vi.mock('../api', () => ({
    fetchRepos: vi.fn(),
}));    

describe('RepoList', () => {

    it('should render the list of repositories', async () => {
        const repos = [
            { id: 1, name: 'repo1' },
            { id: 2, name: 'repo2' },
        ];
        fetchRepos.mockResolvedValue(repos);

        render(<MemoryRouter> 
            <RepoList />
        </MemoryRouter>);

        const repoItems = await screen.findAllByRole('listitem');
        expect(repoItems).toHaveLength(repos.length);
    });
})
