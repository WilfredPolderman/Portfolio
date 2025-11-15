import type { Skill } from "@/models/Skill";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiDotnet, SiHtml5 } from "react-icons/si";

export const skillsHomePage: Skill[] = [
    {
        name: "C# (.NET)",
        description: "A typed superset of JavaScript that compiles to plain JavaScript.",
        icon: SiDotnet,
    },
    {
        name: "React",
        description: "A JavaScript library for building user interfaces.",
        icon: FaReact,
    },
    {
        name: "TypeScript",
        description: "A typed superset of JavaScript that compiles to plain JavaScript.",
        icon: SiTypescript,
    },
    {
        name: "HTML5",
        description: "The standard markup language for creating web pages.",
        icon: SiHtml5,
    }
]