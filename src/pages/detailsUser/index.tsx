import { useEffect, useState } from "react";
import { DetailsTemplate, DetailsTemplateProps } from "./template";
import { MainRepository } from "../../domain/repository/main";
import { useParams } from "react-router-dom";
import { MainUser } from "../../domain/user/main";

export const DetailsUser = () => {
    const [loadingList, setLoadingList] = useState<boolean>(false);
    const [loadingProfile, setLoadingProfile] = useState<boolean>(false);
    const [repositories] = useState(new MainRepository());
    const [user] = useState(new MainUser());
    const { username } = useParams();

    useEffect(() => {
        const handleLoadRepositories = async () => {
            setLoadingList(true);
            await repositories.listRepositoriesByUser(username ?? "");
            setLoadingList(false);
        };

        const handleLoadUser = async () => {
            setLoadingProfile(true);
            await user.getUserByLogin(username ?? "");
            setLoadingProfile(false);
        };
        handleLoadUser();
        handleLoadRepositories();
    }, [repositories, username, user]);

    const detailsProps: DetailsTemplateProps = {
        resumeComponent: {
            photoURL: user.User.avatar_url,
            name: user.User.login,
            followingLabel: "Following",
            followersLabel: "Followers",
            repositoriesLabel: "Repositorios públicos",
            repoDescription: user.User.bio ?? "",
            following: user.User.following,
            follower: user.User.followers,
            repositories: user.User.public_repos,
            loadingProfile,
        },
        listStatement: {
            items: repositories.ListByUser,
            loadingList,
        },
    };

    return (
        <div className="flex justify-center">
            <DetailsTemplate {...detailsProps} />
        </div>
    );
};
