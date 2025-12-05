export interface Project {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
    fullDescription?: string;
    link: string;
    tags?: string[];
    downloadLink?: string;
    showDownloadButton?: boolean;
    slug: string;
    achieved?: string[];
}