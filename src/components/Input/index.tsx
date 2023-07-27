import { InputHTMLAttributes, useState } from "react";
import "./styles.css";

export type SearchType = {
    id: number;
    label: string;
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    selectedListValue: SearchType;
    selectList: SearchType[];
    onSelectList: (value: SearchType) => void;
};

export const Input = ({
    selectList,
    selectedListValue,
    onSelectList,
    ...props
}: InputProps) => {
    const [openSelect, setOpenSelect] = useState<boolean>(false);

    const triggerToggleSelect = () => setOpenSelect(!openSelect);

    const onSelectItem = (item: SearchType) => {
        onSelectList(item);
        setOpenSelect(false);
    };

    return (
        <div className="w-full relative flex bg-primary">
            <div className="flex items-center justify-center p-4">
                <span
                    className="font-bold text-xl text-card-title cursor-pointer"
                    onClick={triggerToggleSelect}
                >
                    {selectedListValue.label}
                </span>
            </div>
            <input
                {...props}
                className="input-styles"
                onFocus={() => setOpenSelect(false)}
            />
            {openSelect && (
                <div className="select-container bg-primary">
                    {selectList.map((item) => (
                        <span
                            key={`input-list-${item.id}`}
                            onClick={() => onSelectItem(item)}
                            className="px-4 py-1 font-bold text-xl text-card-title cursor-pointer hover:bg-card-subtitle/50"
                        >
                            {item.label}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};
