export type ResumeProps = {
    photoURL: string;
    repoDescription: string;
    name: string;
    following: number;
    follower: number;
    repositories: number;
    followingLabel: string;
    followersLabel: string;
    repositoriesLabel: string;
    loadingProfile: boolean;
};

export const Resume = (props: ResumeProps) => {
    if (props.loadingProfile) {
        return <div>loading</div>;
    }

    return (
        <div className="w-2/3">
            <div className="flex flex-col gap-10">
                <div className="flex gap-8 items-center">
                    <img
                        className="h-28 w-28 rounded-full object-cover"
                        src={props.photoURL}
                        alt="profile"
                    />
                    <div>
                        <h3 className="text-4xl text-title font-bold">
                            {props.name}
                        </h3>
                        <span className="text-xl text-card-subtitle">
                            {props.repoDescription}
                        </span>
                    </div>
                </div>
                <div className="flex justify-between w-5/6">
                    <div>
                        <h3 className="text-4xl text-title font-bold">
                            {props.follower}
                        </h3>
                        <span className="text-xl text-card-subtitle">
                            {props.followersLabel}
                        </span>
                    </div>
                    <div>
                        <h3 className="text-4xl text-title font-bold">
                            {props.following}
                        </h3>
                        <span className="text-xl text-card-subtitle">
                            {props.followingLabel}
                        </span>
                    </div>
                    <div>
                        <h3 className="text-4xl text-title font-bold">
                            {props.repositories}
                        </h3>
                        <span className="text-xl text-card-subtitle">
                            {props.repositoriesLabel}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
