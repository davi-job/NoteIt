import React from "react";

import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/storageData";

function Content({ activeSpace }) {
    const { localData, setLocalData } = useContext(DataContext);

    const [notes, setNotes] = useState(localData.spaces[activeSpace].notes);

    useEffect(() => {
        setNotes(localData.spaces[activeSpace].notes);
    }, [localData, activeSpace]);

    function editTask(id, text) {
        for (const note of notes) {
            for (const item of note.items) {
                if (item.id === id) {
                    item.text = text;
                }
            }
        }
    }

    function deleteTask(id) {
        // Create a new copy of the notes array
        let newNotes = JSON.parse(JSON.stringify(notes));

        for (const note of newNotes) {
            let index = note.items.findIndex((item) => item.id === id);
            if (index !== -1) {
                // Remove the item
                note.items.splice(index, 1);

                // Update the IDs of the remaining items
                note.items.forEach((item, index) => {
                    item.id = index;
                });

                break;
            }
        }

        // Update the state with the new array
        setNotes(newNotes);
    }

    return (
        <section className="content">
            <div className="content__container">
                <h2 className="content__title">
                    {localData.spaces[activeSpace].name}
                </h2>

                <div className="content__notes-container">
                    {notes.map((note) => (
                        <div className="content__note" key={note.id}>
                            <h3
                                className="content__note-title"
                                spellCheck={false}
                                suppressContentEditableWarning={true}
                                contentEditable="true"
                                onInput={(e) => {
                                    note.title = e.currentTarget.textContent;
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
                                {note.title}
                            </h3>

                            <ul className="content__note-list">
                                {note.items.map((item) => {
                                    if (item.text === "") {
                                        return null;
                                    }

                                    return (
                                        <li
                                            className="content__note-item"
                                            key={item.id}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={item.checked}
                                                onChange={() => {
                                                    item.checked =
                                                        !item.checked;
                                                    setLocalData({
                                                        ...localData,
                                                    });
                                                }}
                                            />

                                            <div
                                                spellCheck={false}
                                                suppressContentEditableWarning={
                                                    true
                                                }
                                                contentEditable="true"
                                                onInput={(e) =>
                                                    editTask(
                                                        item.id,
                                                        e.currentTarget
                                                            .textContent
                                                    )
                                                }
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter") {
                                                        e.preventDefault();
                                                        e.currentTarget.blur();
                                                    }
                                                }}
                                                onBlur={(e) => {
                                                    if (
                                                        e.currentTarget
                                                            .textContent === ""
                                                    ) {
                                                        deleteTask(item.id);
                                                    }
                                                    setLocalData({
                                                        ...localData,
                                                    });
                                                }}
                                            >
                                                {item.text}
                                            </div>
                                        </li>
                                    );
                                })}

                                {note.items.length < 6 && (
                                    <li
                                        className="content__note-add-task"
                                        onClick={() => {
                                            note.items.push({
                                                id: note.items.length,
                                                text: "New task",
                                                checked: false,
                                            });
                                            setLocalData({
                                                ...localData,
                                            });
                                        }}
                                    >
                                        <p>+</p>
                                        <p>New task</p>
                                    </li>
                                )}
                            </ul>
                        </div>
                    ))}

                    <div
                        className="content__note content__add-note"
                        onClick={() => {
                            notes.push({
                                id: notes.length,
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
