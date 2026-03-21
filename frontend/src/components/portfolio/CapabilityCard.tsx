
type CapabilityCardProps = {
    title: string
    items: string[]
}

export default function CapabilityCard({title, items}: CapabilityCardProps) {
    return (

        <article className="flex flex-col gap-4 rounded border border-border-color bg-surface p-5 transition-colors hover:border-primary/50 glassy">
            <h4 className="text-sm font-mono text-muted uppercase tracking-wider">
                {title}
            </h4>

            <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                <span
                    key={item}
                    className="px-3 py-1 text-[13px] font-mono text-primary bg-primary/5 border border-primary/20 rounded hover:bg-primary/10 hover:border-primary hover:shadow-neon transition-all cursor-default"
                >
                    {item}
                </span>
                ))}
            </div>
        </article>
    )

}