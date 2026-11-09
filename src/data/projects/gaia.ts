import type { ProjectDetails } from "./types";

export const gaiaDetails: ProjectDetails = {
    partner: "Tecsus",
    problem:
        "A Tecsus queria ampliar o monitoramento ambiental com estações meteorológicas de baixo custo. Para isso, precisava receber medições de vento, chuva, umidade, temperatura e pressão de forma contínua e transformá-las em informações úteis para análise e prevenção de desastres naturais.",
    solution:
        "O Gaia integra a coleta e o processamento dos dados das estações a uma plataforma web com dashboards e relatórios. O portal também apresenta o significado dos indicadores e os conceitos por trás das medições, apoiando o uso educacional dos dados.",
    participation:
        "Foi o semestre em que mais amadureci como Product Owner. Além de organizar as necessidades da Tecsus no backlog, construí com a equipe o processo de desenvolvimento que todos passaram a seguir, desde a definição dos requisitos até a revisão e a entrega. Apresentei o fluxo ao professor várias vezes, incorporei seu retorno e documentei cada etapa, sua finalidade e as razões das escolhas técnicas. Esse trabalho aprofundou minha prática de Scrum e corrigiu pontos da minha compreensão sobre as responsabilidades do PO.",
    technologies: [
        { category: "Coleta e processamento", items: ["MQTT", "HiveMQ", "Node.js", "NestJS", "Bull"] },
        { category: "Dados", items: ["MongoDB", "PostgreSQL", "Redis", "Prisma"] },
        { category: "Interface", items: ["Remix", "Astro", "Tailwind CSS"] },
        { category: "Infraestrutura", items: ["Docker", "Terraform"] },
    ],
    contributions: [
        "Redigi a ata de requisitos do Gaia, reunindo requisitos funcionais e não funcionais como base para o planejamento e a validação do produto.",
        "Estruturei a rastreabilidade entre requisitos, épicos, histórias de usuário, tarefas no Jira e alterações no GitHub, incluindo o vínculo com branches, commits e pull requests.",
        "Documentei a gestão do processo em quatro etapas: entendimento e priorização; planejamento; desenvolvimento e qualidade; integração e deploy.",
        "Defini esse fluxo com a equipe e o refinei em várias validações com o professor, explicando o objetivo de cada passo e como as tecnologias escolhidas se encaixavam no trabalho.",
        "Acompanhei a priorização e as entregas das sprints para manter o desenvolvimento alinhado ao valor esperado pela Tecsus.",
    ],
    hardSkills: [
        "Levantamento e formalização de requisitos funcionais e não funcionais em uma ata de requisitos.",
        "Definição de um fluxo de rastreabilidade que liga requisitos ao backlog, às tarefas no Jira e ao código versionado no GitHub.",
        "Organização do trabalho com histórias de usuário, critérios de aceite, Definition of Ready, Definition of Done, revisão de código e integração contínua.",
        "Análise das escolhas tecnológicas do Gaia junto à equipe e documentação de como elas apoiavam a coleta, o processamento e a visualização dos dados.",
    ],
    softSkills: [
        {
            title: "Liderança e facilitação",
            description: "Ajudei a equipe a adotar um processo comum, com etapas e responsabilidades claras para que todos soubessem como iniciar, desenvolver, revisar e concluir uma entrega.",
        },
        {
            title: "Escuta e melhoria contínua",
            description: "Revisitei o processo com o professor em várias ocasiões, acolhi as críticas e ajustei a documentação até chegar a um formato mais claro e útil para o time.",
        },
        {
            title: "Organização e visão sistêmica",
            description: "Passei a relacionar a necessidade do cliente, os requisitos, o planejamento das sprints e as mudanças no código, mantendo visível o motivo de cada tarefa.",
        },
        {
            title: "Maturidade no papel de PO",
            description: "A prática de priorizar valor, esclarecer requisitos e colaborar com a equipe reforçou meu conhecimento de Scrum e me ajudou a corrigir equívocos sobre o papel do Product Owner.",
        },
    ],
    documents: [
        {
            label: "Ata de requisitos",
            url: "https://github.com/CtrI-Alt-Del/gaia/blob/main/documentation/Ata%20de%20Requisitos%20Projeto%20Gaia.pdf",
        },
        {
            label: "Fluxo de rastreabilidade no desenvolvimento",
            url: "https://github.com/CtrI-Alt-Del/gaia/blob/main/documentation/Fluxo%20de%20Rastreabilidade%20no%20Desenvolvimento.pdf",
        },
        {
            label: "Gestão do processo",
            url: "https://github.com/CtrI-Alt-Del/gaia/blob/main/documentation/gestao-do-processo.md",
        },
    ],
};
