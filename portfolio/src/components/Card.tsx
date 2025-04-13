import {twMerge} from "tailwind-merge";
import { PropsWithChildren } from "react";

export const Card = ({
    className, 
    children
} : 
    PropsWithChildren<{ className? : string}>) => {
    return (
        <div 
            className={twMerge("rounded-3xl bg-black/10 border-2 border-black overflow-hidden relative", className)}>
            {children}
        </div>


    )
} 