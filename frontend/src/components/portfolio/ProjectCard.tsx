type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
  icon: string
  ctaLabel: string
  href: string
}


export default function ProjectCard(
    {
        title,
        description,
        technologies,
        icon,
        ctaLabel,
        href
    }: ProjectCardProps) {
    return (

        <article className="glass-card group flex flex-col overflow-hidden rounded-lg border border-border-color transition-all duration-300 hover:border-primary/40">
            <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-start justify-between">
                <h4 className="font-mono text-lg font-bold text-zinc-50 transition-colors group-hover:text-primary">
                    {title}
                </h4>
                <span className="material-symbols-outlined text-sm text-primary">
                    {icon}
                </span>
                </div>

                <p className="font-display mb-6 text-xs text-zinc-400">
                {description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <span
                    key={tech}
                    className="rounded border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[9px] text-primary"
                    >
                    {tech}
                    </span>
                ))}
                </div>

                <div className="mt-auto flex items-center justify-between">
                <button className="flex items-center gap-2 font-mono text-[10px] text-muted transition-colors hover:text-primary">
                    <span className="material-symbols-outlined text-sm">
                    account_tree
                    </span>
                    {ctaLabel}
                </button>

                <a
                    href={href}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border-color transition-all hover:border-primary/50 hover:bg-primary/10"
                >
                    <span className="material-symbols-outlined text-sm">
                    arrow_outward
                    </span>
                </a>
                </div>
            </div>
        </article>

    )
}