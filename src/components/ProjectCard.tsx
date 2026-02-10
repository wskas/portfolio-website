import type { Project } from "../types";

const ProjectCard = (project : Project) => {
    return (
        <>
            {/* <div className='bg-white/30 text-neutral-300 backdrop-blur-[1px] p-10 border border-neutral-400/30 rounded-lg shadow-lg'>
                test
            </div>
            <div
                className="bg-white/30 backdrop-blur-[1px] border-neutral-400/30 p-10 rounded-lg shadow-lg text-center"
                >
                <h1 className="text-3xl font-semibold text-white">Glassmorphism Effect</h1>
                <p className="text-white mt-4">
                    This is an example of glassmorphism using Tailwind CSS.
                </p>
                <button
                    className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Click Me
                </button>
            </div> */}

            <div className="project-card border rounded-md border-gray-400 bg-white-300/30 backdrop-blur-sm p-6 shadow-lg">
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