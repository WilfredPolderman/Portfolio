import type { IconBaseProps } from "react-icons";

interface SkillBubbleProps {
    name: string;
    Icon: React.ComponentType<IconBaseProps>;
}

export const SkillBubble = ({ name, Icon }: SkillBubbleProps) => {
    return (
        <div className="flex flex-col items-center">

            <div
                className="
                    w-28 h-28 rounded-full flex items-center justify-center
                    bg-card text-card-foreground
                    shadow-md hover:shadow-xl hover:scale-105
                    transition-all duration-300
                    border border-border
                "
            >
                <Icon className="text-4xl" />
            </div>

            <p className="mt-3 font-medium text-foreground">{name}</p>
        </div>
    );
};

