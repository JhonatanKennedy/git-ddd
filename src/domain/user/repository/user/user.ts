import { HttpClient } from "../../../infra/httpClient";

export class UserRepository {
    constructor(private readonly httpClient = new HttpClient()) {}

    async getUsers(name: string) {
        try {
            const response = await this.httpClient.getUsers(name);
            return response;
        } catch (err) {
            throw Error("Error on get users on repository");
        }
    }
    async getUserByLogin(name: string) {
        try {
            const response = await this.httpClient.getUserByLogin(name);
            return response;
        } catch (err) {
            throw Error("Error on get user by login on repository");
        }
    }
}
