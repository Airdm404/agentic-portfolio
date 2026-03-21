
type CardProps = {
    title: string
    items: string[]
}

export default function Card({title, items}: CardProps) {
    return (

        <article className="rounded border border-zinc-800 bg-zinc-900/70 p-5">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
                {title}
            </h3>

            <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                <span
                    key={item}
                    className="rounded border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 font-mono text-xs text-emerald-300"
                >
                    {item}
                </span>
                ))}
            </div>
        </article>
    )

}