import { Resume, ResumeProps } from "../../../components/Resume";
import { ListStatement, ListStatementProps } from "./ListStatement";

export type DetailsTemplateProps = {
    resumeComponent: ResumeProps;
    listStatement: ListStatementProps;
};

export const DetailsTemplate = (props: DetailsTemplateProps) => {
    return (
        <div className="flex flex-col gap-20 w-2/3 mt-28">
            <Resume {...props.resumeComponent} />
            <ListStatement {...props.listStatement} />
        </div>
    );
};
