import React from "react";
import Style from "./button.module.scss";

interface Props {
    children?: React.ReactNode
    type?: "button" | "submit" | "reset" | undefined
    onClick?: () => void
}

export default function Button({ type, onClick, children }: Props) {
    return (
        <button 
            type={type}
            className={Style.button}
            onClick={onClick}
        >
            {children}
        </button>
    );
}