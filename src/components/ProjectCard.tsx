import type { Project } from "../types";

const ProjectCard = (project : Project) => {
    return (
        <>
            <div className="project-card bg-white-300/30 backdrop-blur-sm p-6 border rounded-lg border-gray-200 shadow-md 
               transition-all duration-300 ease-in-out
               hover:border-purple-300 hover:shadow-lg hover:shadow-purple-300">
                <div className="project-content flex flex-col h-full">
                    <h3 className="project-title font-bold md:mb-5">{project.name}</h3>
                    <p className="project-description max-w-md mb-[10px] text-gray-600">{project.description}</p>
                    <div className="project-links mt-auto mr-auto">
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link hover:underline mr-4"
                            >
                                GitHub
                            </a>
                        )}
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link hover:underline mr-4"
                            >
                                Live
                            </a>
                        )}
                    </div>
                </div>
            </div>        
        </>
    );
}

export default ProjectCard;