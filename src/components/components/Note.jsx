import React from "react";

import { useContext } from "react";
import { DataContext } from "../contexts/storageData";
import { v4 as uuid } from "uuid";

import Task from "./Task";

function Note({ note, notes, setNotes }) {
    const { localData, setLocalData } = useContext(DataContext);

    return (
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

            <button
                className="content__note-delete"
                onClick={() => {
                    const updatedNotes = notes.filter((n) => n.id !== note.id);
                    setNotes(updatedNotes);
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
                    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                </svg>
            </button>

            <ul className="content__note-list">
                {note.items.map((item) => {
                    if (item.text === "") {
                        return null;
                    }

                    return (
                        <Task
                            item={item}
                            notes={notes}
                            setNotes={setNotes}
                            key={item.id}
                        />
                    );
                })}

                <li
                    className="content__note-add-task"
                    onClick={() => {
                        note.items.push({
                            id: uuid(),
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
            </ul>
        </div>
    );
}

export default Note;
