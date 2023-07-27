import { RepositoryRepository } from "./repository/repository/repository";
import {
    FormattedRepositoryByUserType,
    FormattedRepositoryType,
    RepositoryServices,
} from "./services/repositoryService";
import { IRepository } from "./types/IRepository";

export class MainRepository {
    constructor(private readonly repository = new RepositoryRepository()) {}
    private repositories: Array<FormattedRepositoryType> = [];
    private repositoriesByUser: Array<FormattedRepositoryByUserType> = [];
    private repo: IRepository = {} as IRepository;

    get List() {
        return this.repositories;
    }

    get ListByUser() {
        return this.repositoriesByUser;
    }

    get Repo() {
        return this.repo;
    }

    async listRepositories(name: string) {
        const response = await this.repository.getRepositories(name);
        if (response) {
            const service = new RepositoryServices();
            this.repositories = service.formatToRepositoriesList(response);
        }
    }

    async listRepositoriesByUser(name: string) {
        const response = await this.repository.getRepositoriesByUser(name);
        if (response) {
            const service = new RepositoryServices();
            this.repositoriesByUser =
                service.formatToRepositoriesByUserList(response);
        }
    }

    async getRepositoryByUser(name: string, reponame: string) {
        const response = await this.repository.getRepositoryByUser(
            name,
            reponame
        );
        if (response) {
            this.repo = response;
        }
    }
}
