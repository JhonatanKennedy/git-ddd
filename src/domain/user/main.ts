import { UserRepository } from "./repository/user/user";
import { FormattedUserType, UserServices } from "./services/userServices";
import { IUserByLogin } from "./types/IUser";

export class MainUser {
    constructor(private readonly httpClient = new UserRepository()) {}
    private users: FormattedUserType[] = [];
    private user: IUserByLogin = {} as IUserByLogin;

    get List() {
        return this.users;
    }

    get User() {
        return this.user;
    }

    async listUsers(name: string) {
        const response = await this.httpClient.getUsers(name);
        if (response) {
            const service = new UserServices();
            this.users = service.formatToList(response);
        }
    }

    async getUserByLogin(name: string) {
        const response = await this.httpClient.getUserByLogin(name);
        if (response) {
            this.user = response;
        }
    }
}
