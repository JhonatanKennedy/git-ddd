import { ButtonHTMLAttributes } from "react";

export type ButtonProps = Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className"
>;

export const Button = (props: ButtonProps) => {
    return (
        <button
            {...props}
            className="bg-secondary text-primary text-lg py-5 px-16"
        >
            {props.children}
        </button>
    );
};
