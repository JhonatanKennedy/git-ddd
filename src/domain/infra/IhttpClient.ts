import {
    GetRepositoriesByUserResponse,
    GetRepositoriesResponse,
    IRepository,
} from "../repository/types/IRepository";
import { GetUsersResponse, IUserByLogin } from "../user/types/IUser";

export interface IHttpClient {
    getRepositories(name: string): Promise<GetRepositoriesResponse>;
    getRepositoriesByUser(name: string): Promise<GetRepositoriesByUserResponse>;
    getRepositoryByUser(name: string, repoName: string): Promise<IRepository>;
    getUsers(name: string): Promise<GetUsersResponse>;
    getUserByLogin(name: string): Promise<IUserByLogin>;
}
