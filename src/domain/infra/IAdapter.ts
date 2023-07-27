import {
    GetRepositoriesByUserResponse,
    GetRepositoriesResponse,
    IRepository,
} from "../repository/types/IRepository";
import { GetUsersResponse, IUserByLogin } from "../user/types/IUser";

export interface IAdapter {
    getRepositoriesApi(path: string): Promise<GetRepositoriesResponse>;
    getRepositoriesByUserApi(
        path: string
    ): Promise<GetRepositoriesByUserResponse>;
    getRepositoryByUserApi(path: string): Promise<IRepository>;
    getUsersApi(path: string): Promise<GetUsersResponse>;
    getUserByLoginApi(path: string): Promise<IUserByLogin>;
}
