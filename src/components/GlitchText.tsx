"use client";

interface GlitchTextProps {
    text: string;
    className?: string;
}

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
    return (
        <span
            className={`relative inline-block hover:animate-pulse before:content-[attr(data-text)] before:absolute before:top-0 before:left-0.5 before:-z-10 before:opacity-0 before:text-red-500 after:content-[attr(data-text)] after:absolute after:top-0 after:-left-0.5 after:-z-10 after:opacity-0 after:text-blue-500 hover:before:animate-glitch-1 hover:after:animate-glitch-2 hover:before:opacity-100 hover:after:opacity-100 ${className}`}
            data-text={text}
        >
            {text}
        </span>
    );
};
