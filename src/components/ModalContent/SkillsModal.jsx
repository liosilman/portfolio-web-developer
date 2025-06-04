import { portfolioData } from "../../data/portfolioData"

const SkillsModal = () => {
    return (
        <div className="modal-skills">
            <div className="skills-section">
                <h3>Technical Skills</h3>
                <div className="skills-grid">
                    {portfolioData.hardSkills.map((skill, index) => (
                        <div key={index} className="skill-item-modal">
                            <span className="skill-icon">{skill.icon}</span>
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="skills-section">
                <h3>Soft Skills</h3>
                <div className="skills-grid">
                    {portfolioData.softSkills.map((skill, index) => (
                        <div key={index} className="skill-item-modal">
                            <span className="skill-icon">{skill.icon}</span>
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillsModal
