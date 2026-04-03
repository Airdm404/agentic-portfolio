import Socials from "./Socials"
import type { ProfileResponse } from "../../types/profile"

type HeroProps = {
    basics: ProfileResponse['basics'];
    socials: ProfileResponse['socials'];
}


export default function Hero({ basics, socials }: HeroProps) {
    return (
        <section className="flex flex-col gap-6">
            <Socials socials={socials} />
            <div className="flex flex-col gap-6 mt-4">
                <h1 className="text-4xl font-mono font-bold leading-tight text-zinc-50 lg:text-5xl">
                    <span className="inline-flex items-end gap-4">
                        <span className="text-primary">&gt;</span>
                        <span className="typing-effect inline-block">{basics.name}</span>
                    </span>
                </h1>

                <h2 className="text-2xl font-mono text-primary/80">
                    {basics.title}
                </h2>

                <p className="mt-4 max-w-2xl font-display text-lg leading-relaxed text-zinc-300">
                    {basics.summary}
                </p>

                <div className="mt-6 flex items-center gap-8">

                { basics.resumeUrl ? (
                <a 
                    href={basics.resumeUrl}
                    className="group flex items-center gap-2 rounded border border-primary bg-primary/10 px-6 py-3 font-mono text-sm text-primary transition-all duration-300 hover:bg-primary/20 hover:shadow-neon"
                >    
                    <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                    terminal
                    </span>
                    View Resume.pdf
                </a>
                ) : null }

                <div className="flex items-center gap-2 font-mono text-sm text-muted animate-pulse-fast">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    Chat with my AI -&gt;
                </div>
                </div>
            </div>

        </section>


    )

}