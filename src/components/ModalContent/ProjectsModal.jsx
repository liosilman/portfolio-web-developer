import { portfolioData } from "../../data/portfolioData"

const ProjectsModal = () => {
    return (
        <div className="modal-projects">
            <div className="projects-grid-modal">
                {portfolioData.projects.map((project) => (
                    <div key={project.id} className="project-card-modal">
                        <div className="project-image-modal">
                            {project.image ? (
                                <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-img-modal" />
                            ) : (
                                <div className="project-placeholder-modal">{project.title}</div>
                            )}
                        </div>
                        <div className="project-info">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            {project.technologies && (
                                <div className="project-technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <a href={project.link} className="project-link-modal" target="_blank" rel="noopener noreferrer">
                                View Project →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsModal
