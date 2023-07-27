import { BsChevronRight } from "react-icons/bs";

export type CardProps = {
    imgURL?: string;
    name: string;
    description: string;
    onClickButtom: () => void;
};

export const Card = (props: CardProps) => {
    return (
        <div className="py-4 px-5 bg-primary flex justify-between items-center ">
            <div className="flex gap-4 items-center">
                {props.imgURL && (
                    <img
                        className="h-20 w-20 rounded-full object-cover"
                        alt="profile"
                        src={props.imgURL}
                    />
                )}
                <div>
                    <h4 className="text-2xl text-card-title font-bold">
                        {props.name}
                    </h4>
                    <span className="text-lg text-card-subtitle">
                        {props.description}
                    </span>
                </div>
            </div>
            <div>
                <button
                    className="h-12 w-12 flex justify-center items-center rounded-full hover:bg-card-subtitle/5"
                    onClick={props.onClickButtom}
                >
                    <BsChevronRight />
                </button>
            </div>
        </div>
    );
};
