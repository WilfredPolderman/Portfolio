export interface Education {
    title: string;
    period: string;
}

export interface WorkExperience {
    title: string;
    company: string;
    period: string;
    description: string;
}

export interface Certification {
    title: string;
    issuer: string;
    period: string;
    downloadLink?: string;
}
