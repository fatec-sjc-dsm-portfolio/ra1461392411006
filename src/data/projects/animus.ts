import type { ProjectDetails } from "./types";

export const animusDetails: ProjectDetails = {
    partner: "Xertica",
    problem:
        "Profissionais do Direito precisam localizar precedentes relevantes para fundamentar a análise de petições, mas as decisões estão distribuídas entre várias bases e tribunais. O volume de documentos torna a pesquisa manual demorada e dificulta comparar a relação de cada precedente com o caso.",
    solution:
        "O Animus é um aplicativo móvel integrado a serviços em nuvem que resume petições e apresenta precedentes relacionados. A análise reúne dados como tribunal, tema, tese e indicador de similaridade, acompanhados de uma explicação para apoiar a avaliação do usuário.",
    participation:
        "Atuei como Product Owner, transformando as necessidades da Xertica em funcionalidades priorizadas para o aplicativo. A experiência com os APIs anteriores ajudou a organizar o backlog e a acompanhar, junto da equipe, a entrega de uma solução que combina interface móvel e análise por inteligência artificial.",
    technologies: [
        { category: "Aplicativo móvel", items: ["Flutter", "Riverpod", "Firebase Authentication", "OneSignal", "Firebase Cloud Messaging"] },
        { category: "API e inteligência artificial", items: ["FastAPI", "SQLAlchemy", "Inngest", "Agno", "Google Gemini", "Qdrant"] },
        { category: "Dados e infraestrutura", items: ["PostgreSQL", "Google Cloud Storage", "Docker", "Google Cloud Run", "Google Artifact Registry", "Pulumi"] },
    ],
    contributions: [
        "Organizei e priorizei histórias de usuário para análise de petições, apresentação de precedentes e consulta aos resultados.",
        "Alinhei expectativas entre a Xertica e a equipe, considerando valor para o usuário e viabilidade das entregas.",
        "Acompanhei a validação dos fluxos do aplicativo e da forma como os resultados da análise são apresentados.",
    ],
    hardSkills: [
        "Definição de backlog e critérios de aceite para funcionalidades que combinam aplicativo móvel, API e inteligência artificial.",
        "Compreensão do fluxo entre petição, processamento em nuvem, busca semântica e apresentação dos precedentes ao usuário.",
        "Avaliação de resultados e requisitos de clareza para que a análise automatizada seja útil à pesquisa jurídica.",
    ],
    softSkills: [
        {
            title: "Comunicação interdisciplinar",
            description: "Conectei as necessidades do contexto jurídico às decisões de produto discutidas com uma equipe de desenvolvimento.",
        },
        {
            title: "Priorização e gestão de escopo",
            description: "Organizei funcionalidades em sprints, considerando dependências técnicas e o valor de cada entrega para o usuário.",
        },
        {
            title: "Pensamento crítico",
            description: "Dei atenção à forma de apresentar similaridade e justificativas dos precedentes, para que os resultados pudessem ser avaliados por quem usa o aplicativo.",
        },
    ],
};
