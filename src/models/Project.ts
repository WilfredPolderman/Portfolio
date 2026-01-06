export interface Project {
    id: number;
    title: string;
    displayImage: string;
    images?: string[];
    description: string;
    fullDescription?: string;
    link: string;
    tags?: string[];
    downloadLink?: string;
    showDownloadButton?: boolean;
    githubLink?: string;
    slug: string;
    achieved?: string[];
}