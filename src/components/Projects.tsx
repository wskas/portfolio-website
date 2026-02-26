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
            <div className="mt-10">
                <a 
                    href="https://github.com/wskas" 
                    className="group inline-flex items-center"
                >
                    More Projects
                    <span 
                        className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                    >
                        →
                    </span>
                </a>
            </div>
        </section>
    );
}

export default Projects;