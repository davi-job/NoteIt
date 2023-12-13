import React from "react";

import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/storageData";

function Header({ activeSpace, setActiveSpace }) {
    // Get spaces from localData
    const { localData } = useContext(DataContext);

    // Set spaces to localData.spaces
    const [spaces, setSpaces] = useState(localData.spaces);

    // Update spaces when localData.spaces changes
    useEffect(() => {
        setSpaces(localData.spaces);
    }, [localData]);

    return (
        <header className="header">
            <h1 className="header__title">NoteIt</h1>

            <nav>
                <h2 className="header__nav-title">Spaces</h2>

                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <span className="header__nav-icon">+</span>
                        <button>New space</button>
                    </li>

                    {spaces.map((space) => (
                        <li
                            key={space.id}
                            className={`header__nav-item ${
                                space.id === activeSpace ? "active" : ""
                            }`}
                            onClick={() => setActiveSpace(space.id)}
                        >
                            <span
                                className="header__nav-icon"
                                style={{ backgroundColor: space.color }}
                            >
                                {space.name.charAt(0)}
                            </span>
                            <button>{space.name}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
