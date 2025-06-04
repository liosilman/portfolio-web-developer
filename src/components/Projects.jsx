import { portfolioData } from "../data/portfolioData"

const ProjectCard = ({ project }) => (
    <div className="project-card">
        <div className="project-image">
            {project.image ? (
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-img" />
            ) : (
                <div className="project-placeholder">{project.title}</div>
            )}
        </div>
        <a href={project.link} className="project-link">
            GO TO PROJECT
        </a>
    </div>
)

const Projects = () => {
    return (
        <section className="projects">
            <div className="container">
                <h2>PROYECTOS</h2>
                <div className="projects-grid">
                    {portfolioData.projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
