import { HighlightedProjects } from "@/data/Projects/HighlightedProjects"
import { ProjectCard } from "../project/ProjectCard"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"

export const ProjectHighlightSection = () => {
    return (
        <section className="bg-background py-15 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center text-foreground">
                    Highlighted Projects
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {HighlightedProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            imageUrl={project.imageUrl}
                            title={project.title}
                            description={project.description}
                            slug={project.slug}
                            tags={project.tags || []}
                        />
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <Button asChild>
                        <Link to="/projects">
                            See All Projects
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
