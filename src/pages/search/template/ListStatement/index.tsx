import {
    FormattedRepositoryByUserType,
    FormattedRepositoryType,
} from "../../../../domain/repository/services/repositoryService";
import { Card } from "../../../../components/Card";
import { FormattedUserType } from "../../../../domain/user/services/userServices";
import { IUser } from "../../../../domain/user/types/IUser";

export type ListStatementProps = {
    items: FormattedRepositoryType[] | FormattedUserType[];
    loading: boolean;
    onClickCard: (login: FormattedRepositoryByUserType | IUser) => void;
};

export const ListStatement = (props: ListStatementProps) => {
    //TODO fix loading
    return (
        <div className="w-1/2 flex flex-col gap-4">
            {props.loading
                ? "loading"
                : props.items.map((item) => (
                      <Card
                          key={item.id}
                          imgURL={item.photoURL}
                          name={item.name}
                          description={item.description}
                          onClickButtom={() => props.onClickCard(item)}
                      />
                  ))}
        </div>
    );
};
