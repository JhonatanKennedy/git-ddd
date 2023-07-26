import { Card } from "../../../../components/Card";

export type ListStatementProps = {
    onClickCard: () => void;
};

export const ListStatement = (props: ListStatementProps) => {
    return (
        <div className="w-1/2 flex flex-col gap-4">
            <Card
                name="teste"
                description="teste"
                onClickButtom={props.onClickCard}
            />
            <Card
                name="teste"
                description="teste"
                onClickButtom={props.onClickCard}
            />
            <Card
                name="teste"
                description="teste"
                onClickButtom={props.onClickCard}
            />
        </div>
    );
};
