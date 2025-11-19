import { Card, CardHeader, CardTitle } from "./ui/card";

interface SkillCardProps {
    name: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const SkillCard = ({ name, Icon }: SkillCardProps) => {
    return (
        <Card className="p-4 w-full max-w-sm rounded-xl shadow-sm hover:shadow-md transition">
            <CardHeader className="flex items-center gap-4">
                <Icon className="h-10 w-10 text-blue-800"/>
                <CardTitle>{name}</CardTitle>
            </CardHeader>
        </Card>
    );
}