import ExperienceCard from "./ExperienceCard"


export default function Experience() {
    return (
        <section className="mb-24 flex flex-col gap-8 border-t border-border-color pt-12">
            <div className="mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">history</span>
                <h3 className="text-xl font-mono font-bold tracking-tight">
                CAREER_LOG
                </h3>
            </div>

            <section className="relative">
            <div className="timeline-line absolute top-0 bottom-0 left-4 w-px" />

            <ExperienceCard
                period="2022 - PRESENT"
                role="Senior Systems Architect"
                company="NEURAL_DYNAMICS_INC"
                highlights={["Architected a distributed processing engine that reduced latency by 42%_DELTA across clusters.", "Deployed automated redundancy protocols resulting in 99.999%_UPTIME."]}
                ctaLabel="ASK_AI: WORKSTACK_CONTEXT"
                isCurrent={true}
            />

            <ExperienceCard
                period="2022 - PRESENT"
                role="Senior Systems Architect"
                company="NEURAL_DYNAMICS_INC"
                highlights={["Architected a distributed processing engine that reduced latency by 42%_DELTA across clusters.", "Deployed automated redundancy protocols resulting in 99.999%_UPTIME."]}
                ctaLabel="ASK_AI: WORKSTACK_CONTEXT"
            />
             </section>
        </section>
    )
}