import type { Skill } from "@/models/Skill";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiDotnet, SiHtml5, SiCss3, SiJavascript, SiGit } from "react-icons/si";

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
    },
    {
        name: "CSS3",
        icon: SiCss3,
    },
    {
        name: "JavaScript",
        icon: SiJavascript,
    },
    {
        name: "Git",
        icon: SiGit,
    }
]