import type { Project } from "../types";

const ProjectCard = (project : Project) => {
    return (
        <>
            <div className="project-card bg-white-300/30 backdrop-blur-sm p-6 border rounded-lg border-gray-200 shadow-md 
               transition-all duration-300 ease-in-out
               hover:border-purple-300 hover:shadow-lg hover:shadow-purple-300">
                <div className="project-content">
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-description max-w-md">{project.description}</p>
                    <div className="project-links">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link hover:pointer"
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>        
        </>
    );
}

export default ProjectCard;