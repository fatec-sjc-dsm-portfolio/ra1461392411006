import type { ProjectDetails } from "./types";

export const gaiaDetails: ProjectDetails = {
    partner: "Tecsus",
    problem:
        "A Tecsus queria ampliar o monitoramento ambiental com estações meteorológicas de baixo custo. Para isso, precisava receber medições de vento, chuva, umidade, temperatura e pressão de forma contínua e transformá-las em informações úteis para análise e prevenção de desastres naturais.",
    solution:
        "O Gaia integra a coleta e o processamento dos dados das estações a uma plataforma web com dashboards e relatórios. O portal também apresenta o significado dos indicadores e os conceitos por trás das medições, apoiando o uso educacional dos dados.",
    participation:
        "Atuei como Product Owner, organizando as necessidades da Tecsus em prioridades para o produto e acompanhando as entregas com a equipe. A experiência dos semestres anteriores me ajudou a equilibrar o valor para o cliente, o escopo e o tempo disponível em cada sprint.",
    technologies: [
        { category: "Coleta e processamento", items: ["MQTT", "HiveMQ", "Node.js", "NestJS", "Bull"] },
        { category: "Dados", items: ["MongoDB", "PostgreSQL", "Redis", "Prisma"] },
        { category: "Interface", items: ["Remix", "Astro", "Tailwind CSS"] },
        { category: "Infraestrutura", items: ["Docker", "Terraform"] },
    ],
    contributions: [
        "Estruturei e priorizei o backlog a partir do desafio de monitoramento apresentado pela Tecsus.",
        "Mantive o alinhamento entre a empresa parceira e o time durante o planejamento e a revisão das sprints.",
        "Acompanhei a evolução das funcionalidades de coleta, visualização e conteúdo educacional para validar as entregas frente aos objetivos do projeto.",
    ],
    hardSkills: [
        "Escrita e priorização de histórias de usuário para um produto com coleta de dados, dashboards e relatórios.",
        "Compreensão do fluxo de dados meteorológicos, da comunicação por MQTT e da separação entre dados brutos e processados.",
        "Definição de critérios de aceite e acompanhamento das entregas em ciclos de sprint.",
    ],
    softSkills: [
        {
            title: "Comunicação com o cliente",
            description: "Traduzi as necessidades da Tecsus em objetivos compreensíveis para a equipe e levei as dúvidas técnicas de volta para discussão com a empresa.",
        },
        {
            title: "Priorização",
            description: "Avaliei o valor das funcionalidades e a capacidade de entrega do time para organizar o trabalho de cada sprint.",
        },
        {
            title: "Visão de produto",
            description: "Considerei tanto a utilidade dos dados meteorológicos para análise quanto a clareza do conteúdo educacional para quem usa o portal.",
        },
    ],
};
