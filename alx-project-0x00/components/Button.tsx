import React from "react";

interface ButtonProps {
    title: string;
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, className = "", onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 transition duration-200 ${className}`}
        >
            {title}
        </button>
    );
};

export default Button;
