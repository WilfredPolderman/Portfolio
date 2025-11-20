export interface Project {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
    fullDescription?: string;
    link: string;
    tags?: string[];
}