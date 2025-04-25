
export const ToolIcons = ({component, className}: {component: React.ElementType, className?: string}) => {
    const Component = component;
    return (
        <div>
            <Component className={className}/>
        </div>
    );
}