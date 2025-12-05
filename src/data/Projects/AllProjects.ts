import type { Project } from "@/models/Project";
import { HighlightedProjects } from "./HighlightedProjects";

export const AllProjects: Project[] = [
    ...HighlightedProjects,
    {
        id: 4,
        title: "Filler Project",
        imageUrl: "/images/projects/personal-blog.png",
        description: "This is some filler project data.",
        fullDescription: "This is filler data for testing purposes.",
        link: "/projects/personal-blog",
        tags: ["React"],
        slug: "filler-project"
    }
]