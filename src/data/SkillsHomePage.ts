import type { Skill } from "@/models/Skill";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiDotnet } from "react-icons/si";

export const skills: Skill[] = [
    {
        name: "C# (.NET)",
        icon: SiDotnet,
        color: "#512BD4",
    },
    {
        name: "React",
        icon: FaReact,
        color: "#61DAFB",
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
    }
]