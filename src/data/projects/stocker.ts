import type { ProjectDetails } from "./types";

export const stockerDetails: ProjectDetails = {
    context: "Projeto interno da FATEC, sem empresa parceira.",
    problem:
        "O uso de planilhas ou registros manuais dificulta a atualização do estoque e a consulta confiável das quantidades disponíveis para empresas de pequeno e médio porte.",
    solution:
        "A equipe desenvolveu uma aplicação web para gerenciar produtos e acompanhar o inventário em um só lugar.",
    participation:
        "Atuei no frontend e no backend do sistema de gerenciamento de estoque, com foco na criação de interfaces intuitivas e na implementação das funcionalidades.",
    technologies: [
        { category: "Interface", items: ["React", "Next.js", "TypeScript", "NextUI", "Tailwind CSS", "Nuqs", "Zod"] },
        { category: "Backend e dados", items: ["Node.js", "Fastify", "Prisma", "Supabase"] },
        { category: "Design", items: ["Figma"] },
    ],
    contributions: [
        "Participei da prototipagem, estilização e implementação de componentes.",
        "Desenvolvi e testei a integração com o banco de dados.",
    ],
    hardSkills: [
        "React, Next.js e TypeScript para o frontend; NextUI e Tailwind CSS para a interface.",
        "Node.js e Fastify para o backend; Prisma e Supabase para persistência de dados.",
        "Zod para validação e NUQS para gerenciamento de estado.",
    ],
    softSkills: [
        {
            title: "Colaboração em equipe",
            description: "Assumi mais tarefas de forma autônoma, esclareci dúvidas com os colegas e sugeri melhorias para o sistema.",
        },
        {
            title: "Gestão de tempo",
            description: "Organizei minhas entregas para cumprir os prazos e testei as funcionalidades antes de concluir as tarefas.",
        },
        {
            title: "Adaptabilidade",
            description: "Aprendi a trabalhar com tecnologias novas para mim, ampliando a experiência além das ferramentas que já conhecia.",
        },
    ],
};
