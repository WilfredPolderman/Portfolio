import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface ProjectCardProps {
    title: string;
    imageUrl: string;
    description: string;
    link: string;
}

/*TODO:
- Not sure yet: Voorzie carousel van techstack iconen onder de titel
- Not sure yet: Voorzie een carousel voor meerdere afbeeldingen per project
*/
export function ProjectCard({title, imageUrl, description, link}: ProjectCardProps) {
    return (
        <Card className="shadow-md hover:shadow-lg transition-shadow">

            <CardHeader className="text-center">
                <img src={imageUrl} alt={title} className="mx-auto mb-2" />
                <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>
                <p className="p-4">{description}</p>
                <Link to={link}>
                    <Button className="mx-auto block">More info</Button>
                </Link>
            </CardContent>
        </Card>
    )
}