"use client"

import { useEffect } from "react"

const Modal = ({ isOpen, onClose, title, children }) => {
    // Cerrar modal con ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.keyCode === 27) onClose()
        }
        if (isOpen) {
            document.addEventListener("keydown", handleEsc)
            document.body.style.overflow = "hidden"
        }
        return () => {
            document.removeEventListener("keydown", handleEsc)
            document.body.style.overflow = "unset"
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">{title}</h2>
                    <button className="modal-close" onClick={onClose}>
                        ×
                    </button>
                </div>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    )
}

export default Modal
