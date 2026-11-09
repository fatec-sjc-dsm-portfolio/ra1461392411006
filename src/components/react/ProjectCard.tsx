import { GlassEffect } from "../liquid-glass";
import type { Project } from "../../data/projects/types";

interface ProjectCardProps extends Project {
    onOpen: (trigger: HTMLButtonElement) => void;
}

export default function ProjectCard({ title, description, tags, details, image, semester, isLogo, onOpen }: ProjectCardProps) {
    const remainingTechnologies =
        details.technologies.reduce((count, group) => count + group.items.length, 0) - tags.length;

    return (
        <GlassEffect className="rounded-2xl w-full">
            <button
                type="button"
                onClick={(event) => onOpen(event.currentTarget)}
                aria-haspopup="dialog"
                aria-label={`Ver detalhes do projeto ${title}`}
                className="group block w-full text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
            >
                {/* Image */}
                <div className={`aspect-video flex items-center justify-center overflow-hidden rounded-t-2xl relative ${isLogo ? 'bg-white/90' : 'bg-black/20'}`}>
                    {image ? (
                        <img src={image} alt={title} className={`transition-transform duration-500 group-hover:scale-105 ${isLogo ? 'w-3/4 h-3/4 object-contain' : 'w-full h-full object-cover'}`} />
                    ) : (
                        <div className="text-muted-foreground text-sm flex flex-col items-center gap-2">
                            <svg className="w-10 h-10 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Preview do projeto</span>
                        </div>
                    )}
                    {semester && (
                        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 text-xs font-mono font-medium rounded-md bg-black/60 border border-white/10 text-primary backdrop-blur-sm">
                            {semester}
                        </span>
                    )}
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {title}
                        </h3>
                        <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4h4m8 0h4v4M4 16v4h4m8 0h4v-4" />
                        </svg>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2.5 py-1 text-xs font-mono bg-black/20 border border-white/10 rounded-md text-muted-foreground"
                            >
                                {tag}
                            </span>
                        ))}
                        {remainingTechnologies > 0 && (
                            <span className="px-2.5 py-1 text-xs font-mono bg-primary/10 border border-primary/20 rounded-md text-primary">
                                +{remainingTechnologies} tecnologias
                            </span>
                        )}
                    </div>
                </div>
            </button>
        </GlassEffect>
    );
}
