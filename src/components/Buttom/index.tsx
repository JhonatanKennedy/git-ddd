import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
    return (
        <button className="bg-secondary text-primary text-lg py-5 px-16">
            {props.children}
        </button>
    );
};
