import React from "react";

import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/storageData";
import { v4 as uuid } from "uuid";

import Note from "../components/Note";

function Content({ activeSpace }) {
    const { localData, setLocalData } = useContext(DataContext);

    // Set notes to localData.spaces[activeSpace].notes
    const [notes, setNotes] = useState(localData.spaces[activeSpace].notes);

    // Update notes when localData.spaces[activeSpace].notes changes
    useEffect(() => {
        setNotes(localData.spaces[activeSpace].notes);
    }, [localData, activeSpace]);

    // Update localData when notes changes
    useEffect(() => {
        localData.spaces[activeSpace].notes = notes;
        setLocalData({ ...localData });
    }, [notes]);

    return (
        <section className="content">
            <div className="content__container">
                <div className="content__title-container">
                    <button
                        className="mobile__header-btn"
                        onClick={() => {
                            document
                                .querySelector(".header")
                                .classList.add("header--active");
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
                            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                        </svg>
                    </button>

                    <h2
                        className="content__title"
                        spellCheck={false}
                        suppressContentEditableWarning={true}
                        contentEditable="true"
                        onInput={(e) => {
                            localData.spaces[activeSpace].name =
                                e.currentTarget.textContent;
                        }}
                        onBlur={(e) => {
                            setLocalData({ ...localData });
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                e.currentTarget.blur();
                            }
                        }}
                    >
                        {localData.spaces[activeSpace].name}
                    </h2>
                </div>

                <div className="content__notes-container">
                    {notes.map((note) => (
                        <Note
                            note={note}
                            notes={notes}
                            setNotes={setNotes}
                            activeSpace={activeSpace}
                            key={note.id}
                        />
                    ))}

                    <div
                        className="content__note content__add-note"
                        onClick={() => {
                            notes.push({
                                id: uuid(),
                                title: "New note",
                                items: [],
                            });

                            setNotes([...notes]);
                        }}
                    >
                        <p>+</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Content;
