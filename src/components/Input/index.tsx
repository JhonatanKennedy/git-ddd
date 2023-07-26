import { InputHTMLAttributes } from "react";

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "className">;

export const Input = (props: InputProps) => {
    return (
        <input {...props} className="p-5 text-xl focus:outline-none w-full" />
    );
};
