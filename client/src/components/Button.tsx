import { ButtonHTMLAttributes, ReactNode } from "react";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    onClick?: any
}

const Button = ({children, onClick, className, ...props}: Button) => {

    return (
        <>
        <button onClick={onClick} {...props} className={`px-4 py-2 rounded ${className}`}>{children}</button>
        </>
    )
}

export default Button;