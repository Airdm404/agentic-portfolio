type ExperienceCardProps = {
    period: string
    role: string
    company: string
    highlights: string[]
    stack?: string[]
    isCurrent?: boolean
}


export default function ExperienceCard({
    period,
    role,
    company,
    highlights,
    stack,
    isCurrent = false
    }: ExperienceCardProps) {
        return (
            <div className={`relative pl-12 ${isCurrent ? "mb-16" : "mb-8"}`}>
                <div
                    className={
                    isCurrent
                        ? "absolute left-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background-dark bg-primary glow-node"
                        : "absolute left-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full border border-primary/50 bg-primary/30"
                    }
                />

                <div className="flex flex-col gap-2">
                    <span
                    className={
                        isCurrent
                        ? "font-mono text-xs uppercase tracking-widest text-primary/70"
                        : "font-mono text-xs uppercase tracking-widest text-muted"
                    }
                    >
                    {period}
                    </span>

                    <div className="group rounded border border-border-color bg-surface/40 p-6 transition-all hover:border-primary/30">
                    <h4 className="mb-1 font-mono text-xl font-bold text-zinc-50 group-hover:text-primary">
                        {role}
                    </h4>

                    <p className="mb-4 font-mono text-sm tracking-tight text-primary/60">
                        {company}
                    </p>

                    <ul className="mb-6 space-y-3">
                        {highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                            <span className="material-symbols-outlined mt-0.5 text-sm text-primary">
                            chevron_right
                            </span>
                            <p className="font-display text-sm leading-relaxed text-zinc-400">
                            {highlight}
                            </p>
                        </li>
                        ))}
                    </ul>

                    {stack && stack.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                        {stack.map((tech) => (
                            <span
                            key={tech}
                            className="rounded border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[12px] text-primary hover:bg-primary/10 hover:border-primary hover:shadow-neon transition-all cursor-default"
                            >
                            {tech}
                            </span>
                        ))}
                        </div>
                    ) : null}
                    </div>
                </div>
            </div>

        )
    }