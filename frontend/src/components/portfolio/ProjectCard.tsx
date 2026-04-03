type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
  repoUrl?: string
  demoUrl?: string
}


export default function ProjectCard(
    {
        title,
        description,
        technologies,
        repoUrl,
        demoUrl,
    }: ProjectCardProps) {
    return (

        <article className="glass-card group flex flex-col overflow-hidden rounded-lg border border-border-color transition-all duration-300 hover:border-primary/40">
            <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-start justify-between">
                <h4 className="font-mono text-lg font-bold text-zinc-50 transition-colors group-hover:text-primary">
                    {title}
                </h4>
                <span className="material-symbols-outlined text-sm text-primary">
                    deployed_code
                </span>
                </div>

                <p className="font-display mb-6 text-sm text-zinc-400">
                    {description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <span
                    key={tech}
                    className="rounded border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[12px] text-primary hover:bg-primary/10 hover:border-primary hover:shadow-neon transition-all cursor-default"
                    >
                    {tech}
                    </span>
                ))}
                </div>

                <div className="mt-auto flex items-center justify-between">
                    {repoUrl ? (
                        <a 
                            href={repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 font-mono text-[10px] text-muted transition-colors hover:text-primary"
                        >
                            <span className="material-symbols-outlined text-sm">
                                account_tree
                            </span>
                            VIEW_CODE
                        </a>
                    ) : null }

                    {demoUrl ? (
                        <a
                            href={demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-border-color transition-all hover:border-primary/50 hover:bg-primary/10"
                        >
                        <span className="material-symbols-outlined text-sm">
                            arrow_outward
                        </span>
                        </a>
                    ) : null }
                </div>
            </div>
        </article>

    )
}