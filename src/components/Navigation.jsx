"use client"

import { portfolioData } from "../data/portfolioData"

const Navigation = ({ onSectionClick }) => {
    const handleItemClick = (item) => {
        if (item !== "HOME") {
            onSectionClick(item.toLowerCase())
        }
    }

    return (
        <nav className="nav">
            <div className="container">
                <ul className="nav-list">
                    {portfolioData.navigation.map((item, index) => (
                        <li key={index} className="nav-item" onClick={() => handleItemClick(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
