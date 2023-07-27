export interface IUser {
    login: string;
    id: number;
    avatar_url: string;
    repos_url: string;
}

export type GetUsersResponse = {
    incomplete_results: boolean;
    total_count: number;
    items: IUser[];
};

export interface IUserByLogin {
    login: string;
    avatar_url: string;
    bio: string | null;
    followers: number;
    following: number;
    public_repos: number;
}
