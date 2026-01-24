import type { Project } from "@/models/Project";
import { HighlightedProjects } from "./HighlightedProjects";

export const AllProjects: Project[] = [
    ...HighlightedProjects,
    {
        id: 4,
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
    },
]