import type { ProjectDetails } from "./types";

export const smartFarmingDetails: ProjectDetails = {
    context: "Projeto interno da FATEC, sem empresa parceira.",
    problem:
        "O acompanhamento da estufa dependia de arquivos CSV e da retirada de dados dos sensores para consulta. A análise das medições também exigia a criação manual de gráficos, dificultando o monitoramento remoto.",
    solution:
        "A equipe criou uma aplicação web para consultar e analisar os dados dos sensores da estufa inteligente desenvolvida por alunos de Manufatura Avançada da FATEC.",
    participation:
        "Participei do desenvolvimento da interface e de funcionalidades do backend, trabalhando na experiência de uso e no funcionamento da aplicação.",
    technologies: [
        { category: "Interface e visualização", items: ["HTML", "CSS", "JavaScript", "HTMX", "HyperScript", "Tailwind CSS", "ApexCharts"] },
        { category: "Backend e dados", items: ["Python", "Flask", "MySQL"] },
        { category: "Infraestrutura e design", items: ["Docker", "Figma"] },
    ],
    contributions: [
        "Prototipei e estilizei páginas e criei componentes visuais.",
        "Implementei lógica de manipulação de dados e funcionalidades do backend.",
        "Testei rotas e responsividade da aplicação.",
    ],
    hardSkills: [
        "Python e Flask para o backend; MySQL para manipulação de dados.",
        "JavaScript, HTMX e HyperScript para interatividade; Tailwind CSS para estilização.",
        "ApexCharts para visualização de dados, Figma para prototipagem e Docker para containerização.",
    ],
    softSkills: [
        {
            title: "Trabalho em equipe",
            description: "Aprendi a trabalhar com os colegas, dividir tarefas e apoiar quem encontrava dificuldades durante o desenvolvimento.",
        },
        {
            title: "Resolução de problemas",
            description: "Busquei soluções para desafios técnicos e lógicos e as discuti com o grupo antes de integrá-las ao projeto.",
        },
        {
            title: "Comunicação",
            description: "Melhorei a forma de expor dúvidas e trocar informações para receber ajuda e colaborar com mais clareza.",
        },
    ],
};
