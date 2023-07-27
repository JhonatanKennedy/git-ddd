import {
    GetRepositoriesByUserResponse,
    GetRepositoriesResponse,
    IRepository,
} from "../repository/types/IRepository";
import { GetUsersResponse, IUserByLogin } from "../user/types/IUser";
import { IHttpClient } from "./IhttpClient";
import { FetchAdapter } from "./fetchAdapter";

export class HttpClient implements IHttpClient {
    constructor(private readonly adapter = new FetchAdapter()) {}

    async getRepositories(name: string): Promise<GetRepositoriesResponse> {
        const path = `/search/repositories?q=${name}`;
        const response = await this.adapter.getRepositoriesApi(path);
        return response;
    }

    async getUsers(name: string): Promise<GetUsersResponse> {
        const path = `/search/users?q=${name}`;
        const response = await this.adapter.getUsersApi(path);
        return response;
    }

    async getRepositoriesByUser(
        name: string
    ): Promise<GetRepositoriesByUserResponse> {
        const path = `/users/${name}/repos`;
        const response = await this.adapter.getRepositoriesByUserApi(path);
        return response;
    }

    async getUserByLogin(name: string): Promise<IUserByLogin> {
        const path = `/users/${name}`;
        const response = await this.adapter.getUserByLoginApi(path);
        return response;
    }

    async getRepositoryByUser(
        name: string,
        repoName: string
    ): Promise<IRepository> {
        const path = `/repos/${name}/${repoName}`;
        const response = await this.adapter.getRepositoryByUserApi(path);
        return response;
    }
}
