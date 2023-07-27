import { MdContentCopy } from "react-icons/md";
export type RepoInfoStatementProps = {
    name: string;
    starsLabel: string;
    forksLabel: string;
    issuesLabel: string;
    watchersLabel: string;
    subscribersLabel: string;
    stars: number;
    issues: number;
    forks: number;
    watchers: number;
    subscribers: number;
    cloneURL: string;
    cloneLabel: string;
    sshLabel: string;
    sshURL: string;
    onClickCopy: (url: string) => void;
    loadingRepo: boolean;
};

export const RepoInfoStatement = (props: RepoInfoStatementProps) => {
    return (
        <div className="w-full bg-primary py-10 px-16 flex flex-col gap-12">
            <h3 className="text-4xl text-title font-bold">{props.name}</h3>
            <div className="grid grid-cols-3 gap-12 w-5/6">
                <div>
                    <h3 className="text-4xl text-title font-bold">
                        {props.stars}
                    </h3>
                    <span className="text-xl text-card-subtitle">
                        {props.starsLabel}
                    </span>
                </div>
                <div>
                    <h3 className="text-4xl text-title font-bold">
                        {props.forks}
                    </h3>
                    <span className="text-xl text-card-subtitle">
                        {props.forksLabel}
                    </span>
                </div>
                <div>
                    <h3 className="text-4xl text-title font-bold">
                        {props.issues}
                    </h3>
                    <span className="text-xl text-card-subtitle">
                        {props.issuesLabel}
                    </span>
                </div>
                <div>
                    <h3 className="text-4xl text-title font-bold">
                        {props.watchers}
                    </h3>
                    <span className="text-xl text-card-subtitle">
                        {props.watchersLabel}
                    </span>
                </div>
                <div>
                    <h3 className="text-4xl text-title font-bold">
                        {props.subscribers}
                    </h3>
                    <span className="text-xl text-card-subtitle">
                        {props.subscribersLabel}
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-card-title font-bold">
                    {props.sshLabel}
                </span>
                <div className="border-card-title/20 border rounded-md p-2 px-3 bg-card-subtitle/20 text-card-title">
                    <span className="flex items-center gap-4">
                        {props.sshURL}
                        <button onClick={() => props.onClickCopy(props.sshURL)}>
                            <MdContentCopy />
                        </button>
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-card-title font-bold">
                    {props.cloneLabel}
                </span>
                <div className="border-card-title/20 border rounded-md p-2 px-3 bg-card-subtitle/20 text-card-title">
                    <span className="flex items-center gap-4">
                        {props.cloneURL}
                        <button
                            onClick={() => props.onClickCopy(props.cloneURL)}
                        >
                            <MdContentCopy />
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
};
