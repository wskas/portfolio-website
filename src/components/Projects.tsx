import ProjectCard from "./ProjectCard";
import type { Project } from "../types";
import {projects} from "../constants/projects";

const Projects = () => {
    return (
        <section id="projects" className="projects-section py-15 md:py-25 flex flex-col justify-center items-center">
            <h2 className="section-title font-bold text-6xl mb-15">Projects</h2>
            <div className="projects-grid flex justify-center gap-6">
                {/* make a taglist for filtering projects */}
                {projects.map((projects: Project) => (
                    <ProjectCard key={projects.id} {...projects} />
                ))}
            </div>
        </section>
    );
}

export default Projects;