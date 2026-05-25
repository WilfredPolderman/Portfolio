export interface Education {
    title: string;
    period: string;
}

export interface WorkExperience {
    title: string;
    company: string;
    period: string;
    description: string;
    skillsUsed?: string[];
}

export interface Certification {
    title: string;
    issuer: string;
    period: string;
    downloadLink?: string;
}

export interface Skill {
    name: string;
    proficiency: "Proficient" | "Intermediate" | "Learning";
}


export interface Statistic {
    label: string;
    value: string;
}
