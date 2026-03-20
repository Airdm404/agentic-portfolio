export default function Hero() {
    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <p className="font-mono text-sm uppercase tracking-[0.24em] text-emerald-400">
                Applied AI / Product Engineering
                </p>

                <h1 className="max-w-3xl font-mono text-4xl font-bold leading-tight text-white lg:text-6xl">
                Edem Ahorlu
                </h1>

                <h2 className="text-xl font-medium text-zinc-300 lg:text-2xl">
                Edem Ahorlu
                </h2>
            </div>

            <p className="max-w-3xl text-base leading-8 text-zinc-400 lg:text-lg">
                Lores epsum dio
            </p>

            <p className="font-mono text-sm text-zinc-500">location</p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
                <button className="rounded border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 font-mono text-sm text-emerald-300 transition hover:border-emerald-300 hover:bg-emerald-400/15">
                Label
                </button>

                <p className="font-mono text-sm text-zinc-500">
                Recruiter chat is limited to 7 messages by design.
                </p>
            </div>
        </section>
    )

}