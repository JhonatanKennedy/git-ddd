import { HomeTemplate, HomeTemplateProps } from "./template";

export const Home = () => {
    const homeProps: HomeTemplateProps = {
        headerStatement: {
            title: "Explore repositórios no Github.",
            searchPlaceholder: "Digite aqui",
            searchLabel: "Pesquisar",
            searchValue: "",
            onSearch: () => null,
            onChangeSearchValue: () => null,
        },
        listStatement: {
            onClickCard: () => null,
        },
    };
    return (
        <div className="h-screen">
            <HomeTemplate {...homeProps} />
        </div>
    );
};
