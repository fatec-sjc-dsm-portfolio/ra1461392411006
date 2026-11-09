import { useState } from "react";
import ProjectsCarousel from "./ProjectsCarousel";
import PersonalProjectCard from "./PersonalProjectCard";
import type { Project } from "../../data/projects/types";

type Category = "academic" | "personal";

export default function ProjectsShowcase({
    projects,
    omniverseImage,
}: {
    projects: Project[];
    omniverseImage: string;
}) {
    const [category, setCategory] = useState<Category>("academic");
    const isAcademic = category === "academic";
    const nextCategory = isAcademic ? "projetos pessoais" : "projetos acadêmicos";
    const toggleCategory = () => setCategory(isAcademic ? "personal" : "academic");

    return (
        <>
            <div className="mb-16 text-center">
                <div className="flex items-center justify-center gap-3 sm:gap-5">
                    <button
                        type="button"
                        onClick={toggleCategory}
                        aria-label={`Mostrar ${nextCategory}`}
                        aria-controls="project-category-content"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <span aria-live="polite" className="min-w-[11rem] text-primary font-mono text-sm tracking-wider uppercase sm:min-w-[17rem]">
                        {isAcademic ? "Projetos Acadêmicos API" : "Projetos Pessoais"}
                    </span>
                    <button
                        type="button"
                        onClick={toggleCategory}
                        aria-label={`Mostrar ${nextCategory}`}
                        aria-controls="project-category-content"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                    Projetos em destaque<span className="text-primary">.</span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                    {isAcademic
                        ? "Projetos desenvolvidos em equipe ao longo da graduação na FATEC, do mais recente ao mais antigo"
                        : "Projetos pessoais desenvolvidos por iniciativa própria."}
                </p>
            </div>

            <div id="project-category-content" aria-label={isAcademic ? "Projetos acadêmicos" : "Projetos pessoais"}>
                {isAcademic ? (
                    <ProjectsCarousel projects={projects} />
                ) : (
                    <div className="mx-auto w-full max-w-sm">
                        <PersonalProjectCard
                            title="Omniverse TCG"
                            description="Jogo de cartas em desenvolvimento com universos, coleção de cartas e criação de decks."
                            image={omniverseImage}
                            imageAlt="Página inicial do Omniverse TCG com três cartas em destaque"
                            href="https://etherium-tcg.vercel.app/"
                            status="Em desenvolvimento"
                        />
                    </div>
                )}
            </div>
        </>
    );
}
