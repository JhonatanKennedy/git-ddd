import { HttpClient } from "../../../infra/httpClient";
import {
    GetRepositoriesByUserResponse,
    GetRepositoriesResponse,
    IRepository,
} from "../../types/IRepository";

export class RepositoryRepository {
    constructor(private readonly httpClient = new HttpClient()) {}

    async getRepositories(name: string): Promise<GetRepositoriesResponse> {
        try {
            const response = await this.httpClient.getRepositories(name);
            return response;
        } catch (err) {
            throw Error("Error on get repositories on repository");
        }
    }
    async getRepositoriesByUser(
        name: string
    ): Promise<GetRepositoriesByUserResponse> {
        try {
            const response = await this.httpClient.getRepositoriesByUser(name);
            return response;
        } catch (err) {
            throw Error("Error on get repositories by user on repository");
        }
    }

    async getRepositoryByUser(
        name: string,
        nameRepo: string
    ): Promise<IRepository> {
        try {
            const response = await this.httpClient.getRepositoryByUser(
                name,
                nameRepo
            );
            return response;
        } catch (err) {
            throw Error("Error on get repository by user on repository");
        }
    }
}
