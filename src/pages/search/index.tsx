import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeTemplate, HomeTemplateProps } from "./template";
import { MainRepository } from "../../domain/repository/main";
import { SearchType } from "../../components/Input";
import { MainUser } from "../../domain/user/main";
import { availableRoutes } from "../../routes/availableRoutes";
import { FormattedRepositoryByUserType } from "../../domain/repository/services/repositoryService";
import { IUser } from "../../domain/user/types/IUser";

enum SearchTypes {
    repository,
    user,
}

const listSearch = [
    { id: SearchTypes.repository, label: "Repo:" },
    { id: SearchTypes.user, label: "User:" },
];

export const Search = () => {
    const [repositories] = useState(new MainRepository());
    const [users] = useState(new MainUser());
    const [searchValue, setSearchValue] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [select, setSelect] = useState<SearchType>(listSearch[0]);

    const navigate = useNavigate();

    const triggerSearchRepositories = async () => {
        setLoading(true);
        await repositories.listRepositories(searchValue);
        setLoading(false);
    };

    const triggerSearchUsers = async () => {
        setLoading(true);
        await users.listUsers(searchValue);
        setLoading(false);
    };

    const handleSearch = () => {
        if (select.id === SearchTypes.repository) {
            triggerSearchRepositories();
            return;
        }
        triggerSearchUsers();
    };

    const handleSelectList = (item: SearchType) => {
        setSelect(item);
        setSearchValue("");
    };

    const handleDetails = (item: FormattedRepositoryByUserType | IUser) => {
        //TODO fix this TS
        if (select.id === SearchTypes.repository) {
            navigate(
                availableRoutes.detailsRepo
                    .replace(":reponame", item.name)
                    .replace(":username", item.login)
            );
            return;
        }

        navigate(availableRoutes.detailsUser.replace(":username", item.login));
    };

    const items =
        select.id === SearchTypes.repository ? repositories.List : users.List;

    const homeProps: HomeTemplateProps = {
        headerStatement: {
            title: "Explore repositórios e usuarios no Github.",
            searchPlaceholder: "Digite aqui",
            searchLabel: "Pesquisar",
            searchValue,
            onSearch: handleSearch,
            onChangeSearchValue: (e) => setSearchValue(e.target.value),
            onSelectList: handleSelectList,
            selectedListValue: select,
            selectList: listSearch,
        },
        listStatement: {
            onClickCard: handleDetails,
            items,
            loading,
        },
    };

    return (
        <div className="h-screen">
            <HomeTemplate {...homeProps} />
        </div>
    );
};
