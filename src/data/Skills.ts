import type { Skill } from "@/models/Skill";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiDotnet, SiHtml5 } from "react-icons/si";

export const skillsHomePage: Skill[] = [
    {
        name: "C# (.NET)",
        icon: SiDotnet,
    },
    {
        name: "React",
        icon: FaReact,
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
    },
    {
        name: "HTML5",
        icon: SiHtml5,
    }
]