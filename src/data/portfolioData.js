// 🎯 ARCHIVO DE CONFIGURACIÓN 
export const portfolioData = {
    // Información personal
    personal: {
        title: "WEB DEVELOPER",
        name: "Lio Silman",
        phone: "+54 1157685990",
        email: "liosilman02@gmail.com",
        whatsapp: "+54 1157685990", 
    },

    // Navegación 
    navigation: ["HABILIDADES", "EDUCACION", "PROYECTOS", "CONTACTO"],

    // Habilidades técnicas con iconos
    hardSkills: [
        { name: "REACT & NEXT.JS", icon: "⚛️" },
        { name: "JAVASCRIPT & TYPESCRIPT", icon: "🟨" },
        { name: "NODE.JS & EXPRESS", icon: "🟢" },
        { name: "HTML5 & CSS3", icon: "🌐" },
        { name: "GIT & GITHUB", icon: "📚" },
        { name: "RESPONSIVE DESIGN", icon: "📱" },
        { name: "REST APIs", icon: "🔗" },
        { name: "MONGODB & MYSQL", icon: "📊" },
    ],

    // Habilidades blandas con iconos
    softSkills: [
        { name: "RESOLUCION DE PROBLEMAS", icon: "🧩" },
        { name: "TRABALAR EN EQUIPO", icon: "🤝" },
        { name: "CREATIVIDAD", icon: "🔄" },
        { name: "APRENDIZAJE CONTINUO", icon: "📈" },
        { name: "ATENCION AL DETALLE", icon: "🔍" },
        { name: "PUNTUALIDAD", icon: "⏰" },
    ],

    // Educación
    education: [
        {
            id: 1,
            degree: "English C1",
            institution: "BA Conecta",
            year: "2024-2025",
            description: "Certificate C1 Level in English",
        },
        {
            id: 2,
            degree: "Diplomatura Full Stack Web Development",
            institution: "UTN",
            year: "2024-2025",
            description: "Diplomatura de Full Stack Web Development con enfoque en tecnologías modernas",
        },
    ],

    // Proyectos con imágenes reales
    projects: [
        {
            id: 1,
            title: "Slack Clone App",
            description: "Full-stack clon de Slack con React y Node.js",
            link: "https://utn-2025-fe-dpl.vercel.app/login",
            image: "/images/slack-clone.png",
            technologies: ["React JS", "Node.js", "MongoDB"],
        },
        {
            id: 2,
            title: "Retro Games",
            description: "Pagina web de juegos retro con React",
            link: "https://retro-games-lac.vercel.app/",
            image: "/images/retro-games.png",
            technologies: ["React JS", "HTML5 Canvas", "CSS3"],
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "Sitio web personal para mostrar proyectos y habilidades",
            link: "#",
            image: "/images/portfolio-preview.png",
            technologies: ["React", "CSS3", "Responsive Design"],
        },
    ],

    // Redes sociales con iconos SVG
    socialLinks: [
        {
            name: "LinkedIn",
            symbol: "💼",
            url: "https://www.linkedin.com/in/lionel-silman/",
            svgIcon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>`,
        },
        {
            name: "GitHub",
            symbol: "💻",
            url: "https://github.com/liosilman",
            svgIcon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>`,
        },
    ],
}
