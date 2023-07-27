import { GetUsersResponse } from "../types/IUser";

export type FormattedUserType = {
    id: number;
    name: string;
    photoURL: string;
    description: string;
    login: string;
};

export class UserServices {
    formatToList(response: GetUsersResponse): FormattedUserType[] {
        const formattedList = response.items.map((item) => {
            return {
                id: item.id,
                name: item.login,
                photoURL: item.avatar_url,
                description: item.repos_url,
                login: item.login,
            };
        });
        return formattedList;
    }
}
