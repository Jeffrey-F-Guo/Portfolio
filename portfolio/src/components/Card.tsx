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
            className={twMerge("rounded-2xl bg-white border border-black/5 overflow-hidden relative shadow-sm", className)}
            style={style}>
            {children}
        </div>
    )
} 
