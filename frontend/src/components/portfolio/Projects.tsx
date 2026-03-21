import ProjectCard from "./ProjectCard"


export default function Projects() {
    return (
        <section className="flex flex-col gap-8 border-t border-border-color pt-12">
            <div className="mb-2 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                rocket_launch
                </span>
                <h3 className="text-xl font-mono font-bold tracking-tight">
                Projects
                </h3>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <ProjectCard
                    title="NEURAL_NEXUS"
                    description="Autonomous data orchestration layer for real-time edge computing nodes with zero-latency protocols."
                    technologies={["Rust_OS", "gRPC"]}
                    icon="deployed_code"
                    ctaLabel="VIEW_CODE"
                    href="#"
                />
                <ProjectCard
                    title="NEURAL_NEXUS"
                    description="Autonomous data orchestration layer for real-time edge computing nodes with zero-latency protocols. Autonomous data orchestration layer for real-time edge computing nodes with zero-latency protocols."
                    technologies={["Rust_OS", "gRPC"]}
                    icon="deployed_code"
                    ctaLabel="VIEW_CODE"
                    href="#"
                />
                <ProjectCard
                    title="NEURAL_NEXUS"
                    description="Autonomous data orchestration layer for real-time edge computing nodes with zero-latency protocols."
                    technologies={["Rust_OS", "gRPC"]}
                    icon="deployed_code"
                    ctaLabel="VIEW_CODE"
                    href="#"
                />
                <ProjectCard
                    title="NEURAL_NEXUS"
                    description="Autonomous data orchestration layer for real-time edge computing nodes with zero-latency protocols."
                    technologies={["Rust_OS", "gRPC"]}
                    icon="deployed_code"
                    ctaLabel="VIEW_CODE"
                    href="#"
                />
            </div>
        </section>
    )
}