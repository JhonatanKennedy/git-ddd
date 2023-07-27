import { useEffect, useState } from "react";
import { DetailsRepoTemplate, DetailsRepoTemplateProps } from "./template";
import { MainRepository } from "../../domain/repository/main";
import { MainUser } from "../../domain/user/main";
import { useParams } from "react-router-dom";

export const DetailsRepo = () => {
    const [loadingProfile, setLoadingProfile] = useState<boolean>(false);
    const [loadingRepo, setLoadingRepo] = useState<boolean>(false);
    const [repositories] = useState(new MainRepository());
    const [user] = useState(new MainUser());
    const { username, reponame } = useParams();

    useEffect(() => {
        const handleLoadRepositories = async () => {
            setLoadingRepo(true);
            await repositories.getRepositoryByUser(
                username ?? "",
                reponame ?? ""
            );
            setLoadingRepo(false);
        };

        const handleLoadUser = async () => {
            setLoadingProfile(true);
            await user.getUserByLogin(username ?? "");
            setLoadingProfile(false);
        };
        handleLoadUser();
        handleLoadRepositories();
    }, [repositories, username, reponame, user]);

    const propDetailsRepo: DetailsRepoTemplateProps = {
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
        repoInfoStatement: {
            name: repositories.Repo.name,
            starsLabel: "Stars",
            forksLabel: "Forks",
            issuesLabel: "Issues abertas",
            subscribersLabel: "Subscribers",
            watchersLabel: "Watchers",
            forks: repositories.Repo.forks,
            issues: repositories.Repo.open_issues_count,
            stars: repositories.Repo.stargazers_count,
            watchers: repositories.Repo.watchers_count,
            subscribers: repositories.Repo.subscribers_count,
            cloneLabel: "Clone:",
            cloneURL: repositories.Repo.clone_url,
            sshLabel: "SSH:",
            sshURL: repositories.Repo.ssh_url,
            onClickCopy: () => null,
            loadingRepo,
        },
    };

    return (
        <div className="flex justify-center">
            <DetailsRepoTemplate {...propDetailsRepo} />
        </div>
    );
};
