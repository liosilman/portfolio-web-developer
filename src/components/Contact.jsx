import { portfolioData } from "../data/portfolioData"

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="contact-info">
                    <div className="contact-item">
                        <span>📞</span>
                        <span>{portfolioData.personal.phone}</span>
                    </div>
                    <div className="contact-item">
                        <span>✉️</span>
                        <span>{portfolioData.personal.email}</span>
                    </div>
                </div>

                <div className="social-links">
                    {portfolioData.socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            className="social-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            title={social.name}
                        >
                            <span dangerouslySetInnerHTML={{ __html: social.svgIcon }} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact
