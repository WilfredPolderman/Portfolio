import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

interface ProjectCardProps {
    title: string;
    displayImage: string;
    description: string;
    slug: string;
    tags: string[];
}

/*TODO:
- Not sure yet: Voorzie een carousel voor meerdere afbeeldingen per project
*/
export function ProjectCard({ title, displayImage, description, slug, tags }: ProjectCardProps) {
    return (
        <Card className="shadow-none hover:shadow-xl transition-shadow">
            <CardHeader className="text-center">
                <img src={displayImage} alt={title} className="mx-auto mb-2 rounded-md" />
                <CardTitle className="text-xl">{title}</CardTitle>

                {tags && (
                    <div className="flex justify-center gap-2 mt-2 flex-wrap">
                        {tags.map(tag => (
                            <span
                                key={tag}
                                className="
                                    px-3 py-1 text-sm rounded-full 
                                    bg-accent/40 text-accent-foreground
                                "
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </CardHeader>

            <CardContent>
                <p className="p-4 text-muted-foreground">{description}</p>

                <div className="flex justify-center mt-4">
                    <Button asChild variant="outline">
                        <Link to={`/projects/${slug}`}>
                            More info
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}