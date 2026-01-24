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
        title: "Zuunig",
        displayImage: "/images/projects/zuunig.png",
        description: "A mobile Android app to track your expenses and help you save money.",
        fullDescription: "For a school project, I developed a mobile application for Android called Zuunig. I created this app because most budgeting apps are too complex and require too many steps from the user. I wanted to keep it simple, which is why I built this app.",
        link: "/projects/zuunig",
        tags: ["React-native", "TypeScript", "Expo", "Firebase" ],
        slug: "zuunig"
    }
];
