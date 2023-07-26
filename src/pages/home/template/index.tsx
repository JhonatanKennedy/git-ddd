import { HeaderStatement, HeaderStatementProps } from "./HeaderStatement";
import { ListStatement, ListStatementProps } from "./ListStatement";

export type HomeTemplateProps = {
    headerStatement: HeaderStatementProps;
    listStatement: ListStatementProps;
};

export const HomeTemplate = (props: HomeTemplateProps) => {
    return (
        <div className="flex flex-col gap-32 items-center mt-32">
            <HeaderStatement {...props.headerStatement} />
            <ListStatement {...props.listStatement} />
        </div>
    );
};
