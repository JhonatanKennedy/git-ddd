import { Resume, ResumeProps } from "../../../components/Resume";
import { RepoInfoStatement, RepoInfoStatementProps } from "./RepoInfoStatement";

export type DetailsRepoTemplateProps = {
    resumeComponent: ResumeProps;
    repoInfoStatement: RepoInfoStatementProps;
};

export const DetailsRepoTemplate = (props: DetailsRepoTemplateProps) => {
    return (
        <div className="flex flex-col gap-20 w-2/3 mt-28 mb-28">
            <Resume {...props.resumeComponent} />
            <RepoInfoStatement {...props.repoInfoStatement} />
        </div>
    );
};
