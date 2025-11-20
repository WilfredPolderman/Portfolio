import type { Project } from "../../models/Project";

export const HighlightedProjects: Project[] = [
    {
        id: 1,
        title: "Woonderwijs website",
        imageUrl: "/images/Woonderwijs.png",
        description: "Developed a website from scratch based on the client's needs.",
        link: "/projects/woonderwijs",
        tags: ["Wordpress", "Elementor"],
        slug: "woonderwijs"
    },
    {
        id: 2,
        title: "Portfolio site",
        imageUrl: "/images/projects/portfolio-site.png",
        description: "It's what you are looking at right now ;)",
        link: "/projects/portfolio-site",
        tags: ["React", "TypeScript", "TailwindCSS", "shadcn-ui"],
        slug: "portfolio-site"
    },
    {
        id: 3,
        title: "Unity dino runner",
        imageUrl: "/images/projects/unity-game.png",   
        description: "A dino runner game made in Unity with C#.",
        link: "/projects/unity-dino-runner",
        downloadLink: "/downloads/Run-Dino-Run.zip",
        tags: ["Unity", "C#"],
        slug: "unity-dino-runner",
        showDownloadButton: true
    }
];
