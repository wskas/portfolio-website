import ProjectCard from "./ProjectCard";
import type { Project } from "../types";
import {projects} from "../constants/projects";

const Projects = () => {
    return (
        <section id="projects" className="projects-section py-15 md:py-25 flex flex-col justify-center items-center">
            <h2 className="section-title font-bold text-6xl mb-15">Projects</h2>
            <div className="projects-grid grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* make a taglist for filtering projects */}
                {projects.map((projects: Project) => (
                    <ProjectCard key={projects.id} {...projects} />
                ))}
            </div>
        </section>
    );
}

export default Projects;