import { HighlightedProjects } from "@/data/Projects/HighlightedProjects"
import { ProjectCard } from "../project/ProjectCard"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

export const ProjectHighlightSection = () => {
    return (
        <section className="bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">Highlighted Projects</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {HighlightedProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            imageUrl={project.imageUrl}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            tags={project.tags || []}
                        />
                    ))}
                </div>

                <div>
                    <Link to="/projects">
                        <Button className="mt-10 mx-auto block">See All Projects</Button>
                    </Link>
                </div>

            </div>
        </section>
    )
}