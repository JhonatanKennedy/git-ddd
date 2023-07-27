import {
    GetRepositoriesResponse,
    GetRepositoriesByUserResponse,
} from "../types/IRepository";

export type FormattedRepositoryType = {
    id: number;
    name: string;
    photoURL: string;
    description: string;
    login: string;
};

export type FormattedRepositoryByUserType = {
    id: number;
    name: string;
    fullName: string;
    description: string;
    login: string;
};

export class RepositoryServices {
    //This function should be on some helper folder
    formatDescription(string: string, size: number): string {
        if (string) {
            if (string.length > size) {
                return string.slice(0, size).concat("...");
            }
            return string;
        }
        return "";
    }

    formatToRepositoriesList(
        response: GetRepositoriesResponse
    ): FormattedRepositoryType[] {
        const formattedList = response.items.map((item) => {
            return {
                id: item.id,
                name: item.name,
                fullName: item.full_name,
                photoURL: item.owner.avatar_url,
                description: this.formatDescription(item.description, 60),
                login: item.owner.login,
            };
        });
        return formattedList;
    }

    formatToRepositoriesByUserList(
        response: GetRepositoriesByUserResponse
    ): FormattedRepositoryByUserType[] {
        const formattedList = response.map((repository) => {
            return {
                id: repository.id,
                name: repository.name,
                fullName: repository.full_name,
                description: this.formatDescription(repository.description, 60),
                login: repository.owner.login,
            };
        });
        return formattedList;
    }
}
