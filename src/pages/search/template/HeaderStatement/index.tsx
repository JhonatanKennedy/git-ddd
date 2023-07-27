import { ChangeEvent, KeyboardEvent } from "react";
import { Button } from "../../../../components/Buttom";
import { Input, SearchType } from "../../../../components/Input";

export type HeaderStatementProps = {
    title: string;
    searchLabel: string;
    searchPlaceholder: string;
    searchValue: string;
    onChangeSearchValue: (e: ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
    selectList: SearchType[];
    selectedListValue: SearchType;
    onSelectList: (value: SearchType) => void;
};

export const HeaderStatement = (props: HeaderStatementProps) => {
    const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.onSearch();
        }
    };

    return (
        <div className="flex flex-col gap-10 w-1/2">
            <h1 className="text-5xl font-bold w-3/5 text-title">
                {props.title}
            </h1>
            <div className="flex">
                <Input
                    onSelectList={props.onSelectList}
                    selectedListValue={props.selectedListValue}
                    selectList={props.selectList}
                    placeholder={props.searchPlaceholder}
                    value={props.searchValue}
                    onChange={props.onChangeSearchValue}
                    onKeyDown={handleEnter}
                />
                <Button onClick={props.onSearch}>{props.searchLabel}</Button>
            </div>
        </div>
    );
};
