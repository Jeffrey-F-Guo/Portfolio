import {twMerge} from "tailwind-merge";

type CardProps = {
    className : string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}
export const Card = ({
    className, 
    children,
    style
} : CardProps) => {
    return (
        <div 
            className={twMerge("rounded-3xl bg-custom-gray-dark border-2 border-black overflow-hidden relative", className)}
            style={style}>
            {children}
        </div>


    )
} 