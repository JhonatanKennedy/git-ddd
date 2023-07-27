import { Card } from "../../../../components/Card";
import { FormattedRepositoryByUserType } from "../../../../domain/repository/services/repositoryService";

export type ListStatementProps = {
    items: FormattedRepositoryByUserType[];
    loadingList: boolean;
};

export const ListStatement = (props: ListStatementProps) => {
    return (
        <div className="flex flex-col gap-4">
            {props.loadingList
                ? "loading"
                : props.items.map((item, index) => (
                      <Card
                          key={`card-detail-${item.login}-${index}`}
                          description={item.description}
                          name={item.name}
                          onClickButtom={() => null}
                      />
                  ))}
        </div>
    );
};
