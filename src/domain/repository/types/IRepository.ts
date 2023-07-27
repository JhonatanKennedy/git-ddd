export interface IRepository {
    id: number;
    name: string;
    full_name: string;
    description: string;
    forks: number;
    stargazers_count: number;
    subscribers_count: number;
    watchers_count: number;
    open_issues_count: number;
    clone_url: string;
    ssh_url: string;
    owner: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
    };
}

export type GetRepositoriesResponse = {
    incomplete_results: boolean;
    total_count: number;
    items: IRepository[];
};

export type GetRepositoriesByUserResponse = IRepository[];
