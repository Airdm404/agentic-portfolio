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
                    className="transition hover:text-emerald-400"
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
                    className="transition hover:text-emerald-400"
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
                    className="transition hover:text-emerald-400"
                >
                    <FaGithub className="text-lg" />
                </a>
                </li>

                <li>
                <a
                    href="mailto:edem.ahorluk@gmail.com"
                    aria-label="Email"
                    className="transition hover:text-emerald-400"
                >
                    <FaEnvelope className="text-lg" />
                </a>
                </li>
            </ul>

        </section>
    )

}