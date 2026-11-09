import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import type { Project } from "../../data/projects/types";

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
    returnFocusTo: HTMLButtonElement | null;
}

export default function ProjectModal({ project, onClose, returnFocusTo }: ProjectModalProps) {
    const titleId = useId();
    const dialogRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                event.preventDefault();
                onClose();
                return;
            }

            if (event.key !== "Tab" || !dialogRef.current) return;

            const focusable = Array.from(
                dialogRef.current.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
                ),
            );
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (!first || !last) return;

            if (!dialogRef.current.contains(document.activeElement)) {
                event.preventDefault();
                first.focus();
                return;
            }

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = previousOverflow;
            returnFocusTo?.focus();
        };
    }, [onClose, returnFocusTo]);

    const { details } = project;

    return createPortal(
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className="flex h-[min(85dvh,720px)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-border bg-background text-foreground shadow-2xl"
            >
                <div className="flex shrink-0 items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-7 sm:py-5">
                    <div>
                        <p className="mb-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                            Projeto acadêmico · {project.semester}
                        </p>
                        <h2 id={titleId} className="text-2xl font-bold sm:text-3xl">
                            {project.title}
                        </h2>
                    </div>
                    <button
                        ref={closeButtonRef}
                        type="button"
                        onClick={onClose}
                        aria-label={`Fechar detalhes do projeto ${project.title}`}
                        className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-2 focus-visible:outline-primary"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6 6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div tabIndex={0} className="min-h-0 flex-1 space-y-6 overflow-y-auto overscroll-contain px-5 py-6 sm:px-7 focus-visible:outline-2 focus-visible:outline-primary">
                    {details.partner && (
                        <p className="text-sm text-muted-foreground">
                            <span className="font-semibold text-foreground">Empresa parceira:</span> {details.partner}
                        </p>
                    )}
                    {details.context && (
                        <p className="text-sm text-muted-foreground">
                            <span className="font-semibold text-foreground">Contexto:</span> {details.context}
                        </p>
                    )}
                    <section>
                        <h3 className="mb-2 text-lg font-semibold">O problema</h3>
                        <p className="leading-relaxed text-muted-foreground">{details.problem}</p>
                    </section>
                    <section>
                        <h3 className="mb-2 text-lg font-semibold">A solução</h3>
                        <p className="leading-relaxed text-muted-foreground">{details.solution}</p>
                    </section>
                    <section>
                        <h3 className="mb-2 text-lg font-semibold">Minha participação</h3>
                        <p className="leading-relaxed text-muted-foreground">{details.participation}</p>
                        {details.contributions && details.contributions.length > 0 && (
                            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
                                {details.contributions.map((contribution) => (
                                    <li key={contribution}>{contribution}</li>
                                ))}
                            </ul>
                        )}
                    </section>
                    <section>
                        <h3 className="mb-2 text-lg font-semibold">Tecnologias utilizadas</h3>
                        <div className="space-y-4">
                            {details.technologies.map((group) => (
                                <div key={group.category}>
                                    <h4 className="mb-2 text-sm font-medium text-muted-foreground">{group.category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((technology) => (
                                            <span key={technology} className="rounded-md border border-border bg-accent px-2.5 py-1 font-mono text-xs text-foreground">
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    {details.hardSkills && details.hardSkills.length > 0 && (
                        <section>
                            <h3 className="mb-2 text-lg font-semibold">Habilidades técnicas desenvolvidas</h3>
                            <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
                                {details.hardSkills.map((skill) => <li key={skill}>{skill}</li>)}
                            </ul>
                        </section>
                    )}
                    {details.softSkills && details.softSkills.length > 0 && (
                        <section>
                            <h3 className="mb-2 text-lg font-semibold">Habilidades pessoais exercitadas</h3>
                            <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground">
                                {details.softSkills.map((skill) => (
                                    <li key={skill.title}>
                                        <strong className="text-foreground">{skill.title}:</strong> {skill.description}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                    {details.documents && details.documents.length > 0 && (
                        <section>
                            <h3 className="mb-2 text-lg font-semibold">Documentação do projeto</h3>
                            <ul className="list-disc space-y-2 pl-5 leading-relaxed">
                                {details.documents.map((document) => (
                                    <li key={document.url}>
                                        <a
                                            href={document.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-primary"
                                        >
                                            {document.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        Ver repositório no GitHub
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17 17 7M17 7H7m10 0v10" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>,
        document.body,
    );
}
