import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

interface ProjectCardProps {
    title: string;
    imageUrl: string;
    description: string;
    slug: string;
    tags: string[];
}

/*TODO:
- Not sure yet: Voorzie carousel van techstack iconen onder de titel
- Not sure yet: Voorzie een carousel voor meerdere afbeeldingen per project
*/
export function ProjectCard({ title, imageUrl, description, slug, tags }: ProjectCardProps) {
    return (
        <Card className="shadow-md hover:shadow-lg transition-shadow dark:shadow-none dark:hover:shadow-xl">
            <CardHeader className="text-center">
                <img src={imageUrl} alt={title} className="mx-auto mb-2 rounded-md" />

                <CardTitle className="text-xl">{title}</CardTitle>

                {tags && (
                    <div className="flex justify-center gap-2 mt-2 flex-wrap">
                        {tags.map(tag => (
                            <span
                                key={tag}
                                className="
                                    px-3 py-1 text-sm rounded-full 
                                    bg-accent text-accent-foreground
                                    dark:bg-accent/40 dark:text-accent-foreground
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
                    <Button asChild>
                        <Link to={`/projects/${slug}`}>
                            More info
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}