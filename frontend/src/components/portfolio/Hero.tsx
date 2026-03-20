import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from "react-icons/fa6";


export default function Hero() {
    return (
        <section className="flex flex-col gap-6">

            {/* Social Media Links */}
            <ul className="flex items-center gap-5 text-zinc-400">
                <li>
                <a
                    href="https://x.com/ed3mah"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                    className="transition hover:text-primary"
                >
                    <FaXTwitter className="text-lg" />
                </a>
                </li>

                <li>
                <a
                    href="https://www.linkedin.com/in/edem-ahorlu"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="transition hover:text-primary"
                >
                    <FaLinkedin className="text-lg" />
                </a>
                </li>

                <li>
                <a
                    href="https://github.com/airdm404"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="transition hover:text-primary"
                >
                    <FaGithub className="text-lg" />
                </a>
                </li>

                <li>
                <a
                    href="mailto:edem.ahorluk@gmail.com"
                    aria-label="Email"
                    className="transition hover:text-primary"
                >
                    <FaEnvelope className="text-lg" />
                </a>
                </li>
            </ul>

            <div className="flex flex-col gap-6">
                <h1 className="text-4xl lg:text-5xl font-mono font-bold text-zinc-50 leading-tight">
                <span className="text-primary">&gt;</span>{" "}
                <span className="typing-effect inline-block">Edem Ahorlu</span>
                </h1>
                <h2 className="text-2xl font-mono text-primary/80">
                Full-Stack AI Engineer
                </h2>


                <p className="text-lg text-zinc-300 leading-relaxed font-display max-w-2xl mt-4">
                    I build full-stack products and AI-powered workflows that help teams move
                    faster from idea to deployed software. Right now I’m focused on practical
                    agentic systems, context-aware chat experiences, and startup-ready MVPs.
                </p>

                <div className="flex items-center gap-2 text-muted text-sm font-mono animate-pulse-fast">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                        Chat with my AI -&gt;
                </div>

            </div>


        </section>


    )

}