import React from "react";
import { useState } from "react";

function Header({ activeSpace, setActiveSpace }) {
    const [spaces, setSpaces] = useState([
        {
            id: 0,
            name: "Casa da Gente",
        },
        {
            id: 1,
            name: "Job Uniformes",
        },
    ]);

    return (
        <header className="header">
            <h1 className="header__title">NoteIt</h1>
            <nav>
                <h2 className="header__nav-title">Spaces</h2>

                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <span className="header__nav-icon"></span>
                        <button>Novo espaço</button>
                    </li>

                    {spaces.map((space) => (
                        <li
                            key={space.id}
                            className={`header__nav-item ${
                                space.id === activeSpace ? "active" : ""
                            }`}
                            onClick={() => setActiveSpace(space.id)}
                        >
                            <span className="header__nav-icon"></span>
                            <button>{space.name}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
