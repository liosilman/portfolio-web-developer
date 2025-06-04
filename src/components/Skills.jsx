import { portfolioData } from "../data/portfolioData"

const SkillsList = ({ title, skills }) => (
    <div className="skills-category">
        <h3>{title}</h3>
        <ul className="skills-list">
            {skills.map((skill, index) => (
                <li key={index} className="skill-item-main">
                    <span className="skill-icon-main">{skill.icon}</span>
                    <span>{skill.name}</span>
                </li>
            ))}
        </ul>
    </div>
)

const Skills = () => {
    return (
        <section className="skills">
            <SkillsList title="HARD SKILLS" skills={portfolioData.hardSkills} />
            <SkillsList title="SOFT SKILLS" skills={portfolioData.softSkills} />
        </section>
    )
}

export default Skills
