import React from "react";

import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/storageData";
import { v4 as uuid } from "uuid";

import Note from "../components/Note";

function Content({ activeSpace }) {
    const { localData, setLocalData } = useContext(DataContext);

    const [notes, setNotes] = useState(localData.spaces[activeSpace].notes);

    useEffect(() => {
        setNotes(localData.spaces[activeSpace].notes);
    }, [localData, activeSpace]);

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

                            setLocalData({
                                ...localData,
                            });
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
