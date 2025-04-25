import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";
type CardHeaderTypes = {
    title:string,
    className?:string
}
export const CardHeader = ({
    title,
    className
}: CardHeaderTypes) => {
    return (
        <div className={twMerge("flex flex-col", className)}>
            <div className="inline-flex items-center gap-2">
                <StarIcon className="size-8"/>
                <h3 className="text-2xl font-semibold">{title}</h3>
            </div>
        </div>
    );
}