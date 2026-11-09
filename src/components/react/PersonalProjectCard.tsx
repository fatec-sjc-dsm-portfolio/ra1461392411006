import { GlassEffect } from "../liquid-glass";

interface PersonalProjectCardProps {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    href: string;
    status: string;
}

export default function PersonalProjectCard({
    title,
    description,
    image,
    imageAlt,
    href,
    status,
}: PersonalProjectCardProps) {
    return (
        <GlassEffect className="w-full rounded-2xl">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar ${title} (abre em nova aba)`}
                className="group block w-full cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
            >
                <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-t-2xl bg-[#0e0d14]">
                    <img
                        src={image}
                        alt={imageAlt}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-2.5 top-2.5 rounded-md border border-white/10 bg-black/70 px-2 py-0.5 font-mono text-xs font-medium text-primary backdrop-blur-sm">
                        {status}
                    </span>
                </div>
                <div className="p-5 sm:p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                            {title}
                        </h3>
                        <svg aria-hidden="true" className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17 17 7M8 7h9v9" />
                        </svg>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                        {description}
                    </p>
                    <span className="font-mono text-xs text-primary">Visitar projeto ↗</span>
                </div>
            </a>
        </GlassEffect>
    );
}
