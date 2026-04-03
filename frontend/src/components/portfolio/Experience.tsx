import ExperienceCard from "./ExperienceCard"
import type { ProfileResponse } from "../../types/profile"

type ExperienceProps = {
    experience: ProfileResponse["experience"]
}


export default function Experience({ experience }: ExperienceProps ) {
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

                {experience.map((item) => (
                    <ExperienceCard
                        key={item.id}
                        period={`${item.start} - ${item.end}`}
                        role={item.role}
                        company={item.company}
                        highlights={item.highlights}
                        stack={item.stack}
                        isCurrent={item.end === "present"}
                    />
                ))}
            </section>
        </section>
    )
}