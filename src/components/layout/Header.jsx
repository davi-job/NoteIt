import React from "react";

import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/storageData";
import { v4 as uuid } from "uuid";

function Header({ activeSpace, setActiveSpace }) {
    // Get spaces from localData
    const { localData, setLocalData } = useContext(DataContext);

    const iconColors = [
        "#7209b7",
        "#560bad",
        "#480ca8",
        "#3a0ca3",
        "#3f37c9",
        "#4361ee",
        "#4361ee",
    ];

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
                    <li
                        className="header__nav-item"
                        onClick={() => {
                            spaces.push({
                                id: uuid(),
                                name: "New space",
                                color: iconColors[
                                    Math.floor(
                                        Math.random() * iconColors.length
                                    )
                                ],
                                notes: [],
                            });

                            setLocalData({
                                ...localData,
                            });

                            setActiveSpace(spaces.length - 1);
                        }}
                    >
                        <span className="header__nav-icon">+</span>
                        <button>New space</button>
                    </li>

                    {spaces.map((space, index) => (
                        <li
                            key={space.id}
                            className={`header__nav-item ${
                                space.id === activeSpace ? "active" : ""
                            }`}
                            onClick={() => setActiveSpace(index)}
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
