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
