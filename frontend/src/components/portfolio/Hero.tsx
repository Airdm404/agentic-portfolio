import Socials from "./Socials"


export default function Hero() {
    return (
        <section className="flex flex-col gap-6">
            <Socials />
            <div className="flex flex-col gap-6 mt-4">
                <h1 className="text-4xl font-mono font-bold leading-tight text-zinc-50 lg:text-5xl">
                    <span className="text-primary relative top-2">&gt;</span>{" "}
                    <span className="typing-effect inline-block">Edem Ahorlu</span>
                </h1>

                <h2 className="text-2xl font-mono text-primary/80">
                Full-Stack AI Engineer
                </h2>

                <p className="mt-4 max-w-2xl font-display text-lg leading-relaxed text-zinc-300">
                I build full-stack products and AI-powered workflows that help teams move
                faster from idea to deployed software. Right now I’m focused on practical
                agentic systems, context-aware chat experiences, and startup-ready MVPs.
                </p>

                {/* Bottom Row */}
                <div className="mt-6 flex items-center gap-8">
                {/* Resume Button */}
                <button className="group flex items-center gap-2 rounded border border-primary bg-primary/10 px-6 py-3 font-mono text-sm text-primary transition-all duration-300 hover:bg-primary/20 hover:shadow-neon">
                    <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                    terminal
                    </span>
                    View Resume.pdf
                </button>

                {/* Chat indicator */}
                <div className="flex items-center gap-2 font-mono text-sm text-muted animate-pulse-fast">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    Chat with my AI -&gt;
                </div>
                </div>
            </div>


        </section>


    )

}