import React from "react";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/storageData";

function Content({ activeSpace }) {
    const { localData } = useContext(DataContext);

    const [notes, setNotes] = useState(localData.spaces[activeSpace].notes);

    useEffect(() => {
        setNotes(localData.spaces[activeSpace].notes);
    }, [localData, activeSpace]);

    return (
        <section className="content">
            <div className="content__container">
                <h2 className="content__title">
                    {localData.spaces[activeSpace].name}
                </h2>

                <div className="content__notes-container">
                    {notes.map((note) => (
                        <div className="content__note" key={note.id}>
                            <h3 className="content__note-title">
                                {note.title}
                            </h3>

                            <ul className="content__note-list">
                                {note.items.map((item) => (
                                    <li
                                        className="content__note-item"
                                        key={item.text}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={item.checked}
                                            onChange={() => {
                                                item.checked = !item.checked;
                                                setNotes([...notes]);
                                            }}
                                        />
                                        <span>{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="content__note content__add-note">
                        <p>+</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Content;
