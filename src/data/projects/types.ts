export interface ProjectDetails {
    partner?: string;
    context?: string;
    problem: string;
    solution: string;
    participation: string;
    technologies: {
        category: string;
        items: string[];
    }[];
    contributions?: string[];
    hardSkills?: string[];
    softSkills?: {
        title: string;
        description: string;
    }[];
    documents?: {
        label: string;
        url: string;
    }[];
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    image?: string;
    semester?: string;
    isLogo?: boolean;
    details: ProjectDetails;
}
