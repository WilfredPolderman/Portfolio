import type { Project } from "@/models/Project";
import { HighlightedProjects } from "./HighlightedProjects";

export const AllProjects: Project[] = [
    ...HighlightedProjects,
    {
        id: 4,
        title: "Personal Blog",
        imageUrl: "/images/projects/personal-blog.png",
        description: "A personal blog built with Gatsby and Markdown.",
        fullDescription: "This personal blog was created using Gatsby, a React-based static site generator. It features Markdown support for easy content creation and a clean, responsive design.",
        link: "/projects/personal-blog",
        tags: ["Gatsby", "React", "Markdown"],
        slug: "personal-blog"
    }
]