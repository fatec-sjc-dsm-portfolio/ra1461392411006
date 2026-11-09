import type { ProjectDetails } from "./types";

export const chronosDetails: ProjectDetails = {
    partner: "Necto Systems",
    problem:
        "O controle manual da jornada de trabalho dificulta o registro de ponto, o cálculo de horas e o acompanhamento de ausências e relatórios.",
    solution:
        "Em parceria com a Necto Systems, a equipe desenvolveu uma aplicação web para controle e gerenciamento de ponto eletrônico.",
    participation:
        "Atuei como Product Owner, definindo e priorizando funcionalidades, gerenciando o Product Backlog e mantendo a comunicação com a empresa parceira e a equipe de desenvolvimento.",
    technologies: [
        { category: "Interface", items: ["React", "Next.js", "TypeScript", "HeroUI", "Tailwind CSS", "Zod", "Nuqs"] },
        { category: "Backend e dados", items: ["Java", "Spring", "Neon"] },
        { category: "Design", items: ["Figma"] },
    ],
    contributions: [
        "Defini requisitos e organizei as histórias de usuário e tarefas das sprints.",
        "Acompanhei a implementação e validei as funcionalidades entregues.",
        "Alinhei prioridades e expectativas entre a Necto Systems e a equipe.",
    ],
    hardSkills: [
        "Jira para gestão do projeto; React, Next.js e TypeScript para desenvolvimento frontend.",
        "Java e Spring para backend; Neon para banco de dados.",
        "HeroUI e Tailwind CSS para a interface; Zod para validação e NUQS para gerenciamento de estado.",
    ],
    softSkills: [
        {
            title: "Liderança",
            description: "Na primeira sprint, diante de prioridades divergentes entre interface e backend, organizei com o Scrum Master reuniões curtas e um quadro de prioridades para alinhar o time. Isso ajudou a equipe a entregar os MVPs dentro dos prazos.",
        },
        {
            title: "Negociação",
            description: "Conversei com a empresa parceira sobre pedidos que agregavam pouco valor e propus ajustes nas funcionalidades, consultando a equipe para manter os prazos viáveis.",
        },
        {
            title: "Pensamento estratégico",
            description: "Distribuí histórias de usuário e tarefas entre as sprints para organizar o trabalho no prazo mais curto daquele semestre, sem sobrecarregar a equipe.",
        },
    ],
};
