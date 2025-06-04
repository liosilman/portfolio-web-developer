"use client"

import { useState } from "react"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Modal from "./components/Modal"
import SkillsModal from "./components/ModalContent/SkillsModal"
import EducationModal from "./components/ModalContent/EducationModal"
import ProjectsModal from "./components/ModalContent/ProjectsModal"
import ContactsModal from "./components/ModalContent/ContactsModal"



function App() {
  const [activeModal, setActiveModal] = useState(null)

  const handleSectionClick = (section) => {
    setActiveModal(section)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  const getModalContent = () => {
    switch (activeModal) {
      case "skills":
        return <SkillsModal />
      case "education":
        return <EducationModal />
      case "projects":
        return <ProjectsModal />
      case "contacts":
        return <ContactsModal />
      default:
        return null
    }
  }

  const getModalTitle = () => {
    switch (activeModal) {
      case "skills":
        return "My Skills"
      case "education":
        return "Education & Certifications"
      case "projects":
        return "Featured Projects"
      case "contacts":
        return "Contact Information"
      default:
        return ""
    }
  }

  return (
    <div className="App">
      <Navigation onSectionClick={handleSectionClick} />
      <main>
        <Hero />
        <div className="container">
          <Skills />
        </div>
        <Projects />
        <div className="container">
          <Contact />
        </div>
      </main>

      <Modal isOpen={!!activeModal} onClose={closeModal} title={getModalTitle()}>
        {getModalContent()}
      </Modal>
    </div>
  )
}

export default App
