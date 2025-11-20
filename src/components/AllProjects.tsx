import { ProjectCard } from "./project/ProjectCard"
import { AllProjects } from "@/data/Projects/AllProjects"

export const AllProjectsComponent = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {AllProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        imageUrl={project.imageUrl}
                        description={project.description}
                        link={project.link}
                        tags={project.tags || []}
                    />
                ))}
            </div>
        </div>
    )
}