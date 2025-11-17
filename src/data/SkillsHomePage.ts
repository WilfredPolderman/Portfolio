import type { Skill } from "@/models/Skill";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiDotnet } from "react-icons/si";

export const skills: Skill[] = [
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
    }
]