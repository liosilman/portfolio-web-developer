

import { portfolioData } from "../../data/portfolioData"

const ContactsModal = () => {
    const handleWhatsAppClick = () => {
        const message = encodeURIComponent("Hola! Me gustaría saber más sobre tus servicios.")
        const whatsappUrl = `https://wa.me/${portfolioData.personal.whatsapp.replace(/[^0-9]/g, "")}?text=${message}`
        window.open(whatsappUrl, "_blank")
    }

    return (
        <div className="modal-contacts">
            <div className="contact-section">
                <h3>Contactame</h3>
                <p className="contact-intro">
                    Si tienes alguna pregunta o deseas discutir un proyecto, no dudes en contactarme. Estoy aquí para ayudarte y responder a todas tus inquietudes.
                </p>
            </div>

            <div className="contact-methods">
                <div className="contact-method">
                    <div className="contact-icon">📞</div>
                    <div className="contact-details">
                        <h4>Phone</h4>
                        <p>{portfolioData.personal.phone}</p>
                    </div>
                    <button className="whatsapp-btn" onClick={handleWhatsAppClick} title="Chat on WhatsApp">
                        <span className="whatsapp-icon">💬</span>
                        WhatsApp
                    </button>
                </div>

                <div className="contact-method">
                    <div className="contact-icon">✉️</div>
                    <div className="contact-details">
                        <h4>Email</h4>
                        <p>{portfolioData.personal.email}</p>
                    </div>
                </div>
            </div>

            <div className="social-section">
                <h4>Follow Me</h4>
                <div className="social-links-modal">
                    {portfolioData.socialLinks.map((social, index) => (
                        <a key={index} href={social.url} className="social-link-modal" target="_blank" rel="noopener noreferrer">
                            <span className="social-icon" dangerouslySetInnerHTML={{ __html: social.svgIcon }} />
                            <span className="social-name">{social.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactsModal
