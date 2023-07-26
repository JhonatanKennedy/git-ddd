import { ChangeEvent } from "react";
import { Button } from "../../../../components/Buttom";
import { Input } from "../../../../components/Input";

export type HeaderStatementProps = {
    title: string;
    searchLabel: string;
    searchPlaceholder: string;
    searchValue: string;
    onChangeSearchValue: (e: ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
};

export const HeaderStatement = (props: HeaderStatementProps) => {
    return (
        <div className="flex flex-col gap-10 w-1/2">
            <h1 className="text-5xl font-bold w-3/5 text-title">
                {props.title}
            </h1>
            <div className="flex">
                <Input
                    placeholder={props.searchPlaceholder}
                    value={props.searchValue}
                    onChange={props.onChangeSearchValue}
                />
                <Button onClick={props.onSearch}>{props.searchLabel}</Button>
            </div>
        </div>
    );
};
