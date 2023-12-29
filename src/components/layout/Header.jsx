import React from "react";

import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/storageData";
import { v4 as uuid } from "uuid";

function Header({ activeSpace, setActiveSpace }) {
    // Get spaces from localData
    const { localData, setLocalData } = useContext(DataContext);

    // Set icon colors
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

    // Update localData when spaces changes
    useEffect(() => {
        localData.spaces = spaces;
        setLocalData({ ...localData });
    }, [spaces]);

    // Close mobile header when activeSpace changes
    useEffect(() => {
        const headerElement = document.querySelector(".header");

        if (headerElement.classList.contains("header--active")) {
            headerElement.classList.remove("header--active");
        }
    }, [activeSpace]);

    return (
        <header className="header">
            <div className="header__title-container">
                <button
                    className="mobile__header-close-btn"
                    onClick={() => {
                        document
                            .querySelector(".header")
                            .classList.remove("header--active");
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100"
                        height="100"
                        viewBox="0 0 50 50"
                    >
                        <path d="M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z"></path>
                    </svg>
                </button>

                <h1 className="header__title">NoteIt</h1>
            </div>

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
                        <div>
                            <span className="header__nav-icon">+</span>
                            <button>New space</button>
                        </div>
                    </li>

                    {spaces.map((space, index) => (
                        <li className="header__nav-item" key={space.id}>
                            <div
                                className={` ${
                                    index === activeSpace ? "active" : ""
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
                            </div>

                            {spaces.length > 1 && (
                                <button
                                    className="content__space-delete"
                                    onClick={() => {
                                        const updatedSpaces = [...spaces];

                                        updatedSpaces.splice(index, 1);

                                        setSpaces(updatedSpaces);

                                        if (index === spaces.length - 1) {
                                            setActiveSpace(index - 1);
                                        } else {
                                            setActiveSpace(index);
                                        }
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 50 50"
                                    >
                                        <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                                    </svg>
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
