import ProjectCard from "./ProjectCard"
import type { ProfileResponse } from "../../types/profile"

type ProjectsProps = {
  projects: ProfileResponse["projects"]
}


export default function Projects({ projects }: ProjectsProps) {
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
                {projects.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.name}
                        description={project.description}
                        technologies={project.stack}
                        repoUrl={project.repoUrl}
                        demoUrl={project.demoUrl}
                    />
                ))}
            </div>
        </section>
    )
}