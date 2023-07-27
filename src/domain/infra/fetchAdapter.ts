import {
    GetRepositoriesByUserResponse,
    GetRepositoriesResponse,
    IRepository,
} from "../repository/types/IRepository";
import { GetUsersResponse, IUserByLogin } from "../user/types/IUser";
import { IAdapter } from "./IAdapter";

export class FetchAdapter implements IAdapter {
    constructor(private readonly baseURL = "https://api.github.com") {}

    async getRepositoriesApi(path: string): Promise<GetRepositoriesResponse> {
        const response = await fetch(this.baseURL + path);
        return response.json();
    }

    async getRepositoriesByUserApi(
        path: string
    ): Promise<GetRepositoriesByUserResponse> {
        const response = await fetch(this.baseURL + path);
        return response.json();
    }

    async getUsersApi(path: string): Promise<GetUsersResponse> {
        const response = await fetch(this.baseURL + path);
        return response.json();
    }

    async getUserByLoginApi(path: string): Promise<IUserByLogin> {
        const response = await fetch(this.baseURL + path);
        return response.json();
    }
    async getRepositoryByUserApi(path: string): Promise<IRepository> {
        const response = await fetch(this.baseURL + path);
        return response.json();
    }
}
