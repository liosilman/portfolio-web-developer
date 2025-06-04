import { portfolioData } from "../../data/portfolioData"


const EducationModal = () => {
    return (
        <div className="modal-education">
            {portfolioData.education.map((edu) => (
                <div key={edu.id} className="education-item">
                    <div className="education-header">
                        <h3 className="education-degree">{edu.degree}</h3>
                        <span className="education-year">{edu.year}</span>
                    </div>
                    <p className="education-institution">{edu.institution}</p>
                    <p className="education-description">{edu.description}</p>
                </div>
            ))}
        </div>
    )
}

export default EducationModal
