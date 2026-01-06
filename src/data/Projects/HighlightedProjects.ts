import type { Project } from "../../models/Project";

export const HighlightedProjects: Project[] = [
    {
        id: 1,
        title: "Woonderwijs website",
        displayImage: "/images/Woonderwijs.png",
        description: "Developed a website from scratch based on the client's needs.",
        fullDescription: `For the summer of 2025 I wanted to do volunteer work, and I came across an organization 
                            called "Woonderwijs" that was looking for someone to build a new website for them in WordPress. 
                            I saw this as a great learning opportunity to improve my WordPress skills and most importantly, to learn 
                            how to translate a client's needs into a real, functional product.`,
        link: "https://www.woonzekerheid.be/",
        tags: ["WordPress", "Elementor", "Web Design"],
        slug: "woonderwijs"
    },
    {
        id: 2,
        title: "Portfolio site",
        displayImage: "/images/projects/portfolio-site.png",
        description: "It's what you are looking at right now ;)",
        link: "/projects/portfolio-site",
        tags: ["React", "TypeScript", "TailwindCSS", "shadcn-ui"],
        slug: "portfolio-site"
    },
    {
        id: 3,
        title: "Unity dino runner",
        displayImage: "/images/projects/unity-game.png",   
        description: "A dino runner game made in Unity with C#.",
        fullDescription: `As a school project, I created a 2D Dino Runner game using Unity and C#.
                          Feel free to play the game yourself by clicking the "Download" button below!`,
        link: "/projects/unity-dino-runner",
        downloadLink: "/downloads/Run-Dino-Run.zip",
        tags: ["Unity", "C#"],
        slug: "unity-dino-runner",
        showDownloadButton: true,
        githubLink: "https://github.com/it-graduaten-aj2526/aj2526-it-challenges-3-unity-WilfredPolderman/tree/main/EigenSpel"
    }
];
